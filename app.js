const welcomeMsg   = document.getElementById('welcome-msg');
const mainContent   = document.getElementById('main-content'); 

const keypressDiv   = document.getElementById('keypress-div'); 

const boxContainer  = document.getElementById('box-container'); 
const evKey         = document.getElementById('ev-key');
const evWhich       = document.getElementById('ev-which');
const evCode        = document.getElementById('ev-code');

const evKeyCtrl     = document.getElementById('ev-ctrl');
const evKeyShift    = document.getElementById('ev-shift');
const evKeyAlt      = document.getElementById('ev-alt');


document.addEventListener('keydown', (event) => {
    
    console.log(event);

    // switch screens 
    if(mainContent.style.opacity != 1){
        welcomeMsg.style.opacity = 0;
        mainContent.style.opacity = 1;
    }

    event.preventDefault();

    keypressDiv.textContent = event.which;

    evCode.textContent      = event.code;
    evKey.textContent       = event.key;
    evWhich.textContent     = event.which;
    
    evKeyCtrl.style.borderColor = event.ctrlKey   ? 'blue'  : '#ccc';
    evKeyCtrl.style.color       = event.ctrlKey   ? 'black' : '#ccc';

    evKeyShift.style.borderColor = event.shiftKey ? 'red'   : '#ccc';
    evKeyShift.style.color       = event.shiftKey ? 'black' : '#ccc';

    evKeyAlt.style.borderColor  = event.altKey    ? 'chartreuse' : '#ccc';
    evKeyAlt.style.color        = event.altKey    ? 'black'      : '#ccc';

});


