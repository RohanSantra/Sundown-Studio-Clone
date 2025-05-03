function locomotiveScroll() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    function raf() {
        scroll.update();
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

function loaderAnimation() {
    const loader = document.querySelector("#loader");
    setTimeout(() => {
        loader.style.animation = "moveup 1s linear"
        loader.style.top = "-100%";
        loader.style.display="none";
    }, 4200);
}


function ImagePopUpAnimation() {
    const elemC = document.querySelectorAll(".page3 .container")
    const fixed = document.querySelector("#fixed-image")

    elemC.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            const image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
            fixed.style.display = "block"
        })
        e.addEventListener("mouseleave", function () {
            fixed.style.display = "none"
        })
    })
}


function toggleDescription(idx) {
    const heading = document.querySelectorAll(".page4 .headline h2");
    const para = document.querySelectorAll(".page4 .description p");
    const rightImage = document.querySelector(".page4 .right-side");

    function toggleStyling(idx) {
        let count = idx ? idx : 0;
        for (let i = 0; i < heading.length; i++) {
            if (i === count) {
                heading[i].style.color = "white";
                heading[i].style.paddingLeft = 0;
                heading[i].style.borderColor = "#FE330A";
                para[i].style.display = "initial";
                let image = heading[i].getAttribute("data-image")
                rightImage.style.backgroundImage = `url(${image})`
            }
            else {
                heading[i].style.color = "grey";
                heading[i].style.paddingLeft = "20px";
                heading[i].style.borderColor = "grey";
                para[i].style.display = "none";
            }

        }
    }

    toggleStyling();
    heading.forEach(function (e, idx) {
        e.addEventListener("click", () => {
            toggleStyling(idx)
        })
    })
}


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 100,
            },
        },
    });
}


function menu() {
    document.querySelector("nav .menu").addEventListener("click", () => {
        document.querySelector("nav .overlay").classList.toggle("top")
        document.querySelector("nav .links").classList.toggle("top")
        document.querySelector("nav .menu i").classList.toggle("ri-close-large-line");
        document.querySelector("nav .menu i").classList.toggle("ri-menu-line");
        document.querySelectorAll("nav .links h4").forEach(heading => {
            heading.classList.toggle("hidden")
        })
    });
}


window.addEventListener("DOMContentLoaded", () => {
    loaderAnimation();
    locomotiveScroll();
    ImagePopUpAnimation();
    toggleDescription();
    swiperAnimation();
    menu();
})
