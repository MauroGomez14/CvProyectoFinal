let botones = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        this.classList.toggle("active");

    let contenido = this.nextElementSibling;
    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else {
        contenido.style.display = "block";
    }
    });
}
