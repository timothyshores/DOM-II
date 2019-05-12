// 1. Mouseover on header image changes picture to black & white
const headerImg = document.getElementsByClassName('intro')[0].children[0];
headerImg.addEventListener("mouseover", e => {
    // console.log(`${e.type} on headerImg`);
    headerImg.classList.add("black-and-white");
});

// 2. Press any key to return header image to full color
document.addEventListener("keydown", e => {
    console.log(`${e.type} on ${e.code}`);
    headerImg.classList.remove("black-and-white");
});

// 3. Click and drag the header image from left to right to make it blurry
headerImg.addEventListener("drag", e => {
    console.log(`headerImg X coordinate: ${e.screenX}`);
    headerImg.style.filter = `blur(${e.screenX/200}px)`;
});

// 4. Transforms the header image 
headerImg.addEventListener("load", e => {
    headerImg.style.transition = "transform 30s";
    headerImg.style.transform = "scale(10, .75)";
});

// 5. Console logs the X & Y axis in the local coordinates.
let containerHome = document.getElementsByClassName('container home')[0];

document.addEventListener("dblclick", e => {
    console.log(`Double click at X coordinate: ${e.clientX}, ${e.coordinateX} ${e.clientY}`);
    containerHome.style.backgroundColor = `rgb(${e.clientX},${e.clientY},${e.clientX})`;
});

// 6. Console logs a message when the user scrolls
document.addEventListener("scroll", e => {
    console.log(`You are now scrolling`);
    containerHome.style.color = `yellow`;
    containerHome.style.border = `20px solid red`;
    window.setTimeout(function () {
        containerHome.style.color = `black`;
        containerHome.style.border = `none`;
    }, (250));
});

// 7. Console logs a message when the user clicks on anything
document.addEventListener("mousedown", e => {
    console.log(`You clicked on something!`);
    containerHome.style.color = `blue`;
    containerHome.style.border = `5px solid black`;
    window.setTimeout(function () {
        containerHome.style.color = `black`;
        containerHome.style.border = `none`;
    }, (250));
});

// 8. Changes the size of the map image

let mapImage = document.getElementsByClassName('img-content')[0];

document.addEventListener("mousemove", e => {
    console.log(`Hey your mouse works!`);
    mapImage.style.transform = `scale(${e.clientX/250})`;
});

// 9. Console logs a message when the user's button of a pointing device is rotated in any direction.

document.addEventListener("wheel", e => {
    console.log(`A wheel button of a pointing device is rotated in any direction.`);

});


// 10. Console logs a message when the right button of the mouse is clicked

let boatImage = document.getElementsByClassName('img-content')[1];

document.addEventListener("contextmenu", e => {
    console.log(`Your right click button works`);

    boatImage.style.transition = "transform 3s";
    boatImage.style.transform = "scale(20)";

    window.setTimeout(function () {
        boatImage.style.transform = `scale(1)`;
    }, (3000));

});