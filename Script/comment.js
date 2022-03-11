const buttonDiv = document.querySelector('.comment-button-wrapper')
const buttons = buttonDiv.children
const commentConteiner = document.querySelector('.comment-conteiner')

const data = [
    {
        img: `Image/fedyua.jpg`,
        text: `Нормальный малый, рабочий. За доброту и поддержку в нужные моменты 
        автоматически накидываю 5 балов, немного смущает рост т.к приходиться высоко поднимать голову. Но за такую стоимость это мелочи.
В целом лучшая покупка за одну бутылку вина в моей жизни. Буду поддерживать производителя и дальше, с нетерпением жду 21 версию`
    },
    {
        img: `Image/nikita.jpg`,
        text: `Виталик, с Днём Рождения!!🎉 Мирного неба над головой тебе и твоим близким. Чтобы самое плохое, что коснулось 
        тебя это были молитвы в инстаграмме🙃 Помимо сегодняшней повестки желаю тебе оставаться собой во всём. Сохранить этот запал, 
        это исследовательское рвение. Держать этот баланс между хаосом организации и перфекционизмом. Береги спину и всегда знай, 
        куда ты бежишь😜`
    },
    {
        img: `Image/andreu1.jpg`,
        text: `Самый интересный босс в данжоне «Школа» и его модификация в локации «Дача Андрея», в первом варианте рейдиться довольно
         сложно так как нужен сильный тимбилд и маскировка так как может быть призван дополнительный босс «Аркадий» и нанести смертельный
         урон всей команде, дачная версия гораздо успешнее так как можно использовать предмет «бутылка алкоголя» и понизить внимательность
          босса на 50%. А так скажу что пассивки у данного юнита очень сильные, в них входит: душевность, доброта, ум и очень приятный характер.
          Однозначно ставлю класс`
    },
    {
        img: `Image/vladick.jpg`,
        text: `Ну шо ж, Виталик. Поздравляю тебя с Днём рождения (тебе наверное 20 выполняется, да?), желаю быть быстрым, как Ассемблер, красивым, 
        как Питон, умным, как Java и загадочным, как C#. Крепко жму руку (только не сломай, а то я тебя знаю).`
    },
    {
        img: `Image/nazar.jpg`,
        text: `my wish for you is very clear to make crossover 23 realese with directX 12 inside of it so from the morning till the night The Elden Ring will be your guidance light
the world is big It'll never end so after each boss there will be next with different moveset and stregth Presets And finally there'll be a day when you will find that magic trade
and all Of different Sorts of spells  like ice walls, stOrms and quakes will coSt as low as just 1 soul so you can simply buy just all of them and cast how many tImes you like
because your mana'll never end and that's how you'll pve and pvp in search of Elden , fuckin', Ring`
    },
    {
        img: `Image/julia.jpg`,
        text: `Хороший товар, іноді канєшно глючить, але коли працює - то безподобний. 9,5/10 дякую заводчикам.`
    },
    {
        img: `Image/nadya.jpg`,
        text: `З днем народження 🎂 ! Не знаю як можна зараз починати привітання без найголовнішого 
        побажання миру над головою, тому звісно бажаю тобі і всім нам щоб хуйло здохло, всі кацапи стали  хоч трохи розумніші, а ми 
        відбудувалися і стали найпрекраснішою країною світу, як воно і мало бути😇 Але тепер всеж побажаю тобі щоб твоє життя було 
        наповнене приємними турботами, геніальними ідеями і блискучими перемогами! Хай у складні моменти поряд завжди будуть близькі 
        і друзі бажано прям тут і зараз. Радості і сміху, поваги і успіху в твоїх програмізмах! Нехай все буде легко і цікаво😊 Нехай 
        завжди все складається 
        так як ти хочеш. Став нові цілі і досягай їх, хоча з цим якраз у тебе проблем нема, що в одному, що у іншому)))) 🎉🎀🎁🎈`
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

