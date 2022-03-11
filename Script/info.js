let postIndex = false
const divButton = document.querySelector('.info-button')
const button = divButton.childNodes[1]
const infoPost = document.querySelector('.post-info')
const infoText = document.querySelector('.info-text')
const text = infoText.children[0]

function changeIndex() {
    if (postIndex === false) {
        infoPost.classList.add('post-active')
    } else {
        infoPost.classList.remove('post-active')
    }
    postIndex = !postIndex
}

button.addEventListener('click', changeIndex)


