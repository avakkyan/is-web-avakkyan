document.addEventListener('DOMContentLoaded', () => {
    const wines = [
        {
            src: "https://simplewine.ru/upload/iblock/124/124953d575d2eaecd85b609f4ae9c7aa.png",
            alt: "Вино Khikhvi Qvevri, Giuaani, 2021",
            name: "Khikhvi Qvevri, Giuaani, 2021",
            price: "3890 руб",
        },
        {
            src: "https://simplewine.ru/upload/iblock/6a9/6a9273f5d174ba63ab2712fcaafa1bcb.png",
            alt: "Вино Besini Qvevri White, 2021",
            name: "Besini Qvevri White, 2021",
            price: "29990 руб",
        },
        {
            src: "https://simplewine.ru/upload/iblock/130/130b5936094de555e3b640cc0bb5d1d8.png",
            alt: "Вино Kisi Qvevri, Binekhi, 2019",
            name: "Kisi Qvevri, Binekhi, 2019",
            price: "2797 руб",
        },
        {
            src: "https://simplewine.ru/upload/iblock/6a9/6a9273f5d174ba63ab2712fcaafa1bcb.png",
            alt: "Вино Besini Premium Red, 2021",
            name: "Besini Premium Red, 2021",
            price: "3490 руб",
        },
        {
            src: "https://simplewine.ru/upload/iblock/25b/25bfbbf9bc194903919dc6b5f5a694e9.png",
            alt: "Вино Besini Premium Red, 2021",
            name: "ино Besini Premium White, 2017",
            price: "2790 руб",
        },
        {
            src: "https://simplewine.ru/upload/iblock/c8f/c8fb56cd7602287ab33025d09f1f0c7f.png",
            alt: "Вино Saperavi Shildis Mtebi, 2022",
            name: "Besini Premium Red, 2021",
            price: "1190 руб",
        },
    ];

    // инициализирую контейнер
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // генерим слайды
    wines.forEach(wine => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        const img = document.createElement('img');
        img.src = wine.src;
        img.alt = wine.alt;

        const name = document.createElement('p');
        name.textContent = wine.name;

        const price = document.createElement('p');
        price.textContent = wine.price;

        slide.appendChild(img);
        slide.appendChild(name);
        slide.appendChild(price);
        swiperWrapper.appendChild(slide);
    });

    // Инициализация свайпера
    const swiper = new Swiper('.swiper-container', {
        autoplay: false, // отключить автопрокрутку (она меня бесит)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        centeredSlides: false,
        loop: true,
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 3,
    });
});
