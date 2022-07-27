window.addEventListener('load', () => {

    // buttons
    const left = document.querySelector('.btn-left');
    const right = document.querySelector('.btn-right');

    // carusrl
    const slider = document.querySelector('.carusel__slider');
    const images = document.querySelectorAll('.carusel__img');
    //counter
    let count = 0;
    // витягуєм ширину кожної картинки в контейнері
    const step = images[0].clientWidth;
    // двигаєм на ширину картинки в блоці через стилі
    slider.style.transform = 'translateX(' + `${-step * count}px)`;
    // по кліку двигаєм слайдер
    right.addEventListener('click', () => {
        // єслі картинка остання то вертаєм на першу
        if (count >= images.length - 1) {
            count = -1;
        }

        slider.classList.add('animate');
        count++;
        slider.style.transform = 'translateX(' + `${-step * count}px)`;

    })

    left.addEventListener('click', () => {
        if (count <= 0) {
            count = images.length;
        }

        slider.classList.add('animate');
        count--;
        slider.style.transform = 'translateX(' + `${-step * count}px)`;

    })
})