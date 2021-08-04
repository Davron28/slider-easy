let prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    slides = document.querySelectorAll('.slide');



let active = 0;

next.addEventListener('click', () => slider(next));
prev.addEventListener('click', () => slider(prev));

function slider(btn) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (btn == next) {
        active++
        if (active == slides.length) {
            active = 0
        }
    } else if (btn == prev) {
        active--
        if (active < 0) {
            active = slides.length - 1
        }
    }
    slides[active].classList.add('active');
}



let auto = true,
    timer = 3000

function autoplay() {
    if (auto == true) {
        slides.forEach(slide => slide.classList.remove('active'));
        active++
        if (active == slides.length) active = 0
        setTimeout(() => autoplay(), timer);
    }
    slides[active].classList.add('active');
}
autoplay();