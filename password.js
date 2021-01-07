let passField = document.querySelector('.main_input');
let passInput = document.getElementById('f');
let passwordContainer = document.getElementById('password_container');
let security = document.getElementById('security');

let firstInput = document.getElementById('first');
let secondInput = document.getElementById('second');
let thirdInput = document.getElementById('third');
let fourthInput = document.getElementById('fourth');

passInput.value = '16';

function generatePassword() {
    if (Number(passInput.value) > 100) return;

    var length = Number(passInput.value),
        charset = "",
        retVal = "";

    if (firstInput.checked) {
        charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    }

    if (secondInput.checked) {
        charset += "1234567890";
    }

    if (thirdInput.checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }

    if (fourthInput.checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    return retVal;
}

function insertPassword() {
    if (Number(passInput.value) > 100) {
        passField.value = 'ERROR';
    } else {
        passField.value = generatePassword();
    }

    if (passField.value.length < 11) {
        passwordContainer.style.boxShadow = '0px 0px 0px 2px inset #FF0023, 8px 8px 15px black';
        security.style.backgroundColor = '#FF0023';
        security.style.display = 'block';
        security.innerHTML = 'ненадежный';
    } 

    if (passField.value.length  <= 30 && passField.value.length  >= 11) {
        passwordContainer.style.boxShadow = '0px 0px 0px 2px inset #04FF00, 8px 8px 15px black';
        security.style.backgroundColor = '#04FF00';
        security.style.display = 'block';
        security.innerHTML = 'надежный';
    }
     
    if (passField.value.length  > 30) {
        passwordContainer.style.boxShadow = '0px 0px 0px 2px inset yellow, 8px 8px 15px black';
        security.style.backgroundColor = 'yellow';
        security.style.display = 'block';
        security.innerHTML = 'непреодолимый';
    }

    if (passField.value == 'ERROR') security.innerHTML = 'ERROR';

    if (passField.value == '') {
        security.innerHTML = 'ERROR';
        passField.value = 'ERROR';
    }
}

insertPassword();
