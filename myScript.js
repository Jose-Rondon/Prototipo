document.getElementById("button1-1").addEventListener("click", stopSlide);
document.getElementById("button2-2").addEventListener("click", stopSlide);

var slide = null;

function stopSlide() {
    clearInterval(slide);
}

function slideshow1() {
    var x = document.getElementById("slideshow");
    var y = x.scrollWidth;
    var z = y / 4;
    if (x.scrollLeft + z == x.scrollWidth) {
        x.scroll({ left: (x.scrollWidth * -1), behavior: 'smooth' })
    } else {
        x.scrollBy({ left: (z), behavior: 'smooth' });
    }
}

onload = function() {
    slide = setInterval(slideshow1, 5000);
}

function slideshow() {
    slide = setInterval(slideshow1, 5000);
    document.getElementById("button1-2").setAttribute("style", "display: none;");
    document.getElementById("counter").setAttribute("style", "display: block;");
}

function scrollSlideF() {
    var x = document.getElementById("slideshow");
    var y = x.scrollWidth;
    var z = y / 4;
    x.scrollBy({ left: (z), behavior: 'smooth' });
    document.getElementById("button1-2").setAttribute("style", "display:block;");
    document.getElementById("counter").setAttribute("style", "display: none;");
}

function scrollSlideR() {
    var x = document.getElementById("slideshow");
    var y = x.scrollWidth;
    var z = (y / 4) * -1;
    x.scrollBy({ left: (z), behavior: 'smooth' });
    document.getElementById("button1-2").setAttribute("style", "display:block;");
    document.getElementById("counter").setAttribute("style", "display: none;");
}