const buttonDiv = document.querySelector('.comment-button-wrapper')
const buttons = buttonDiv.children
const commentConteiner = document.querySelector('.comment-conteiner')

const data = [
    {
        img: `Image/andreu2.jpg`,
        text: `Выталий? Да я слышал про Талий, но мы меня спутали! Виталик Шевчук, нет блять, Антон Ткач! Однажды Виталия попросили написать
         самый короткий рассказ способный разтрогать любого. И он написал - +2/-2. Да Виталий часто рассказывает про фронт, интересно когда
         он успел там побывать? Говорят Виталий хорошо разбирается в Реакте, интересно с когда он успел выучить физику?`
    },
    {
        img: `Image/misha.jpg`,
        text: `Прочитал отзывы на этом сайте и хоть и сам сайт особого доверия не внушил, решил таки попробовать этого Виталика. 
Несмотря на то что в описании написано что суслик, на деле оказался настоящий бобр. Сие чудо техники помогло мне сделать тонну всякой веселой всячины и провести уйму времени с удовольствием.
Хочу сказать что 20 летняя гарантия с которой идёт этот товар — исключительно фокусы маркетологов. Виталик меня ни разу не подвёл и всегда оставался верным другом и товарищем. 
Ждём новых обновлений ПО, классных фичей и долгой службы! 100/100!`
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
        img: `Image/valera.jpg`,
        text: `Достался мне в прекрасном состоянии, почти не б/у. Отличная машинка для получения жизненных советов. 
        Уже надежно работает долгие годы, не ломается, иногда нужно залить немного пивка, и работает как новенький. 
        С переездом перевел машинку на режим онлайн, но даже так почти не глючит. Был бы рад если в новой версии была 
        опция смены региона. Хочу поставить 10/10, но пока последний мой запрос залагал, ставлю 2, разрабы срочно пофиксите!!`
    },
    {
        img: `Image/serg.jpg`,
        text: `Виталик Рогалик одна штука. Приехал быстро, качественно упакованный не смотря что бу. Немного побитый и потрепанный 
        жизнью на качество все еще достойное. Пробег 20 лет, прошивка на линуксе, но с поддержкой винды и мака через встроенный апиай. 
        Всем советую, очень удачное вложение времени и денег, ни разу не пожалел о приобретении данного товара с вашего сайта. В дополнение 
        в всему выще перечисленному идет отличный перформанс на болейне, а так же проверенная стратегия старта за Флоренцию. 
        Желаю и дальшего активного развития данному товару, а так же расширения зоны поддержки на Канаду или територию Европейского Союза. 
Версия: vitalicom2.5.31
Прошивка: Лидер11(В)
Год приобретения: 2014 
Оценка - 9.5/10`
    },
    {
        img: `Image/vladick.jpg`,
        text: `Ну шо ж, Виталик. Взял его ещё молодым, в 5 классе, а теперь аж вон сколько стукнуло(вроде бы 20, да?). 
        В принципе модель отличная. Быстрый, как Ассемблер, красивый, как Питон, умный, как Java и загадочный, как Rust. 
        За эти годы вырос совсем большой, спит крепко, ест хорошо и живёт, судя по отзывам, долго. Пожал бы ему руку, да боюсь, 
        сломает. В целом друг отличный, всем рекомендую, но только на свой страх и риск.`
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

