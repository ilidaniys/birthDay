let slideIndex = 1;

const textDiscription = [
    {
        title: 'Самое отмороженное ОПГ, их боялись даже чеченцы'
    },
    {
        title: 'Собрание ЦК КПСС'
    },
    {
        title: 'Последнее что видят чипсы перед своей гибелью'
    },
    {
        title: 'Такой маленький а уже ненавидит мир'
    },
    {
        title: 'Он пришел сюда надеть очки и разрушить твою жизнь, как видишь очки он уже надел'
    },
    {
        title: 'Искреность, самое лучшее в людях'
    },
    {
        title: 'Не зря набил 600к'
    },
    {
        title: 'Хороших, вежливый парень. Приятно находится в компаниию. Сын маминой подруги.'
    },
    {
        title: 'Вот они, слева направо...'
    },
    {
        title: ''
    },
    {
        title: 'Отличный маг, бухает правда много. Нашел ласку, постирал прикидон'
    },
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
