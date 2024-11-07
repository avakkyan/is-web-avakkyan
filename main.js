(function () {
    window.addEventListener("load", function () {
        const [performanceEntry] = performance.getEntriesByType("navigation");

        const loadTime =
            performanceEntry.domContentLoadedEventEnd -
            performanceEntry.startTime;

        const footer = document.getElementById("load-stats");

        footer.innerHTML = `Страничка загрузилась: ${Math.round(loadTime)} мс`;
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    const currentPath = document.location.href;

    navLinks.forEach(link => {
        if (link.href === currentPath) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const wineTableBody = document.querySelector("#wineTable tbody");
    const addWineBtn = document.getElementById("addWineBtn");
    const wineModal = document.getElementById("wineModal");
    const wineForm = document.getElementById("wineForm");
    let editIndex = null;  // Индекс для отслеживания редактируемой строки

    // Открытие модального окна для добавления нового вина
    addWineBtn.addEventListener("click", function () {
        openModal("Добавить новое вино");
        wineForm.reset();
        editIndex = null;  // Убираем значение индекса при добавлении нового вина
    });

    // Сохранение данных о вине
    wineForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const wineData = {
            name: document.getElementById("wineName").value,
            type: document.getElementById("wineType").value,
            price: document.getElementById("winePrice").value,
            country: document.getElementById("wineCountry").value,
            year: document.getElementById("wineYear").value,
            strength: document.getElementById("wineStrength").value,
            rating: document.getElementById("wineRating").value
        };

        if (editIndex !== null) {
            updateWineInTable(wineData, editIndex);  // Обновляем вино в таблице
        } else {
            addWineToTable(wineData);  // Добавляем новое вино в таблицу
        }

        closeModal();
        saveWinesToLocalStorage();  // Сохраняем данные в LocalStorage
    });

    function addWineToTable(wine) {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${wine.name}</td>
        <td>${wine.type}</td>
        <td>${wine.price}</td>
        <td>${wine.country}</td>
        <td>${wine.year}</td>
        <td>${wine.strength}</td>
        <td>${wine.rating}</td>
        <td>
            <button class="edit-btn">Редактировать</button>
            <button class="delete-btn">Удалить</button>
        </td>
    `;

        // Добавляем строку в таблицу
        wineTableBody.appendChild(row);

        // Назначаем обработчики событий для кнопок "Редактировать" и "Удалить"
        const editBtn = row.querySelector(".edit-btn");
        const deleteBtn = row.querySelector(".delete-btn");

        editBtn.addEventListener("click", () => editWine(wineTableBody.rows.length - 1));
        deleteBtn.addEventListener("click", () => deleteWine(wineTableBody.rows.length - 1));
    }

    function updateWineInTable(wine, index) {
        const row = wineTableBody.rows[index];
        row.cells[0].textContent = wine.name;
        row.cells[1].textContent = wine.type;
        row.cells[2].textContent = wine.price;
        row.cells[3].textContent = wine.country;
        row.cells[4].textContent = wine.year;
        row.cells[5].textContent = wine.strength;
        row.cells[6].textContent = wine.rating;
    }

    function editWine(index) {
        editIndex = index;
        const row = wineTableBody.rows[index];

        // Заполняем форму данными из выбранной строки
        document.getElementById("wineName").value = row.cells[0].textContent;
        document.getElementById("wineType").value = row.cells[1].textContent;
        document.getElementById("winePrice").value = row.cells[2].textContent;
        document.getElementById("wineCountry").value = row.cells[3].textContent;
        document.getElementById("wineYear").value = row.cells[4].textContent;
        document.getElementById("wineStrength").value = row.cells[5].textContent;
        document.getElementById("wineRating").value = row.cells[6].textContent;

        openModal("Редактировать вино");
    }

    function deleteWine(index) {
        wineTableBody.deleteRow(index);
        saveWinesToLocalStorage();  // Обновляем LocalStorage после удаления
    }

    // Функция открытия модального окна
    function openModal(title) {
        document.getElementById("modalTitle").textContent = title;
        wineModal.style.display = "flex";
    }

    function closeModal() {
        wineModal.style.display = "none";
    }

    // Сохранение всех вин в LocalStorage
    function saveWinesToLocalStorage() {
        const wines = [];
        for (let row of wineTableBody.rows) {
            wines.push({
                name: row.cells[0].textContent,
                type: row.cells[1].textContent,
                price: row.cells[2].textContent,
                country: row.cells[3].textContent,
                year: row.cells[4].textContent,
                strength: row.cells[5].textContent,
                rating: row.cells[6].textContent
            });
        }
        localStorage.setItem("wines", JSON.stringify(wines));
    }

    // Загрузка вин из LocalStorage
    function loadWinesFromLocalStorage() {
        const wines = JSON.parse(localStorage.getItem("wines")) || [];
        wines.forEach(wine => addWineToTable(wine));
    }

    loadWinesFromLocalStorage();

    // Закрытие модального окна при клике снаружи
    window.onclick = function (event) {
        if (event.target === wineModal) {
            closeModal();
        }
    };
});
