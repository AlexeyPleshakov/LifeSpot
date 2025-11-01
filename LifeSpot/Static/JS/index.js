let session = new Map();
function handleSession() {
    session.set("userAgent", window.navigator.userAgent);
    session.set("startDate", new Date().toLocaleString())
    setTimeout(() =>
        alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"), 3000);
}
function checkAge() { 
session.set("age", prompt("Пожалуйста, введите ваш возраст?"))
if (session.get("age") >= 18) {
    let startDate = new Date().toLocaleString();
    alert("Приветствуем на LifeSpot " + startDate);
    session.set("", startDate);
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
    }
}

let sessionLog = function logSession(session) {
    for (let result of session) {
        console.log(result)
    }
}

function filterContent() {

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(InputParseFunction().toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}
