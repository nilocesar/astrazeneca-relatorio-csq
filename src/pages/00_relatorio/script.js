$(document).ready(function () {
  intRelatorio();

  $("#dwnldBtn").on("click", async () => {
    // Clona a tabela sem afetar a original

    let workbook = new ExcelJS.Workbook();
    let worksheet = workbook.addWorksheet("Planilha1");

    let table = document.getElementById("dataTable");

    // Função para garantir que números sejam convertidos em strings
    function convertToString(value) {
      return typeof value === "number" ? value.toString() : value;
    }

    // Pega o cabeçalho, remove <br>, <small>, converte números para string e remove a última coluna
    let headers = table.querySelectorAll("thead th");
    let headerRow = Array.from(headers)
      .slice(0, -1)
      .map((th) => {
        let cleanText = th.innerHTML.replace(/<br\s*\/?>/g, "\n"); // Substitui <br> por nova linha
        cleanText = cleanText.replace(/<small>(.*?)<\/small>/g, "$1"); // Remove <small> e mantém o texto
        return convertToString(cleanText); // Converte para string
      });

    // Adiciona cabeçalho ao Excel com estilo
    let header = worksheet.addRow(headerRow);
    header.height = 30;
    header.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "8a034f" },
      };
      cell.font = { bold: true, color: { argb: "FFFFFF" } }; // Texto branco e negrito
      cell.alignment = {
        horizontal: "center",
        vertical: "middle",
        wrapText: true,
      }; // Centraliza e permite quebra de linha
      cell.border = {
        top: { style: "thin", color: { argb: "ffffff" } },
        left: { style: "thin", color: { argb: "ffffff" } },
        bottom: { style: "thin", color: { argb: "ffffff" } },
        right: { style: "thin", color: { argb: "ffffff" } },
      }; // Adiciona borda preta
      cell.numFmt = "@"; // Formato como texto no Excel
    });

    // Pega as linhas, converte <br> em nova linha, remove <small>, converte números para string e remove a última coluna
    let rows = table.querySelectorAll("tbody tr");
    rows.forEach((row, rowIndex) => {
      let rowData = Array.from(row.querySelectorAll("td"))
        .slice(0, -1)
        .map((td) => {
          let cleanText = td.innerHTML.replace(/<br\s*\/?>/g, "\n"); // Substitui <br> por nova linha
          cleanText = cleanText.replace(/<small>(.*?)<\/small>/g, "$1"); // Remove <small> e mantém o texto
          return convertToString(cleanText); // Converte para string
        });
      let excelRow = worksheet.addRow(rowData);
      excelRow.height = 20;

      excelRow.eachCell((cell) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "f2e5ec" },
        };

        if (rowIndex % 2 === 0) {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "f9f2f5" },
          };
        }

        cell.alignment = {
          horizontal: "center",
          vertical: "middle",
          wrapText: true,
        }; // Centraliza e permite quebra de linha
        cell.border = {
          top: { style: "thin", color: { argb: "8a034f" } },
          left: { style: "thin", color: { argb: "8a034f" } },
          bottom: { style: "thin", color: { argb: "8a034f" } },
          right: { style: "thin", color: { argb: "8a034f" } },
        }; // Adiciona borda preta
        if (!isNaN(cell.value)) {
          console.log(cell.value);
          cell.value = String(cell.value);
          cell.numFmt = "@"; // Formato como texto no Excel
        }
      });
    });

    // Ajusta largura das colunas automaticamente e define larguras personalizadas para a 2ª e 3ª colunas
    worksheet.columns.forEach((column, index) => {
      if (index === 1) {
        // 2ª coluna
        column.width = 40; // Largura personalizada para a 2ª coluna
      } else if (index === 2) {
        // 3ª coluna
        column.width = 40; // Largura personalizada para a 3ª coluna
      } else {
        column.width = 15; // Largura padrão para outras colunas
      }
    });

    // Salva o arquivo
    let buffer = await workbook.xlsx.writeBuffer();
    let blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `relatorio_${Date.now()}.xlsx`;
    link.click();
  });
});

const intRelatorio = () => {
  $(".preloader").removeClass("hide");
  $("#pop1").css("display", "none");
  setTimeout(() => {
    bridge.listRankingDB((results) => {
      // console.log(results);
      controlRanking(results);
      $(".preloader").addClass("hide");
    });
  }, 1000 * 2);
};

const letraFiltro = (indice) => {
  const letra = ["A", "B", "C", "D", "E"];
  return letra[indice - 1];
};

function segundosParaHora(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
    2,
    "0"
  )}:${String(segundosRestantes).padStart(2, "0")}`;
}

const controlRanking = (results) => {
  $("#dataTable tbody").empty();
  results.map((item, indice) => {
    $("#dataTable tbody")
      .append(`<tr class="it it${indice}" indice=${indice} name=${
      item.data.name
    } email=${item.data.email}>
								<td>${indice + 1 < 10 ? "0" : ""}${String(indice + 1)}</td>
								<td>${item.data.nome || item.data.name}</td>
								<td>${item.data.email}</td>
								<td>${Number(item.data.point)}</td>
                <td>${Number(item.data.time || 0)}s</td>
                <td class="deletarBtn" indice=${indice} name=${
      item.data.name
    } email=${item.data.email}><span>${"Deletar"}</span></td>
							</tr>`);

    return item;
  });

  var currentItem = null;
  $(".deletarBtn").on("click", function () {
    currentItem = $(this);
    $("#pop1").css("display", "flex");
    $("#pop1").find("span").html(currentItem.attr("name"));
  });

  $("#cancel").on("click", function () {
    $("#pop1").css("display", "none");
  });

  $("#confirmClearBd").on("click", function () {
    $("#pop1").css("display", "none");
    const item = results[currentItem.attr("indice")].data;

    // console.log(item);

    const data = { ...item };

    $(".preloader").removeClass("hide");
    bridge.handlerControlStatusUser(data, () => {
      intRelatorio();
    });
  });
};
