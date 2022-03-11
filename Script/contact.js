let postIndexContact = false
const lableCheckBox = document.querySelector('#contact-checkbox-label')
const buttonCheckBox = document.querySelector('#contact-checkbox')


function changeIndex() {
    if (postIndexContact === false) {
        lableCheckBox.innerHTML = 'All right men'
        lableCheckBox.style.color = 'black'
    } else {
        lableCheckBox.innerHTML = 'You agree with our terms?'
        lableCheckBox.style.color = 'black'
    }
    postIndexContact = !postIndexContact
}

buttonCheckBox.addEventListener('mousedown', changeIndex)
lableCheckBox.addEventListener('mousedown', changeIndex)

const emailInput = document.querySelector('#email-contact')
const nameInput = document.querySelector('#name-contact')

const correctData = () => {
    emailInput.setCustomValidity('')
    emailInput.checkValidity()
}

const incorrectData = (input, item, altItem) => {
    return () => {
        if (input.value === '') {
            input.setCustomValidity(`Enter your ${item}`)
        } else {
            input.setCustomValidity(altItem)
        }
    }
}

const inputs = [
    {
        name: nameInput,
        items: 'name',
        alternative: 'Try again'
    },
    {
        name: emailInput,
        items: 'email',
        alternative: 'Try again'
    },
    // {
    //     name: disInput,
    //     items: 'opinion about us',
    //     alternative:'Desription must be at least 10 symbols'
    // }
]

for (let i = 0; i < inputs.length; i++) {
    inputs[i].name.addEventListener('input', correctData)
    inputs[i].name.addEventListener('invalid', incorrectData(inputs[i].name, inputs[i].items, inputs[i].alternative))
    console.log(inputs[i].items)
}

const formContact = document.querySelector('.contact-wrapper')

formContact.addEventListener('submit', (event) => {
    if (!postIndexContact) {
        event.preventDefault()
        lableCheckBox.innerHTML = 'Pls accept it'
        lableCheckBox.style.color = 'red'
    }

})


// emailInput.addEventListener('input', correctData)
// emailInput.addEventListener('invalid', incorrectData(emailInput, 'email'))
//
// nameInput.addEventListener('input', correctData)
// nameInput.addEventListener('invalid', incorrectData(nameInput, 'name'))