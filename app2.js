var screen = screen.width;

if (screen <= 700) {
    var nav = document.querySelector(".nav");

    var exp = document.querySelector(".exp");


    nav.innerHTML = "EXP";
    exp.innerHTML = "<p onclick='openMenu()'><i class='fa fa-bars'></i></p>";

    function openMenu() {
        nav.innerHTML = "<p class='x' id='x' onclick='closeMenu()'>X</p><p class='home'>Home</p><p class='catalog'>Catalog</p><p class='blog'>Blog</p><p class='about'>About</p><p class='contact'>Contact</p>"
    }

    function closeMenu() {
        nav.innerHTML = "<p onclick='openMenu()'><i class='fa fa-bars'></i></p>";
    }
}



