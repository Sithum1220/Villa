const myslide = $('.mySlider');
dot = $('.dot');
let counter = 1;
var slides = document.querySelectorAll('.mySlider');
var images = document.querySelectorAll('.imgs');
var btns = document.querySelectorAll(' .dot');
var text = document.querySelectorAll(' .text');
var sideBtnBox = document.querySelectorAll(' .side-btn');
var ratingUser = document.querySelectorAll(' .rating');
// let currentSlides = 1;
slidefun(counter);
//
let timer = setInterval(autoSlide, 8000);

//
function autoSlide() {
    counter += 1;
    slidefun(counter);
}

//
function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

//
function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

//
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

//
function slidefun(n) {
    slides.forEach((slide) => {
        // slide.style.display = 'none';
        slide.classList.remove('active');
        // slide.css('display','none');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        })
    });
    images.forEach((img) => {
        // slide.style.display = 'none';
        img.classList.remove('img');
    });
    text.forEach((txt) => {
        // slide.style.display = 'none';
        txt.classList.remove('animate__fadeInUp');
    });
    sideBtnBox.forEach((sideBtn) => {
        // slide.style.display = 'none';
        sideBtn.classList.remove('animate__fadeInLeft');
    });
    ratingUser.forEach((reting) => {
        // slide.style.display = 'none';
        reting.classList.remove('animate__fadeInRight');
    });


    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    // dot[counter - 1].className += " active";
    slides [counter - 1].classList.add('active');
    images [counter - 1].classList.add('img');
    btns[counter - 1].classList.add('active');
    text[counter - 1].classList.add('animate__fadeInUp');
    sideBtnBox[counter - 1].classList.add('animate__fadeInLeft');
    ratingUser[counter - 1].classList.add('animate__fadeInRight');
}


// Javascript for image slider manual navigation
// var manualNav = function (manual) {
//
//     slides.forEach((slide) => {
//         // slide.style.display = 'none';
//         slide.classList.remove('active');
//         // slide.css('display','none');
//         btns.forEach((btn) => {
//             btn.classList.remove('active');
//         })
//     });
//
//     images.forEach((img) => {
//         // slide.style.display = 'none';
//         img.classList.remove('img');
//     });
//     // slides[manual].style.display = 'block';
//
//     slides [manual].classList.add('active');
//     images [manual].classList.add('img');
//     btns[manual].classList.add('active');
// }
// btns.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//         manualNav(i);
//         counter = i;
//     });
// });

