let display = document.getElementById("display");

let button = Array.from(document.getElementsByClassName("btnn"));


button.map((btnn) => {

    btnn.addEventListener("click", (e) => {

        let key = e.target.innerText;

        if (key == "a/c") {

            display.innerText = "0";

        }else if (key == "del") {

            display.innerText = display.innerText.slice(0, -1);

        }else if (key == "=") {
            
            if (display.innerText) {

                display.innerText = eval(display.innerText);
            }
        }
        else {

            display.innerText += key;
        }
    });
});


// function sqrt(form) {
// 	form.display.value = Math.sqrt(form.display.value);
// }