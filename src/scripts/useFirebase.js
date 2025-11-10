window.firebaseConfig = {
  apiKey: "AIzaSyABeSs24iG5DaXYqe4hJIKBhBkiqdfC7og",
  authDomain: "astrazeneca-csq.firebaseapp.com",
  projectId: "astrazeneca-csq",
  storageBucket: "astrazeneca-csq.firebasestorage.app",
  messagingSenderId: "821833803001",
  appId: "1:821833803001:web:85bba4ba444c197ac32e28",
  measurementId: "G-KVR6EY12L7",
};

async function getDocumentsOrderedByField(collectionDB) {
  try {
    const querySnapshot = await collectionDB
      .orderBy("point", "desc")
      .orderBy("time", "asc")
      .get();

    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return [];
    }

    let results = [];
    querySnapshot.forEach((doc) => {

      results.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    console.log("results", results);

    return results;
  } catch (error) {
    console.error("Error retrieving documents: ", error);
    return [];
  }
}

async function updateIfGreater(db, docRef, fieldName, newValue) {
  try {
    await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(docRef);
      if (!doc.exists) {
        throw new Error("Document does not exist!");
      }

      const game1 = doc.data()["game1"] || 0;
      const game2 = doc.data()["game2"] || 0;
      const game3 = doc.data()["game3"] || 0;
      const games = [game1, game2, game3];
      games.sort(function (a, b) {
        return b - a;
      });

      const currentValue = doc.data()[fieldName] || 0;

      if (newValue > currentValue) {
        transaction.update(docRef, {
          [fieldName]: newValue,
          maior: newValue > games[0] ? newValue : games[0],
        });
        console.log("Field updated because the new value is greater.");
      } else {
        console.log("Field not updated because the new value is not greater.");
      }
    });
  } catch (error) {
    console.error("Transaction failed: ", error);
  }
}

function addOrUpdateDocument(docRef, data) {
  try {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("update", docRef);
          docRef
            .update({
              ...data,
            })
            .then(() => {
              console.log("Document successfully update!");
            })
            .catch((error) => {
              console.error("Error update: ", error);
            });
        } else {
          console.log("set", docRef);
          docRef
            .set({
              ...data,
            })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error set:", error);
      });
  } catch (error) {
    console.error("Erro ao adicionar ou atualizar documento: ", error);
  }
}

function updateDocumentStatus(docRef, data) {
  try {
    docRef
      .update({
        desativado: data.desativado,
      })
      .then(() => {
        console.log("Document successfully update Desativo!");
      })
      .catch((error) => {
        console.error("Error update Desativo: ", error);
      });
  } catch (error) {
    console.error("Erro ao adicionar ou atualizar documento: ", error);
  }
}

function listenToUpdates(collection, call) {
  let isInitialLoad = true;

  collection.onSnapshot(
    (snapshot) => {
      if (isInitialLoad) {
        // Ignorar o primeiro snapshot, que é o estado inicial da coleção
        isInitialLoad = false;
        return;
      }

      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New document: ", change.doc.data());
          call(change);
        }
        if (change.type === "modified") {
          console.log("Modified document: ", change.doc.data());
          call(change);
        }
      });
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );
}

function deleteDocument(docRef, call) {
  docRef
    .delete()
    .then(() => {
      console.log("Documento deletado com sucesso!");
      call();
    })
    .catch((error) => {
      console.error("Erro ao deletar o documento: ", error);
    });
}

///Inicialização do Firebase
window.initFirebase = false;
$(document).ready(function () {
  if (!window.initFirebase) {
    const firebaseApp = firebase.initializeApp(window.firebaseConfig);
    window.db = firebaseApp.firestore();
    window.collectionDB = window.db.collection("usuarios");
    window.initFirebase = true;
  }
});

/// Criação do formulario
bridge.handlerFormDB = function (data) {
  const docRef = window.collectionDB.doc(data.email);
  addOrUpdateDocument(docRef, data);
};

/// Criação da nota do game
bridge.handlerGameDB = function (email, gameName, point) {
  const docRef = window.collectionDB.doc(email);
  updateIfGreater(window.db, docRef, gameName, point);
};

/// Criação da Ranking
bridge.listRankingDB = function (call) {
  getDocumentsOrderedByField(window.collectionDB)
    .then((results) => {
      console.log("Documents ordered by field in descending order:");
      call(results);
    })
    .catch((error) => {
      console.error("Error in getDocumentsOrderedByField: ", error);
    });
};

/// Controle do formulário via realtime - para mobile
bridge.handlerSnapshotFormDB = function (call) {
  listenToUpdates(window.collectionDB, call);
};

/// Controle de Status
bridge.handlerControlStatusUser = function (data, call) {
  console.log(data);
  const docRef = window.collectionDB.doc(data.email);
  deleteDocument(docRef, call);
};
