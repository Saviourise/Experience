var screen = screen.width;

if (screen <= 800) {
    var nav = document.querySelector(".nav");

    var exp = document.querySelector(".exp");

    var content = document.querySelector(".body");

    var vids = document.querySelector(".section3vids");

    vids.innerHTML = "<div class=\"flexthree\"><div class=\"imgcontainer\"><img src=\"vid2.png\" class=\"vid\" alt=\"\"><div class=\"icon\"><i class=\"fa fa-play\"></i></div></div><div class=\"imgcontainer\"><img src=\"vid5.png\" class=\"vid\" alt=\"\"><div class=\"icon\"><i class=\"fa fa-play\"></i></div></div></div><div class=\"flexthree\"><div class=\"imgcontainer\"><img src=\"vid1.png\" class=\"vid\" alt=\"\"><div class=\"icon\"><i class=\"fa fa-play\"></i></div></div><div class=\"imgcontainer\"><img src=\"vid4.png\" class=\"vid\" alt=\"\"><div class=\"icon\"><i class=\"fa fa-play\"></i></div></div></div><div class=\"flexthree\"><div class=\"imgcontainer\"><img src=\"vid6.png\" class=\"vid\" alt=\"\"><div class=\"icon\"><i class=\"fa fa-play\"></i></div></div><div class=\"imgcontainer\"><img src=\"vid3.png\" class=\"vid\" alt=\"\"><div class=\"icon\"><i class=\"fa fa-play\"></i></div></div></div>"

    content.innerHTML = "<div class='contains'><div class='experience'><p>EXPERIENCE<br>V-REALITY</p></div><div class='text'>Introducing gaming like no other, a line of breath taking<br>and adventurous experience awaits you.<br>Book an online session with us, or go for the<br>physical experience...<br></div><div class=\"btn\"><button class='button1'>Sign Up</button></div></div>"

    nav.innerHTML = "EXP";
    exp.innerHTML = "<p onclick='openMenu()'><i class='fa fa-bars'></i></p>";

    function openMenu() {
        exp.innerHTML = "<p class='x' id='x' onclick='closeMenu()'>X</p><p class='home'>Home</p><p class='catalog'>Catalog</p><p class='blog'>Blog</p><p class='about'>About</p><p class='contact'>Contact</p>"
    }

    function closeMenu() {
        exp.innerHTML = "<p onclick='openMenu()'><i class='fa fa-bars'></i></p>";
    }


}



