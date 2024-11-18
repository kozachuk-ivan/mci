// Список файлів за групами
const fileGroups = {
  group1: [
    {
      name: "1 квартал (1)",
      url: "../mci/files/2023_fame/1_quarter_fame/1(1).pdf",
    },
    {
      name: "1 квартал (2)",
      url: "/mci/files/2023_fame/1_quarter_fame/1(2).pdf",
    },
    {
      name: "1 квартал (3)",
      url: "../files/2023_fame/1_quarter_fame/1(3).pdf",
    },
    {
      name: "1 квартал (4)",
      url: "../files/2023_fame/1_quarter_fame/1(4).pdf",
    },
  ],
  group2: [
    {
      name: "2 квартал (1)",
      url: "../files/2023_fame/2_quarter_fame/2(1).pdf",
    },
    {
      name: "2 квартал (2)",
      url: "../files/2023_fame/2_quarter_fame/2(2).pdf",
    },
    {
      name: "2 квартал (3)",
      url: "../files/2023_fame/2_quarter_fame/2(3).pdf",
    },
    {
      name: "2 квартал (4)",
      url: "../files/2023_fame/2_quarter_fame/2(4).pdf",
    },
    {
      name: "2 квартал (5)",
      url: "../files/2023_fame/2_quarter_fame/2(5).pdf",
    },
    {
      name: "2 квартал (6)",
      url: "../files/2023_fame/2_quarter_fame/2(6).pdf",
    },
    {
      name: "2 квартал (7)",
      url: "../files/2023_fame/2_quarter_fame/2(7).pdf",
    },
  ],
  group3: [
    {
      name: "3 квартал (1)",
      url: "../files/2023_fame/3_quarter_fame/3(1).pdf",
    },
    {
      name: "3 квартал (2)",
      url: "../files/2023_fame/3_quarter_fame/3(2).pdf",
    },
    {
      name: "3 квартал (3)",
      url: "../files/2023_fame/3_quarter_fame/3(3).pdf",
    },
    {
      name: "3 квартал (4)",
      url: "../files/2023_fame/3_quarter_fame/3(4).pdf",
    },
    {
      name: "3 квартал (5)",
      url: "../files/2023_fame/3_quarter_fame/3(5).pdf",
    },
    {
      name: "3 квартал (6)",
      url: "../files/2023_fame/3_quarter_fame/3(6).pdf",
    },
    {
      name: "3 квартал (7)",
      url: "../files/2023_fame/3_quarter_fame/3(7).pdf",
    },
    {
      name: "3 квартал (8)",
      url: "../files/2023_fame/3_quarter_fame/3(8).pdf",
    },
  ],
  group4: [
    { name: "2023 рік (1)", url: "../files/2023_fame/sum_fame/2023(1).pdf" },
    { name: "2023 рік (2)", url: "../files/2023_fame/sum_fame/2023(2).pdf" },
    {
      name: "2023 рік (загальна)",
      url: "../files/2023_fame/sum_fame/2023(sum).pdf",
    },
  ],
};

// Рендеринг файлів для кожної групи
Object.keys(fileGroups).forEach((groupId) => {
  const groupContainer = document.querySelector(`#${groupId} .fame__list`);
  const files = fileGroups[groupId];

  files.forEach((file) => {
    const fileItem = document.createElement("div");
    fileItem.classList.add("fame__item");

    const fileName = document.createElement("div");
    fileName.classList.add("fame__name");
    fileName.textContent = file.name;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("fame__buttons");

    // Кнопка для завантаження
    const downloadBtn = document.createElement("button");
    downloadBtn.classList.add("fame__button", "fame__button--download");
    downloadBtn.textContent = "📥 Завантажити";

    // Кнопка для перегляду
    const viewBtn = document.createElement("button");
    viewBtn.classList.add("fame__button", "fame__button--view");
    viewBtn.textContent = "👁️ Переглянути";

    buttonsContainer.appendChild(downloadBtn);
    buttonsContainer.appendChild(viewBtn);

    fileItem.appendChild(fileName);
    fileItem.appendChild(buttonsContainer);
    groupContainer.appendChild(fileItem);

    // Функціональність кнопки "Завантажити"
    downloadBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = file.url;
      link.download = `${file.name}.pdf`;
      link.click();
    });

    // Функціональність кнопки "Переглянути"
    viewBtn.addEventListener("click", () => {
      window.open(file.url, "_blank");
    });
  });
});
