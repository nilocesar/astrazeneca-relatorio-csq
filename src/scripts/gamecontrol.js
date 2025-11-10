function getObjectFromLocalStorage(key) {
  const jsonString = localStorage.getItem(key);
  return jsonString ? JSON.parse(jsonString) : null;
}

function checkAndSaveOrUpdateObject(storageKey, newData) {
  // Recuperar o objeto do localStorage
  const storedObject = getObjectFromLocalStorage(storageKey);
  let data = storedObject ? { ...storedObject, ...newData } : newData;
  console.log(`${storedObject ? "Updating" : "Creating"} stored`, data);

  // Salvar o objeto atualizado ou novo no localStorage
  const jsonString = JSON.stringify(data);
  localStorage.setItem(storageKey, jsonString);
}

function fullscreen() {
  $(".fullscreen").on("click", function () {
    bridge.fullScreen();
  });
}

$(document).ready(function () {
  fullscreen();

  // navigate.goto(`01_capa`); /// sempre abre o curso na capa

  // $("body").on("setOrUpdateObject", function (e, storageKey, newData) {
  //   checkAndSaveOrUpdateObject(storageKey, newData);
  // });

  // $("body").on("game", function (e, game, point) {
  //   const user = getObjectFromLocalStorage("user");
  //   const gameName = "game" + game;

  //   checkAndSaveOrUpdateObject("user", { [gameName]: point });
  //   bridge.handlerGameDB(user.email, gameName, point);
  //   navigate.goto(`05_ranking`);
  // });
});
