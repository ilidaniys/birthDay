let slideIndex = 1;

const textDiscription = [
    {
        img: src = 'Image/battle_for_winner.jpg',
        title: 'неоновый закат'
    },
    {
        img: src = 'Image/inspiration.jpg',
        title: 'Цытати победителей'
    },
    {
        img: src = 'Image/succsseion.jpg',
        title: 'Реальная цена победы'
    }
]


function showSlide(n) {
    const slide = document.getElementsByClassName('slides')
    const imageText = document.getElementsByClassName('text-caption')
    if (n > slide.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slide.length
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }
    slide[slideIndex - 1].style.display = 'block';
    imageText[0].innerHTML = textDiscription[slideIndex - 1].title
}

showSlide(slideIndex)

function plusSlide(index) {
    showSlide(slideIndex += index)
}

function currentSlide(index) {
    showSlide(slideIndex = index)
}
