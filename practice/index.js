//  ----------------- 26.2 ---------------
// option 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// --------------- option 3 ------------------
//  <button id="make-blue">Make Blue</button> (html file)
const makeBlueButton = document.getElementById('make-blue');

makeBlueButton.onlick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//------option - 3.5 ------- directly function boshaye dibo onclick e
const makePurpleButton = document.getElementById('make-purple');

makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}