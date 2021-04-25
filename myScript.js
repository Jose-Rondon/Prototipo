function scrollSlideF()  {
    var x = document.getElementById("slideshow");
    var y = x.scrollWidth;
    var z = y / 4;
    x.scrollBy({left:(z),behavior:'smooth'});
}
function scrollSlideR()  {
    var x = document.getElementById("slideshow");
    var y = x.scrollWidth;
    var z = (y / 4) * -1;
    x.scrollBy({left:(z),behavior:'smooth'});
}