let white = document.getElementById('white');
buttons = document.querySelectorAll('button');
let whitevalue = '';
for (let item of buttons) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log('Button text is ', buttontext);
        if (buttontext == 'X') {
            buttontext = '*';
            whitevalue += buttontext;
            white.value = whitevalue;
        }
        else if (buttontext == 'C') {
            whitevalue = "";
            white.value = whitevalue;
        }
        else if (buttontext == '=') {
            white.value = eval(whitevalue);
        }
        else {
            whitevalue += buttontext;
            white.value = whitevalue;
        }

    })
}