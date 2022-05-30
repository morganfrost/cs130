// const images = [
//     'projects/avatars/black-woman.png',
//     'projects/avatars/green-hair-man.png',
//     'projects/avatars/green-hair-woman.png',
//     'projects/avatars/headband.png',
//     'projects/avatars/hijabi-woman.png',
//     'projects/avatars/mustache-man.png',
//     'projects/avatars/short-hair-woman.png',
//     'projects/avatars/smirk ma.png',
//     'projects/avatars/woman-white-hair.png',
// ];

const initLoginScreen = () => {

console.log('login initialized');

document.querySelector("#login_screen").style.display="block";
document.querySelector("#homepage_body").style.display="none";
document.querySelector("#messages_page").style.display="none";
document.querySelector("#notepad").style.display="none";
document.querySelector("#nav_bar").style.display="none";
document.querySelector("#photos").style.display="none";
document.querySelector("#music").style.display="none";
document.querySelector('#minigame').style.display="none";
document.querySelector("#sketchpad").style.display="none";

console.log('login initialized 2');

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1500
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 1500,
    delay: 500
  })
  .add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 100 * (i+1)
   })
    .add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
  }

  initLoginScreen()

document.querySelector('#login').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        enterButton();
    }
};

const initHomeScreen = () => {
  document.querySelector("#laptop_name").innerHTML=(`${username}'s laptop`);
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="block";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#nav_bar").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector("#sketchpad").style.display="none";
  console.log("home screen initialized")
}

var username
const enterButton = () => {
  username = document.getElementById("username").value;
  console.log(username)
  if (username != "") {
  initHomeScreen();
  }
  else{
  alert('You must enter a username to continue!')
  }
}

const initMessages = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="block";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="block";
  document.querySelector("#sketchpad").style.display="none";
  console.log("messages page has loaded");
}

const initNotepad = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="block";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="block";
  document.querySelector("#sketchpad").style.display="none";
  console.log("notepad has loaded");
}

const photoGalleryImages = [
  'avatars/Google-Messages.jpg',
  'notepad.png'
]

const initPhotos = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="block";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="block";
  document.querySelector('#nav_bar').style.display="block";
  document.querySelector("#sketchpad").style.display="none";
  console.log("photos has loaded")
}

const initMusic = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="block";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="block";
  document.querySelector("#sketchpad").style.display="none";
}

const initMinigame = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="block";
  document.querySelector("#sketchpad").style.display="none";
  jump()
  removeJump()
  checkDead()
}

const initWallpaper = () => {
  var popup = document.getElementById("wallpaper_popup");
  console.log(popup)
  popup.classList.toggle("show");
  console.log('wallpaper')
}

var character = document.getElementById("character");
document.addEventListener("click",jump);
function jump(){
    character.classList.add("animate");
    setTimeout(removeJump,300); //300ms = length of animation
    if(character.classList == "animate"){return;}
};
function removeJump(){
    character.classList.remove("animate");
}

var block = document.getElementById("block");
function checkDead(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    // if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
    //     alert("Game over");
    // }
}

setInterval(checkDead, 10);

const clickedMessage = () => {
  document.getElementById("current_message").innerHTML = `you have opened a message`;
  console.log("message opened")
}

const animalWallpaper = () => {
  document.querySelector("#homepage_body").style.backgroundImage="url('avatars/animal wallpaper little cheeatah.jpg')"
  console.log("wallpaper changed to animal")
}

const galaxyWallpaper = () => {
  document.querySelector("#homepage_body").style.backgroundImage="url('avatars/IcHF2k0.jpg')"
  console.log("wallpaper changed to galaxy")
}

const initSketchpad = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="block";
document.querySelector("#sketchpad").style.display="block";
const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")

let prevX = null
let prevY = null

ctx.lineWidth = 5

let draw = false

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// Saving drawing as image
let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    // what ever name you specify here
    // the image will be saved as that name
    a.download = "sketch.png"
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})

}

const clickPhoto = () => {
  console.log("you have clicked on a photo")
}

