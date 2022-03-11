const buttonDiv = document.querySelector('.comment-button-wrapper')
const buttons = buttonDiv.children
// const comment = document.querySelector('.comment-wrapper')
const commentConteiner = document.querySelector('.comment-conteiner')
const commentText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae tortor nisl.
                     Phasellus congue non est molestie sagittis. Nullam ipsum dui, vestibulum vel rhoncus
                     a, consequat vitae nulla. Curabitur sed odio vel turpis scelerisque tincidunt.`
const data = [
    {
        img: `Image/fedua.jpg`,
        text: `Нормальный малый, рабочий. За доброту и поддержку в нужные моменты автоматически накидываю 5 балов, немного смущает рост т.к приходиться высоко поднимать голову. Но за такую стоимость это мелочи.
В целом лучшая покупка за одну бутылку вина в моей жизни. Буду поддерживать производителя и дальше, с нетерпением жду 21 версию`
    },
    {
        img: `Image/human2.jpg`,
        text: commentText
    },
    {
        img: `Image/human1.jpg`,
        text: commentText
    },
    {
        img: `Image/human2.jpg`,
        text: commentText
    },
]

const createElem = (tag, classname = "") => {
    const element = document.createElement(tag)
    element.className = classname
    return element
};

const renderImg = element => {
    const image = createElem("img")
    image.src = element.img
    return image
};

const renderText = (element) => {
    const text = createElem("p")
    text.innerHTML = element.text
    return text
}

const renderConteiner = (classname, ...children) => {
    const conteiner = createElem("div", classname)
    children.forEach((element) => conteiner.appendChild(element))
    return conteiner
}

function renderPost(element) {
    const img = renderImg(element)
    const text = renderText(element)
    const textConteiner = renderConteiner('comment-text', text)
    const post = renderConteiner('comment-wrapper', img, textConteiner)
    post.classList.add('close')
    commentConteiner.insertBefore(post, buttonDiv)
}

let indexPost = 0

function replace(number) {
    commentConteiner.children[0].classList.replace('open', 'close')
    setTimeout(function () {
        commentConteiner.children[0].remove()
        renderPost(data[number])
        setTimeout(function () {
            commentConteiner.children[0].classList.replace('close', 'open')
        }, 500)
    }, 500)
    indexPost = number
}

const showPost = (number) => {
    return () => {
        if (indexPost === number) {
            return commentConteiner.children[0]
        } else {
            replace(number)
        }
    }
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showPost(i))
}

