const welcomeMsg    = document.getElementById('welcome-msg');
const mainContent   = document.getElementById('main-content'); 

const keypressDiv   = document.getElementById('keypress-div'); 

const boxContainer  = document.getElementById('box-container'); 
const evKey         = document.getElementById('ev-key');
const evWhich       = document.getElementById('ev-which');
const evCode        = document.getElementById('ev-code');

const evKeyCtrl     = document.getElementById('ev-ctrl');
const evKeyShift    = document.getElementById('ev-shift');
const evKeyAlt      = document.getElementById('ev-alt');


// cycle through backgrounds
setInterval(() => {
    const rnd = Math.ceil(Math.random()*3);
    document.body.style.background = 
        rnd==1 ? 'fixed no-repeat url("/assets/background.webp")': 
        rnd==2 ? 'fixed no-repeat url("/assets/background2.jpg")':
        'fixed no-repeat url("/assets/background3.webp")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}, 1000*10);  // 5 min ->  1000*60*5


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
    
    evKeyCtrl.style.borderColor = event.ctrlKey   ? 'blue'  : 'whitesmoke';  //#ccc
    evKeyCtrl.style.color       = event.ctrlKey   ? 'black' : 'whitesmoke';

    evKeyShift.style.borderColor= event.shiftKey  ? 'red'   : 'whitesmoke';
    evKeyShift.style.color      = event.shiftKey  ? 'black' : 'whitesmoke';

    evKeyAlt.style.borderColor  = event.altKey    ? 'chartreuse' : 'whitesmoke';
    evKeyAlt.style.color        = event.altKey    ? 'black'      : 'whitesmoke';

});


