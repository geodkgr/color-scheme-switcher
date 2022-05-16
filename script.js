const buttons = document.querySelectorAll("button");
const body = document.getElementById("body");

buttons.forEach(function(button) {
    button.addEventListener("click", () => {
        let data = button.getAttribute("data-color");
        console.log(data);

        body.style.backgroundColor = data;
    })
});