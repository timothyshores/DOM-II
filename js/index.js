// 1. Mouseover on header Image
const headerImg = document.getElementsByClassName('intro')[0].children[0];
headerImg.addEventListener("mouseover", e => console.log(`${e.type} on headerImg`));

// 2. Console log on keydown
document.addEventListener("keydown", e => console.log(`${e.type} on ${e.code}`));

// 3. Console log X coordinate when dragging header image left or right
headerImg.addEventListener("drag", e => console.log(`headerImg X coordinate: ${e.screenX}`));

// 4. Console logs a message after headerImg is loaded
headerImg.addEventListener("load", e => console.log(`Welcome to the Fun Bus! The header image is now loaded}`));

// 5. Console logs the X & Y axis in the local coordinates.
document.addEventListener("dblclick", e => console.log(`Double click at X coordinate: ${e.clientX}, Y coordinate ${e.clientY}`));

// 6. Console logs a message when the user scrolls
document.addEventListener("scroll", e => console.log(`You are now scrolling`));

// 7. Console logs a message when the user clicks on anything
document.addEventListener("mousedown", e => console.log(`You clicked on something!`));

// 8. Console logs a message when the user moves their mouse
document.addEventListener("mousemove", e => console.log(`Hey your mouse works!`));

// 9. Console logs a message when the user's button of a pointing device is rotated in any direction.
document.addEventListener("wheel", e => console.log(`A wheel button of a pointing device is rotated in any direction.`));

// 10. Console logs a message when the right button of the mouse is clicked
document.addEventListener("contextmenu", e => console.log(`Your right click button works`));