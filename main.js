const thumbnails = document.querySelectorAll('.car-gallery__thumbnail img')
const popup = document.querySelector('.popup')
const popupImg = document.querySelector('.popup__img')
const popupClose = document.querySelector('.popup__close')
const arrowPrev = document.querySelector('.popup__button--prev')
const arrowNext = document.querySelector('.popup__button--next')

let currentIndex;

thumbnails.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
        popup.classList.remove('hidden')
        popupImg.src = e.target.src
        currentIndex = index
    })
})

const closePopup = () => {
    popup.classList.add('hidden')
}

const nextImage = () => {
    if (currentIndex === thumbnails.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    popupImg.src = thumbnails[currentIndex].src;
}

const prevImage = () => {
    if (currentIndex === 0) {
        currentIndex = thumbnails.length - 1
    } else {
        currentIndex--
    }
    popupImg.src = thumbnails[currentIndex].src;
}


popupClose.addEventListener('click', closePopup)
arrowNext.addEventListener('click', nextImage)
arrowPrev.addEventListener('click', prevImage)

document.addEventListener('keydown', (e) => {
    if(!popup.classList.contains('hidden')) {
        if (e.key === 'ArrowRight' || e.keyCode === 39) {
            nextImage()
        } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
            prevImage()
        } else if (e.key === 'Escape' || e.keyCode === 27) {
            closePopup()
        } 
    }
})

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup()
    }
})