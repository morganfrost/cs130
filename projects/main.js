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
document.querySelector("#sketchpad_page").style.display="none";

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
  document.querySelector("#homepage_body").style.display="flex";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#nav_bar").style.display="flex";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector("#sketchpad").style.display="none";
  document.querySelector("#settings_page").style.display="none";
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

const animalWallpaper = () => {
  document.querySelector("#homepage_body").style.backgroundImage="url('avatars/giraffes.jpg')";
  console.log("wallpaper changed to animal");
}

const defaultWallpaper = () => {
  document.querySelector("#homepage_body").style.backgroundImage="url('avatars/default_wallpaper.jpg')";
  console.log("wallpaper changed to default")
}

const landscapeWallpaper = () => {
  document.querySelector('#homepage_body').style.backgroundImage="url('avatars/landscape.jpg')";
  console.log("wallpaper changed to landscape");
}

const initSettings = () => {
  document.querySelector("#settings_page").style.display="flex";
  console.log("settings page loaded")
}

const initMessages = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="grid";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="flex";
  document.querySelector("#sketchpad").style.display="none";
  console.log("messages page has loaded");
}

const clickedMessage = () => {
  document.getElementById("current_message").innerHTML = `
    <p class="send">Hey there! What's up</p>
    <p class="receive">Checking out iOS7 you know..</p>
    <p class="send">Check out this bubble!</p>
    <p class="receive">It's pretty cool…</p>
    <p class="receive">Not gonna lie!</p>
    <p class="send">Yeah it's pure CSS &amp; HTML</p>
    <p class="receive">Wow that's impressive. But what's even more impressive is that this bubble is really high.</p>`;
  console.log("message opened")
}


const initNotepad = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="flex";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="flex";
  document.querySelector("#sketchpad_page").style.display="none";
  document.querySelector("#sketchpad").style.display="block";
  console.log("notepad has loaded");
}

const photoGalleryImages = [
  src="avatars/smirk ma.png",
  src="avatars/short-hair-woman.png",
  src="avatars/notepad.png",
  src="avatars/smirk ma.png",
  src="avatars/woman-white-hair.png",
  src="avatars/black-woman.png",
  src="avatars/green-hair-woman.png",
  src="avatars/green-hair-man.png",
  src="avatars/hijabi-woman.png"
]

const initPhotos = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="grid";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="flex";
  document.querySelector("#sketchpad").style.display="none";

//   photoGalleryImages.forEach((image, idx) => {
//     document.querySelector('.images').innerHTML += `
//     <li class="image">
//         <button class="image" 
//             onclick="showImage(event)"
//             style="background-image:url('${image}')"
//             data-index=${idx}
//             aria-label="Displays image ${idx} in the main panel."></button>
//     </li>`;
// });
  console.log("photos has loaded")
}

const initMusic = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="grid";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="flex";
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

const initSketchpad = () => {
  document.querySelector("#login_screen").style.display="none";
  document.querySelector("#homepage_body").style.display="none";
  document.querySelector("#messages_page").style.display="none";
  document.querySelector("#notepad").style.display="none";
  document.querySelector("#photos").style.display="none";
  document.querySelector("#music").style.display="none";
  document.querySelector('#minigame').style.display="none";
  document.querySelector('#nav_bar').style.display="flex";
  document.querySelector("#sketchpad_page").style.display="block";
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

const AudioPlayer = (selector, audioFile) => {
  let audio;
  let playButton;
  let rwdButton;
  let ffwdButton;
  let sliderInput;
  let containerElement = document;
  if (selector) {
      containerElement = document.querySelector(selector);
  }

  this.isPaused = () => {
      return audio.paused;
  };

  this.togglePlay = () => {
      if (audio.paused) {
          this.play();
      } else {
          this.pause();
      }
  };

  this.play = () => {
      console.log('play');
      playButton.querySelector('i').classList.remove('fa-play-circle', 'fa-pause-circle');
      jumpToTime();
      audio.play();
      playButton.querySelector('i').classList.add('fa-pause-circle');
      
  };

  this.pause = () => {
      playButton.querySelector('i').classList.remove('fa-play-circle', 'fa-pause-circle');
      jumpToTime();
      audio.pause();
      playButton.querySelector('i').classList.add('fa-play-circle');
  };

  const jumpToTime = () => {
      const progressController = containerElement.querySelector('#player-time');
      const timeElapsed = containerElement.querySelector('#time-elapsed');
      const timeTotal = containerElement.querySelector('#time-total');
      //console.log(getSliderPosition(), getCurrentTime(), getDuration());
      if (getDuration() === "0NaN:0NaN") {
          console.log('returning...');
          return;
      }
      
      progressController.value = getSliderPosition();
      timeElapsed.innerHTML = getCurrentTime();
      timeTotal.innerHTML = getDuration();
  };

  const skipForward = () => {
      if (audio.currentTime < audio.duration) {
          audio.currentTime += audio.duration / 10;
      } else {
          audio.currentTime = audio.duration;
      }
  };

  const skipBackward = () => {
      if (audio.currentTime > 0) {
          audio.currentTime -= audio.duration / 10;
      } else {
          audio.currentTime = 0;
      }
  };

  const customTime = (ev) => {
      const newTime = audio.duration * parseInt(ev.target.value) / 100;
      audio.currentTime = parseInt(newTime) + 1;
      jumpToTime();
  };

  const getSliderPosition = () => {
      return parseInt(audio.currentTime / audio.duration * 100);
  };

  const getDuration = () => {
      return formatTime(audio.duration);
  };

  const getCurrentTime = () => {
      return formatTime(audio.currentTime);
  };

  const resetTime = () => {
      audio.currentTime = 0;
      playButton.querySelector('i').classList.remove('fa-pause-circle')
      playButton.querySelector('i').classList.add('fa-play-circle');
      jumpToTime();
  };

  const formatTime = (timeCount) => {
      var seconds = timeCount,
          minutes = Math.floor(seconds / 60);
      minutes = (minutes >= 10) ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = (seconds >= 10) ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
  };

  this.setAudioFile = (audio_url) => {
      audio.src = audio_url;
  };

  this.getAudioFile = (audio_url) => {
      return audio.src;
  };


  this.initialize = () => {
      // init DOM hooks:
      audio = containerElement.querySelector('#track');
      playButton = containerElement.querySelector('#play_pause');
      rwdButton = containerElement.querySelector('#rwd');
      ffwdButton = containerElement.querySelector('#ffwd');
      sliderInput = containerElement.querySelector('#player-time');

      console.log(audio, playButton);
      // attach events to event handlers (i.e. functions)
      audio.ontimeupdate = jumpToTime;
      audio.onended = resetTime;
      audio.onloadeddata = function() {
          console.log("preview loaded");
          //resetTime();
          //this.pause();
      };
      playButton.onclick = this.togglePlay;
      rwdButton.onclick = skipBackward;
      ffwdButton.onclick = skipForward;
      sliderInput.oninput = customTime;
      sliderInput.onchange = customTime;
  };
  this.initialize();
  if (audioFile) {
      this.setAudioFile(audioFile);
  }
  return this;
};

const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    // console.log(`
    //     get tracks from spotify based on the search term
    //     "${term}" and load them into the #tracks section 
    //     of the DOM...`);
        fetch(baseURL + "?type=track" + `&q=${term}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                    if (data.length > 0) {
                        let firstFive = data.splice(0,5);
                        let html = firstFive.map(track2HTML);
                        // let footerHTML = firstFive.map(track2FooterHTML)
                        document.querySelector('#tracks').innerHTML = html;
                        // document.querySelector('#footer').innerHTML = footerHTML;
                    }
                    else {
                        let html = "<p>No tracks found that match your search criteria.<p>";
                        document.querySelector("#tracks").innerHTML = html;
                    }
            });
        };

const track2HTML = track => {
    return `
    <button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event)";>
        <img src=${track.album.image_url} alt="${track.album.name} Album Cover">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h2>${track.album.name}</h2>
            <p>
                ${track.artist.name}
            </p>
        </div>
    </button>
    `
    ;
};


const getAlbums = (term) => {
    // console.log(`
    //     get albums from spotify based on the search term
    //     "${term}" and load them into the #albums section 
    //     of the DOM...`);
        fetch(baseURL + "?type=album" + `&q=${term}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0){
                    let albumList = data;
                    let html = albumList.map(album2HTML);
                    document.querySelector('#albums').innerHTML = html;
                    console.log(data)
                }
                else {
                    let html = "<p>No albums found that match your search criteria.<p>";
                    document.querySelector("#albums").innerHTML = html;
                }
            })
};

const album2HTML = (album) => {
    return `
    <section class="album-card" id=${album.id}>
        <div>
            <img src=${album.image_url} alt="${album.name} Album Cover">
            <h2>${album.name}</h2>
            <div class="footer">
                <a href=${album.spotify_url} target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
    `
}

let artistResults
const getArtist = (term) => {
    // console.log(`
    //     get artists from spotify based on the search term
    //     "${term}" and load the first artist into the #artist section 
    //     of the DOM...`);
        fetch(baseURL + "?type=artist" + `&q=${term}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    let firstArtist = data[0];
                    let html = artistHTML(firstArtist)
                    document.querySelector('#artist').innerHTML = html;
                } else {
                    let html = "<p> No artists found that match your search criteria. </p>";
                    document.querySelector('#artist').innerHTML = html;
                }            
});
};

const artistHTML = (artist) => {
    return `
    <section id="artist">
    <section class="artist-card" id=${artist.id}>
        <div>
            <img src=${artist.image_url} alt="Photo of ${artist.name}">
            <h2>${artist.name}</h2>
            <div class="footer">
                <a href="${artist.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
    `;
};

const handleTrackClick = (ev) => {
    console.log(ev.currentTarget);
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    if (previewUrl === "null") {
        console.log("This track is unavailable on Spotify.")
    }
    else {
    console.log("previewUrl=", previewUrl);
    console.log(document.querySelector('#current-track').innerHTML);
    console.log(ev.currentTarget.dataset);
    audioPlayer.setAudioFile(previewUrl);
    audioPlayer.play();
}}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};