// Функция отправки fetch-запроса
let sendRequest = function (url) {
    return fetch(url).then(response => {
        if (response.ok) {
            return response.text();
        }
    });
}
let button = document.querySelector("#button");
let onButtonSubmit = function () {
    sendRequest("../another.php").then( response => {
        document.body.innerHTML = response;
    });    
}
button.addEventListener('click', onButtonSubmit);