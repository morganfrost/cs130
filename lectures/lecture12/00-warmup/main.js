const triangle = ' <polygon points="100,100 150,100 125,135" stroke="black" stroke-width="3" fill="teal"></polygon>';

// format: 
// element.insertAdjacentHTML(position, text)

/**
 * Your job: when the user clicks the svg element, 
 * draw the shape that corresponds with the controls 
 * in the left-hand panel.
 */

//Step 1: What event do we want to use to create the shapes?
//(do this in the html with onclick)

//Step 2: Create an event handler to attach to the event:

const addShape = (ev) => {
    console.log(ev.clientX, ev.clientY); //to learn more about the ev (event) & the location where u clicked
    console.log('Add shape');
    let color = document.querySelector('#color').value;
    let size = document.querySelector('#size').value;
    let shape = document.querySelector('#shape').value;
    if (shape === 'circle'){
        const circle = 
        `<circle
            cx=${ev.offsetX} 
            cy=${ev.offsetY} 
            r=${size} 
            stroke="black" 
            stroke-width="3" 
            fill=${color}>
        </circle>`;
        document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
    }
    else if (shape === 'square'){
        const square = 
            `<rect 
            x=${ev.offsetX}
            y=${ev.offsetY} 
            width=${size} 
            height=${size}
            stroke="black" 
            stroke-width="3" 
            fill=${color}>
        </rect>`
        document.querySelector('svg').insertAdjacentHTML("beforeend", square);
    }
    else if (shape === 'triangle'){}
        console.log("draw a triangle bc i didn't have time to finish this code");
        document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);
};
