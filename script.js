// VARIABLES

const digit = document.getElementsByTagName("h2")[0];

const buttons = Array.from(document.getElementsByTagName("button"));

let current_num = 0;

digit.textContent = current_num;



// FUNCTIONS

function updateColor() {
    if (current_num == 0) {
        digit.style.color = "black";
    } else if (current_num > 0) {
        digit.style.color = "green";
    } else if (current_num < 0) {
        digit.style.color = "red";
    }
}

// EVENT LISTENERES

buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        if (e.currentTarget.textContent == "-") {
            current_num--;       
        } else if (e.currentTarget.textContent == "RESET") {
            current_num = 0;
        } else if (e.currentTarget.textContent == "+") {
            current_num++;
        }
        digit.textContent = current_num;
        updateColor();
    });
});