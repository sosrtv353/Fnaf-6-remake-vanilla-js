function fadeToBlack(duration = 1500) {
  const overlay = document.getElementById("fade-overlay");
  overlay.style.transitionDuration = duration + "ms";
  overlay.classList.add("active");
}
const gameOverH = document.querySelector('h1');
const gameCompleteH = document.getElementById("complete");
const computer = document.getElementById("computer");
// all option buttons >
const optionButtons = document.querySelectorAll('#options .task');
// all option buttons <

// option buttons >
const taskOption = optionButtons[0];
const mapOption = optionButtons[1];
const audioOption = optionButtons[2];
const silentVentOption = optionButtons[3];
// option buttons <

// sound >
let soundMeter = 20;
// sound <

let lureSuccessP = document.getElementById("success")
let lureSuccessPActive = false
// vents > 
const vent1 = document.getElementById("vent-1");
const vent2 = document.getElementById("vent-2");
const vent3 = document.getElementById("vent-3");
const vent4 = document.getElementById("vent-4");
const vent5 = document.getElementById("vent-5");
const vent6 = document.getElementById("vent-6");
const vent7 = document.getElementById("vent-7");
const vent8 = document.getElementById("vent-8");
const vent9 = document.getElementById("vent-9");
const vent10 = document.getElementById("vent-10");
const vent11 = document.getElementById("vent-11");
const vent12 = document.getElementById("vent-12");
const vent13 = document.getElementById("vent-13");
const vent14 = document.getElementById("vent-14");
const vent15 = document.getElementById("vent-15");
const vent16 = document.getElementById("vent-16"); 
const vent17 = document.getElementById("vent-17");


// temperature >
let temperature = 60;
let tempHeader = document.getElementById("temp");
// temperature <

// button of tasks >
const taskButtons = document.querySelectorAll('#tasks .task');
const logOffButton = document.getElementById("log");
// button of tasks <

// outputers >
const tasksDiv = {element: document.getElementById("tasks"),
    displays: "flex"
};
const mapDiv = {element: document.getElementById("map"),
    displays: "grid"
};
const soundLureButton = {element: document.getElementById("sound-lure-button"),
    displays: "flex"
};
const silentVentDiv = {element: document.getElementById("silent-vent"),
    displays: "flex"
};
// outputers <
let silentVentButton = document.getElementById("sv-button");

// computer buttons >
const fanButton = document.getElementById("fan-button");
const powerButton = document.getElementById("power-button");
// computer buttons <

// animatronics >
let moltenFreddy ={
    animatronic: document.getElementById("molten-freddy"),
    position: vent1,
    accesedVents: [vent1,vent6,vent10,vent14,vent15],
    ventSounds: [playFreddyLaugh,playFreddyKnock],
    sounds: [playFreddyFamily,playFreddySurprise,playFreddyTogether],
    image: document.getElementById("freddy-img")
}
let scraptrap ={
    animatronic: document.getElementById("scraptrap"),
    position: vent2,
    accesedVents: [vent2,vent7,vent11,vent15],
    ventSounds: [playScraptrapSee,playScraptrapFasc,playScraptrapStillMe],
    sounds: [playScraptrapStillMe,playScraptrapDeceptive,playScraptrapComeback,playScraptrapBitter,playScraptrapPromise,playScraptrapEasy],
    image: document.getElementById("scraptrap-img")
}
let scrapbaby ={
    animatronic: document.getElementById("scrapbaby"),
    position: vent4,
    accesedVents: [vent4,vent8,vent12,vent16],
    ventSounds: [playScrapbabyCall,playScrapbabyWhere,playScrapbabyHome],
    sounds: [playScrapbabyBirthday,playScrapbabyExpect,playScrapbabyGuard,playScrapbabyFind],
    image: document.getElementById("scrapbaby-img")
}
let lefty ={
    animatronic: document.getElementById("lefty"),
    position: vent5,
    accesedVents: [vent5,vent9,vent13,vent17,vent16],
    ventSounds: [playLeftyShh],
    sounds: [playLeftyOver,playLeftyInside,playLeftyRoom,playLeftyLook,playLeftyRoom2],
    image: document.getElementById("lefty-img")
}
// animatronics <

let optionStates = {
    output: tasksDiv.element,
    displays: "flex"
}
let taskStates = {
    taskRunning: false,
    tasksLeft: 11,
    currentTasksIndex: null
}
let computerButtonStates = {
    fanOn: false,
    powerOn: true
}

let activated = {
    audioLure: false,
    silentVent: false
}

function calculateMoltenFreddyPosition() {
    if (moltenFreddy.position === vent1) {
        moltenFreddy.position = vent6
        vent6.appendChild(moltenFreddy.animatronic)
    }
    else if (moltenFreddy.position === vent6) {
        moltenFreddy.position = vent10
        vent10.appendChild(moltenFreddy.animatronic)

    }
    else if (moltenFreddy.position === vent10) {
        moltenFreddy.position = vent14
        vent14.appendChild(moltenFreddy.animatronic)

    }
    else if (moltenFreddy.position === vent14) {
        let audioPicker = Math.floor(Math.random() * moltenFreddy.ventSounds.length)
        moltenFreddy.position = vent15
        vent15.appendChild(moltenFreddy.animatronic)
        moltenFreddy.ventSounds[audioPicker]()
        setTimeout(() => {
            if (soundMeter != 0) {
                let soundPicker = Math.floor(Math.random() * moltenFreddy.sounds.length)
                moltenFreddy.image.style.display = "inline";
                clearInterval(moltenFreddyInterval)
                clearInterval(scraptrapInterval)
                clearInterval(scrapbabyInterval)
                clearInterval(leftyInterval)
                clearInterval(fanInterval)
                playJumpscare()
                fadeToBlack()
                setTimeout(() => {
                    moltenFreddy.sounds[soundPicker]()
                    gameOverH.style.display = "block"
                }, 2000)
            } else {
               setTimeout(() => {
                    moltenFreddy.position = vent1;
                    vent1.appendChild(moltenFreddy.animatronic);
                }, 2000);

            }
        }, 3000); // delay before this logic runs

    }
    
}


function calculateScraptrapPosition() {
    if (scraptrap.position === vent2) {
        scraptrap.position = vent7
        vent7.appendChild(scraptrap.animatronic)
    }
    else if (scraptrap.position === vent7) {
        scraptrap.position = vent11
        vent11.appendChild(scraptrap.animatronic)

    }
    else if (scraptrap.position === vent11) {
        let audioPicker = Math.floor(Math.random() * scraptrap.ventSounds.length)
        scraptrap.position = vent15
        vent15.appendChild(scraptrap.animatronic)
        scraptrap.ventSounds[audioPicker]()
        setTimeout(() => {
            if (soundMeter != 0) {
                let soundPicker = Math.floor(Math.random() * scraptrap.sounds.length)
                scraptrap.image.style.display = "inline"
                playJumpscare()
                clearInterval(moltenFreddyInterval)
                clearInterval(scraptrapInterval)
                clearInterval(scrapbabyInterval)
                clearInterval(leftyInterval)
                clearInterval(fanInterval)
                fadeToBlack()
                setTimeout(() => {
                    scraptrap.sounds[soundPicker]()
                    gameOverH.style.display = "block"
                }, 2000)
            } else {
                setTimeout(() => {
                    scraptrap.position = vent2;
                    vent2.appendChild(scraptrap.animatronic);
                }, 1000);

            }
        }, 3000); // adjust delay as needed

    }

   

}

function calculateScrapBabyPosition() {
    
    if (scrapbaby.position === vent4) {
        scrapbaby.position = vent8;
        vent8.appendChild(scrapbaby.animatronic);
    }
    else if (scrapbaby.position === vent8) {
        scrapbaby.position = vent12;
        vent12.appendChild(scrapbaby.animatronic);
    }
    else if (scrapbaby.position === vent12) {
        let audioPicker = Math.floor(Math.random() * scrapbaby.ventSounds.length); // ✅ FIX
        scrapbaby.position = vent16;
        vent16.appendChild(scrapbaby.animatronic);
        scrapbaby.ventSounds[audioPicker]();
        setTimeout(() => {
            if (soundMeter != 0) {
                let soundPicker = Math.floor(Math.random() * scrapbaby.sounds.length);
                scrapbaby.image.style.display = "inline"
                playJumpscare();
                clearInterval(moltenFreddyInterval)
                clearInterval(scraptrapInterval)
                clearInterval(scrapbabyInterval)
                clearInterval(leftyInterval)
                clearInterval(fanInterval)
                fadeToBlack()
                setTimeout(() => {
                    scrapbaby.sounds[soundPicker]();
                    gameOverH.style.display = "block"
                }, 2000);
            } else {
                setTimeout(() => {
                    scrapbaby.position = vent4;
                    vent4.appendChild(scrapbaby.animatronic);
                }, 1800);

            }
        }, 3000); // adjust delay if needed

    }
    
}


function calculateLeftyPosition() {
    
    if (lefty.position === vent5) {
        lefty.position = vent9;
        vent9.appendChild(lefty.animatronic);
    }
    else if (lefty.position === vent9) {
        lefty.position = vent13;
        vent13.appendChild(lefty.animatronic);
    }
    else if (lefty.position === vent13) {
        lefty.position = vent17
        vent17.appendChild(lefty.animatronic)
    }
    else if (lefty.position === vent17) {
        lefty.position = vent16;
        vent16.appendChild(lefty.animatronic);
        lefty.ventSounds[0]();
        setTimeout(() => {
            if (soundMeter != 0) {
                let soundPicker = Math.floor(Math.random() * lefty.sounds.length);
                lefty.image.style.display = "inline"
                playJumpscare();
                clearInterval(moltenFreddyInterval)
                clearInterval(scraptrapInterval)
                clearInterval(scrapbabyInterval)
                clearInterval(leftyInterval)
                clearInterval(fanInterval)
                fadeToBlack()
                setTimeout(() => {
                    lefty.sounds[soundPicker]();
                    gameOverH.style.display = "block"
                }, 2000);
            } else {
                setTimeout(() => {
                    lefty.position = vent5;
                    vent5.appendChild(lefty.animatronic);
                }, 2000);

        }
    }, 3000); // change delay if needed

    }
   
 }



let moltenFreddyInterval = setInterval(calculateMoltenFreddyPosition,5000)
let scraptrapInterval = setInterval(calculateScraptrapPosition,4000)
let scrapbabyInterval = setInterval(calculateScrapBabyPosition,4800)
let leftyInterval = setInterval(calculateLeftyPosition,5000)




// audio context gain, stereo >
const audioContext = new AudioContext();
const audioGain = audioContext.createGain();
audioGain.gain.value = 0.5;
audioGain.connect(audioContext.destination);
const leftPanel = audioContext.createStereoPanner();
leftPanel.pan.value = -1;
const rightPanel = audioContext.createStereoPanner();
rightPanel.pan.value = 1;
leftPanel.connect(audioGain);
rightPanel.connect(audioGain);

// audio context gain, stereo <

let fanBuffer = null;
let fanAudio = null;

let clickBuffer = null;
let clickAudio = null;

let jumpscareBuffer = null;
let jumpscareAudio = null;

let bodyFallBuffer = null;
let bodyFallAudio = null;

let happyBuffer = null;
let happyAudio = null;

let freddyLaughBuffer = null;
let freddyLaughAudio = null;

let freddyKnockBuffer = null;
let freddyKnockAudio = null;

let freddyFamilyBuffer = null;
let freddyFamilyAudio = null; 

let freddySurpriseBuffer = null;
let freddySurpriseAudio = null;

let freddyTogetherBuffer = null;
let freddyTogetherAudio = null;

let scraptrapSeeBuffer = null;
let scraptrapSeeAudio = null;

let scraptrapFascBuffer = null;
let scraptrapFascAudio = null;

let scraptrapMeBuffer = null;
let scraptrapMeAudio = null;

let scraptrapDeceptiveBuffer = null;
let scraptrapDeceptiveAudio = null;

let scraptrapBackBuffer = null;
let scraptrapBackAudio = null;

let scraptrapBitterBuffer = null;
let scraptrapBitterAudio = null;

let scraptrapPromiseBuffer = null;
let scraptrapPromiseAudio = null;

let scraptrapEasyBuffer = null;
let scraptrapEasyAudio = null;

let scrapbabyCallBuffer = null;
let scrapbabyCallAudio = null;

let scrapbabyWhereBuffer = null;
let scrapbabyWhereAudio = null;

let scrapbabyHomeBuffer = null;
let scrapbabyHomeAudio = null;


let scrapbabyBirthdayBuffer = null;
let scrapbabyBirthdayAudio = null;

let scrapbabyGuardBuffer = null;
let scrapbabyGuardAudio = null;

let scrapbabyExpectBuffer = null;
let scrapbabyExpectAudio = null;

let scrapbabyFindBuffer = null;
let scrapbabyFindAudio = null;

let leftyShhBuffer = null;
let leftyShhAudio = null;

let leftyOverBuffer = null;
let leftyOverAudio = null;

let leftyRoomBuffer = null;
let leftyRoomAudio = null;

let leftyInsideBuffer = null;
let leftyInsideAudio = null;

let leftyLookBuffer = null;
let leftyLookAudio = null;

let leftyRoom2Buffer = null;
let leftyRoom2Audio = null;








// load sound




fetch("../sounds/fan.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {
    fanBuffer = decoded;
  })
  .catch(err => console.error("Sound error:", err));

fetch("../sounds/mouse-click.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {clickBuffer = decoded})

fetch("../sounds/Jumpscare.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {jumpscareBuffer = decoded})

fetch("../sounds/body-fall.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {bodyFallBuffer = decoded})

fetch("../sounds/happy.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {happyBuffer = decoded})

fetch("../sounds/MolFredLaugh1.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {freddyLaughBuffer = decoded})

fetch("../sounds/MolFredKnock.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {freddyKnockBuffer = decoded})

fetch("../sounds/MolFredFamily.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {freddyFamilyBuffer = decoded})

fetch("../sounds/MolFredSurprise.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {freddySurpriseBuffer = decoded})

fetch("../sounds/MolFredTogether.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {freddyTogetherBuffer = decoded})

fetch("../sounds/springtrap.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scraptrapSeeBuffer = decoded})

fetch("../sounds/scraptrapfasc.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scraptrapFascBuffer = decoded})

fetch("../sounds/scraptrapitsstillme.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scraptrapMeBuffer = decoded})

fetch("../sounds/scraptrapdeceptive.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scraptrapDeceptiveBuffer = decoded})

fetch("../sounds/scraptrapcomeback.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scraptrapBackBuffer = decoded})

fetch("../sounds/scraptrapbitter.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scraptrapBitterBuffer = decoded})

fetch("../sounds/scraptraphowcan.mp3")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scraptrapPromiseBuffer = decoded})

fetch("../sounds/Thatwaseasier.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scraptrapEasyBuffer = decoded})

fetch("../sounds/Heardyourcall.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scrapbabyCallBuffer = decoded})

fetch("../sounds/Whereareyou2.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scrapbabyWhereBuffer = decoded})

fetch("../sounds/Home2.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scrapbabyHomeBuffer = decoded})

fetch("../sounds/Birthday1.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scrapbabyBirthdayBuffer = decoded})

fetch("../sounds/Offguard.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scrapbabyGuardBuffer = decoded})

fetch("../sounds/Notexpected.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scrapbabyExpectBuffer = decoded})

fetch("../sounds/ShouldhaveKnown1.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {scrapbabyFindBuffer = decoded})

fetch("../sounds/Shh2.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {leftyShhBuffer = decoded})

fetch("../sounds/lefty1.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {leftyOverBuffer = decoded})

fetch("../sounds/lefty2.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {leftyRoomBuffer = decoded})

fetch("../sounds/lefty3.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {leftyInsideBuffer = decoded})

fetch("../sounds/lefty4.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {leftyLookBuffer = decoded})

  fetch("../sounds/lefty5.ogg")
  .then(res => res.arrayBuffer())
  .then(buf => audioContext.decodeAudioData(buf))
  .then(decoded => {leftyRoom2Buffer = decoded})







  


// ensure browser allows audio
function ensureAudioContext() {
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

// play fan
function playFan() {
  if (!fanBuffer) return;

  fanAudio = audioContext.createBufferSource();
  fanAudio.buffer = fanBuffer;
  fanAudio.loop = true;
  fanAudio.connect(audioGain);
  fanAudio.start();
}

// stop fan
function stopFan() {
  if (fanAudio) {
    fanAudio.stop();
    fanAudio = null;
  }
}

function playClick() {
    if (!clickBuffer) return;
    
    clickAudio = audioContext.createBufferSource();
    clickAudio.buffer = clickBuffer;
    clickAudio.loop = false;
    clickAudio.connect(audioGain);
    clickAudio.start()
}

function stopClick() {
    if (clickAudio) {
        clickAudio.stop()
        clickAudio = null
    }
}

function playJumpscare() {
    if (!jumpscareBuffer) return;
    
    jumpscareAudio = audioContext.createBufferSource();
    jumpscareAudio.buffer = jumpscareBuffer;
    jumpscareAudio.loop = false;
    jumpscareAudio.connect(audioGain);
    jumpscareAudio.start()
}

function playFall() {
    if (!bodyFallBuffer) return;
    
    bodyFallAudio = audioContext.createBufferSource();
    bodyFallAudio.buffer = bodyFallBuffer;
    bodyFallAudio.loop = false;
    bodyFallAudio.connect(audioGain);
    bodyFallAudio.start()
}

function playHappy() {
    if (!happyBuffer) return;
    
    happyAudio = audioContext.createBufferSource();
    happyAudio.buffer = happyBuffer;
    happyAudio.loop = false;
    happyAudio.connect(audioGain);
    happyAudio.start()
}


function playFreddyLaugh() {
    if (!freddyLaughBuffer) return;
    
    freddyLaughAudio = audioContext.createBufferSource();
    freddyLaughAudio.buffer = freddyLaughBuffer;
    freddyLaughAudio.loop = false;
    freddyLaughAudio.connect(leftPanel);
    freddyLaughAudio.start();
}

function playFreddyKnock() {
    if (!freddyKnockBuffer) return;
    
    freddyKnockAudio = audioContext.createBufferSource();
    freddyKnockAudio.buffer = freddyKnockBuffer;
    freddyKnockAudio.loop = false;
    freddyKnockAudio.connect(leftPanel);
    freddyKnockAudio.start();
}

function playFreddyFamily() {
    if (!freddyFamilyBuffer) return;
    
    freddyFamilyAudio = audioContext.createBufferSource();
    freddyFamilyAudio.buffer = freddyFamilyBuffer;
    freddyFamilyAudio.loop = false;
    freddyFamilyAudio.connect(leftPanel);
    freddyFamilyAudio.start();
}

function playFreddySurprise() {
    if (!freddySurpriseBuffer) return;
    
    freddySurpriseAudio = audioContext.createBufferSource();
    freddySurpriseAudio.buffer = freddySurpriseBuffer;
    freddySurpriseAudio.loop = false;
    freddySurpriseAudio.connect(leftPanel);
    freddySurpriseAudio.start();
}

function playFreddyTogether() {
    if (!freddyTogetherBuffer) return;
    
    freddyTogetherAudio = audioContext.createBufferSource();
    freddyTogetherAudio.buffer = freddyTogetherBuffer;
    freddyTogetherAudio.loop = false;
    freddyTogetherAudio.connect(leftPanel);
    freddyTogetherAudio.start();
}


function playScraptrapSee() {
    if (!scraptrapSeeBuffer) return;
    
    scraptrapSeeAudio = audioContext.createBufferSource();
    scraptrapSeeAudio.buffer = scraptrapSeeBuffer;
    scraptrapSeeAudio.loop = false;
    scraptrapSeeAudio.connect(leftPanel);
    scraptrapSeeAudio.start();
}

function playScraptrapFasc() {
    if (!scraptrapFascBuffer) return;
    
    scraptrapFascAudio = audioContext.createBufferSource();
    scraptrapFascAudio.buffer = scraptrapFascBuffer;
    scraptrapFascAudio.loop = false;
    scraptrapFascAudio.connect(leftPanel);
    scraptrapFascAudio.start();
}

function playScraptrapStillMe() {
    if (!scraptrapMeBuffer) return;
    
    scraptrapMeAudio = audioContext.createBufferSource();
    scraptrapMeAudio.buffer = scraptrapMeBuffer;
    scraptrapMeAudio.loop = false;
    scraptrapMeAudio.connect(leftPanel);
    scraptrapMeAudio.start();
}

function playScraptrapDeceptive() {
    if (!scraptrapDeceptiveBuffer) return;
    
    scraptrapDeceptiveAudio = audioContext.createBufferSource();
    scraptrapDeceptiveAudio.buffer = scraptrapDeceptiveBuffer;
    scraptrapDeceptiveAudio.loop = false;
    scraptrapDeceptiveAudio.connect(leftPanel);
    scraptrapDeceptiveAudio.start();
}

function playScraptrapComeback() {
    if (!scraptrapBackBuffer) return;
    
    scraptrapBackAudio = audioContext.createBufferSource();
    scraptrapBackAudio.buffer = scraptrapBackBuffer;
    scraptrapBackAudio.loop = false;
    scraptrapBackAudio.connect(leftPanel);
    scraptrapBackAudio.start();
}

function playScraptrapBitter() {
    if (!scraptrapBitterBuffer) return;
    
    scraptrapBitterAudio = audioContext.createBufferSource();
    scraptrapBitterAudio.buffer =  scraptrapBitterBuffer;
    scraptrapBitterAudio.loop = false;
    scraptrapBitterAudio.connect(leftPanel);
    scraptrapBitterAudio.start();
}

function playScraptrapPromise() {
    if (!scraptrapPromiseBuffer) return;
    
    scraptrapPromiseAudio = audioContext.createBufferSource();
    scraptrapPromiseAudio.buffer =  scraptrapPromiseBuffer;
    scraptrapPromiseAudio.loop = false;
    scraptrapPromiseAudio.connect(leftPanel);
    scraptrapPromiseAudio.start();
}

function playScraptrapEasy() {
    if (!scraptrapEasyBuffer) return;
    
    scraptrapEasyAudio = audioContext.createBufferSource();
    scraptrapEasyAudio.buffer =  scraptrapEasyBuffer;
    scraptrapEasyAudio.loop = false;
    scraptrapEasyAudio.connect(leftPanel);
    scraptrapEasyAudio.start();
}

function playScrapbabyCall() {
    if (!scrapbabyCallBuffer) return;
    
    scrapbabyCallAudio = audioContext.createBufferSource();
    scrapbabyCallAudio.buffer =  scrapbabyCallBuffer;
    scrapbabyCallAudio.loop = false;
    scrapbabyCallAudio.connect(rightPanel)
    scrapbabyCallAudio.start();
}

function playScrapbabyWhere() {
    if (!scrapbabyWhereBuffer) return;
    
    scrapbabyWhereAudio = audioContext.createBufferSource();
    scrapbabyWhereAudio.buffer = scrapbabyWhereBuffer;
    scrapbabyWhereAudio.loop = false;
    scrapbabyWhereAudio.connect(rightPanel);
    scrapbabyWhereAudio.start();
}


function playScrapbabyHome() {
    if (!scrapbabyHomeBuffer) return;
    
    scrapbabyHomeAudio = audioContext.createBufferSource();
    scrapbabyHomeAudio.buffer = scrapbabyHomeBuffer; 
    scrapbabyHomeAudio.loop = false;
    scrapbabyHomeAudio.connect(rightPanel);
    scrapbabyHomeAudio.start();
}


function playScrapbabyBirthday() {
    if (!scrapbabyBirthdayBuffer) return;
    
    scrapbabyBirthdayAudio = audioContext.createBufferSource();
    scrapbabyBirthdayAudio.buffer =  scrapbabyBirthdayBuffer;
    scrapbabyBirthdayAudio.loop = false;
    scrapbabyBirthdayAudio.connect(rightPanel)
    scrapbabyBirthdayAudio.start();
}

function playScrapbabyGuard() {
    if (!scrapbabyGuardBuffer) return;
    
    scrapbabyGuardAudio = audioContext.createBufferSource();
    scrapbabyGuardAudio.buffer = scrapbabyGuardBuffer; 
    scrapbabyGuardAudio.loop = false;
    scrapbabyGuardAudio.connect(rightPanel);
    scrapbabyGuardAudio.start();
}


function playScrapbabyExpect() {
    if (!scrapbabyExpectBuffer) return;
    
    scrapbabyExpectAudio = audioContext.createBufferSource();
    scrapbabyExpectAudio.buffer =  scrapbabyExpectBuffer;
    scrapbabyExpectAudio.loop = false;
    scrapbabyExpectAudio.connect(rightPanel)
    scrapbabyExpectAudio.start();
}

function playScrapbabyFind() {
    if (!scrapbabyFindBuffer) return;
    
    scrapbabyFindAudio = audioContext.createBufferSource();
    scrapbabyFindAudio.buffer =  scrapbabyFindBuffer;
    scrapbabyFindAudio.loop = false;
    scrapbabyFindAudio.connect(rightPanel)
    scrapbabyFindAudio.start();
}

function playLeftyShh() {
    if (!leftyShhBuffer) return;
    
    leftyShhAudio = audioContext.createBufferSource();
    leftyShhAudio.buffer =  leftyShhBuffer;
    leftyShhAudio.loop = false;
    leftyShhAudio.connect(rightPanel)
    leftyShhAudio.start();
}

function playLeftyOver() {
    if (!leftyOverBuffer) return;
    
    leftyOverAudio = audioContext.createBufferSource();
    leftyOverAudio.buffer = leftyOverBuffer;
    leftyOverAudio.loop = false;
    leftyOverAudio.connect(rightPanel)
    leftyOverAudio.start();
}

function playLeftyRoom() {
    if (!leftyRoomBuffer) return;
    
    leftyRoomAudio = audioContext.createBufferSource();
    leftyRoomAudio.buffer = leftyRoomBuffer;
    leftyRoomAudio.loop = false;
    leftyRoomAudio.connect(rightPanel)
    leftyRoomAudio.start();
}

function playLeftyInside() {
    if (!leftyInsideBuffer) return;
    
    leftyInsideAudio = audioContext.createBufferSource();
    leftyInsideAudio.buffer = leftyInsideBuffer;
    leftyInsideAudio.loop = false;
    leftyInsideAudio.connect(rightPanel)
    leftyInsideAudio.start();
}

function playLeftyLook() {
    if (!leftyLookBuffer) return;
    
    leftyLookAudio = audioContext.createBufferSource();
    leftyLookAudio.buffer = leftyLookBuffer;
    leftyLookAudio.loop = false;
    leftyLookAudio.connect(rightPanel)
    leftyLookAudio.start();
}

function playLeftyRoom2() {
    if (!leftyRoom2Buffer) return;
    
    leftyRoom2Audio = audioContext.createBufferSource();
    leftyRoom2Audio.buffer = leftyRoom2Buffer;
    leftyRoom2Audio.loop = false;
    leftyRoom2Audio.connect(rightPanel)
    leftyRoom2Audio.start();
}









let fanInterval = setInterval(() => {
    if (temperature === 120) {
        clearInterval(moltenFreddyInterval)
        clearInterval(scraptrapInterval)
        clearInterval(scrapbabyInterval)
        clearInterval(leftyInterval)
        clearInterval(fanInterval)
        fadeToBlack()
        playFall()
        setTimeout(() => {
            gameOverH.style.display = "block"
        }, 2000);
    }
    if (temperature >= 100) {
        tempHeader.style.color = "darkred"
    }
    else {tempHeader.style.color = "white"}
    if (!computerButtonStates.fanOn) {
        temperature++
        tempHeader.textContent = `Temp: ${temperature}F`
    }
    else if (computerButtonStates.fanOn && temperature === 60) {
        temperature = 60
        tempHeader.textContent = `Temp: ${temperature}F`

    }
    else {
        temperature--
        tempHeader.textContent = `Temp: ${temperature}F`


    }
}, 1000);
function handleOutput(outputElement) {
    if (lureSuccessPActive) {lureSuccessP.style.display = "none"}
    optionStates.output.style.display = "none";
    optionStates.output = outputElement.element;
    optionStates.displays = outputElement.displays
    outputElement.element.style.display = outputElement.displays;
}
function handleFan() {
    ensureAudioContext()
    if (computerButtonStates.fanOn) {
        soundMeter -= 10
        computerButtonStates.fanOn = false;
        fanButton.style.backgroundColor = "gray";
        stopFan()
    }
    else {
        soundMeter += 10
        computerButtonStates.fanOn = true;
        fanButton.style.backgroundColor = "green";
        playFan()
    }
}
function handlePower() {
    ensureAudioContext()
    if (lureSuccessPActive) {lureSuccessP.style.display = "none"}
    if (taskProccess) {
        clearTimeout(taskProccess)
        taskProccess = null
        taskStates.taskRunning = false
        const loadingImage = taskButtons[taskStates.currentTasksIndex].querySelector('img');
        loadingImage.style.display = "none";
        taskStates.currentTasksIndex = null
    }
    if (computerButtonStates.powerOn) {
        computerButtonStates.powerOn = false;
        soundMeter -= 10
        console.log(soundMeter)
        powerButton.style.backgroundColor = "gray";
        optionButtons.forEach(button => {
            button.style.display = "none";
        });
        optionStates.output.style.display = "none"
        computer.style.backgroundColor = "black";
        playClick()


    }
    else {
        computerButtonStates.powerOn = true;
        soundMeter += 10
        powerButton.style.backgroundColor = "green";
        optionButtons.forEach(button => {
            button.style.display = "inline";
        });
        optionStates.output.style.display = optionStates.displays
        computer.style.backgroundColor = "lightblue";
        playClick()


    }
}

fanButton.addEventListener('click',handleFan)
powerButton.addEventListener('click', handlePower)

taskOption.addEventListener('click', () => {handleOutput(tasksDiv)});
mapOption.addEventListener('click', () => {handleOutput(mapDiv)});
audioOption.addEventListener('click', () => {handleOutput(soundLureButton)});
silentVentOption.addEventListener('click', () => {handleOutput(silentVentDiv)})

function moveAnimatronicBack(anim) {
  const vents = anim.accesedVents;
  const currentIndex = vents.indexOf(anim.position);

  const newIndex = currentIndex <= 0 ? 0 : currentIndex - 1;

  anim.position = vents[newIndex];
  anim.position.appendChild(anim.animatronic);
}

soundLureButton.element.addEventListener('click', () => {
    if (activated.audioLure) return;
    if (taskStates.taskRunning) return;
    activated.audioLure = true
    let lureChance = Math.floor(Math.random() * 101)
    console.log(lureChance)
    if (lureChance <= 40) {
        moveAnimatronicBack(moltenFreddy);
        moveAnimatronicBack(scraptrap);
        moveAnimatronicBack(scrapbaby);
        moveAnimatronicBack(lefty);
        lureSuccessPActive = true
        lureSuccessP.style.display = "block"
  }
    setTimeout(() => {
        activated.audioLure = false;
        lureSuccessPActive = false;
        lureSuccessP.style.display = "none";
    }, 8000);
})

silentVentButton.addEventListener('click', () => {
    if (taskStates.taskRunning) return;
    if (!activated.silentVent) {
        silentVentButton.textContent = "Deactivate silent vent";
        activated.silentVent = true;
        soundMeter -= 10;
    }
    else {
        silentVentButton.textContent = "Activate silent ventilation";
        activated.silentVent = false
        soundMeter += 10
    }
    console.log(soundMeter)
})

let taskProccess = null

taskButtons.forEach((button,index) => {
    button.addEventListener('click', () => {
        if (taskStates.taskRunning) return;
        taskStates.currentTasksIndex = index
        taskStates.taskRunning = true;
        const loadingImage = button.querySelector('img');
        loadingImage.style.display = "inline";
        taskProccess = setTimeout(() => {
            taskStates.tasksLeft -= 1
            button.style.display = "none"
            taskStates.taskRunning = false
            if (taskStates.tasksLeft === 0) {
                logOffButton.style.display = "inline"
            }
        },4000)
    }) 
})


logOffButton.addEventListener('click', () => {
    clearInterval(moltenFreddyInterval)
    clearInterval(scraptrapInterval)
    clearInterval(scrapbabyInterval)
    clearInterval(leftyInterval)
    clearInterval(fanInterval)
    fadeToBlack()
    playHappy()
    gameCompleteH.style.display = "block"
})
