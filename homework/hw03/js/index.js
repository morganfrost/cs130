/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                onclick="showImage(event)"
                style="background-image:url('${image}')"
                data-index=${idx}
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();

const imageElements = document.querySelectorAll('.image');

let currentIndex = 0;

const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    currentIndex = Number(elem.getAttribute('data-index'))
    console.log(currentIndex)
    //syntax to set background image:
    //destinationElement.style.backgroundImage = sourceElement.style.backgroundImage;
    const bgImage = elem.style.backgroundImage
    document.querySelector('.featured_image').style.backgroundImage=bgImage
}

const showNext = (ev) => {
    if (currentIndex < 7) {
    currentIndex += 1;
    }
    else {
        currentIndex = 0;
    }
    console.log("currentIndex:", currentIndex);
    let image = images[currentIndex];
    let indexImage = `url('${image}')`;
    console.log(indexImage);
    document.querySelector('.featured_image').style.backgroundImage=indexImage;
}

const showPrev = (ev) => {
    if (currentIndex > 0) {
    currentIndex -= 1;
    }
    else {
        currentIndex = 7;
    }
    console.log("currentIndex:", currentIndex);
    let image = images[currentIndex];
    let indexImage = `url('${image}')`;
    console.log(indexImage);
    document.querySelector('.featured_image').style.backgroundImage=indexImage;
}

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;