function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // добавляет плавную прокрутку
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("season-banner");
    const body = document.body;

    // Получаем текущую дату
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    // Проверяем праздники
    const holidays = [
        { name: "New Year", date: "01-01", banner: "banners/newyear1.jpeg", bgColor: "#FFD700" }, // Золотой
        { name: "New Year", date: "12-31", banner: "banners/newyear1.jpeg", bgColor: "#FFD700" }, // Золотой
        { name: "Halloween", date: "10-31", banner: "banners/halloween1.jpeg", bgColor: "#FF4500" }, // Оранжевый
        { name: "Christmas", date: "12-25", banner: "banners/christmas1.jpeg", bgColor: "#228B22" }, // Зеленый
        { name: "Easter", banner: "banners/easter1.jpeg", bgColor: "#FF1CFC", date: calculateEaster(now.getFullYear()) }, // Лавандовый
        { name: "Football Day", banner: "banners/foorballday1.jpeg", bgColor: "#00AAFF", date: "12-10" }, // Лавандовый
        { name: "Programmer Day", banner: "banners/programmerday1.jpeg", bgColor: "#00FA34", date: "01-07" }
    ];

    const today = `${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const holiday = holidays.find(h => h.date === today);

    if (holiday) {
        banner.src = holiday.banner;
        body.style.backgroundColor = holiday.bgColor;
        return;
    } else {
        console.log("Сьогодні немає свята.");
    }
    

    // Проверяем время года
    const seasons = [
        { name: "Winter", months: [11, 0, 1], banner: "banners/winter1.jpeg", bgColor: "#00AAFF" }, // Голубой
        { name: "Spring", months: [2, 3, 4], banner: "banners/spring1.jpeg", bgColor: "#98FB98" }, // Светло-зеленый
        { name: "Summer", months: [5, 6, 7], banner: "banners/summer1.jpeg", bgColor: "#FFE4B5" }, // Кремовый
        { name: "Autumn", months: [8, 9, 10], banner: "banners/autumn1.jpeg", bgColor: "#FFDEAD" } // Светло-оранжевый
    ];

    const season = seasons.find(s => s.months.includes(month));
    if (season) {
        banner.src = season.banner;
        body.style.backgroundColor = season.bgColor;
    }

    console.log(holiday.name);

});

// Функция для вычисления даты Пасхи
function calculateEaster(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31) - 1;
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return `${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

scrollToTop();