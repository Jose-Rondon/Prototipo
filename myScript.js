document.getElementById("button1-1").addEventListener("click", stopSlide);
document.getElementById("button2-2").addEventListener("click", stopSlide);

var slide = null;

function stopSlide() {
    clearInterval(slide);
}

onload = function () {
    slide = setInterval(slideshow1, 5000);
    function slideshow1() {
        var x = document.getElementById("slideshow");
        var y = x.scrollWidth;
        var z = y / 4;
        if (x.scrollLeft + z == x.scrollWidth) {
            x.scroll({left:(x.scrollWidth * -1), behavior:'smooth'})
        }
        else    {
           x.scrollBy({left:(z), behavior:'smooth'});
        }
    }
}

function scrollSlideF()  {
    var x = document.getElementById("slideshow");
    var y = x.scrollWidth;
    var z = y / 4;
    x.scrollBy({left:(z),behavior:'smooth'});
    clearInterval(slide);
}

function scrollSlideR()  {
    var x = document.getElementById("slideshow");
    var y = x.scrollWidth;
    var z = (y / 4) * -1;
    x.scrollBy({left:(z),behavior:'smooth'});
}