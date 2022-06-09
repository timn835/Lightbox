import Lightbox from "./lightbox/lightbox.js";
const myButton = document.getElementById('watch-video');

myButton.addEventListener('click', () => {
    Lightbox.activate();
    Lightbox.show(`<iframe width="450" height="250" src="https://www.youtube.com/embed/IL0E9CT5r4o?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
})


