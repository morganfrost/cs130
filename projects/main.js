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
    duration: 700,
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

// const testImage = () => {
//     document.querySelector('.avatars').innerHTML += template
// };

// testImage()

// const initScreen = () => {
//     images.forEach((image, idx) => {
//         document.querySelector('avatars').innerHTML += `
//         <li class="avatar">
//             <button class="image" 
//                 onclick=${selectAvatar}
//                 style="url('${image}')"
//                 aria-label="Selects ${idx} as user's avatar."></button>
//         </li>`;
//     });
// };

// initScreen();

// const selectAvatar = () => {
//     console.log("You have selected an avatar")
// }

const initHomeScreen = () => {
  document.querySelector("#laptop_name").innerHTML=(`${username}'s laptop`);
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="block";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#nav_bar").style.display="block";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
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
}

const initNotepad = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="block";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
}

const initPhotos = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="block";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
}

const initMusic = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="block";
  document.querySelector('#minigame').style.display="none";
}

const initMinigame = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="block"
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