const quotes = [
    "Грустишь - в жопе торчишь",
    "Фортин фортин скор",
    "Как то раз меня убили, но я все еще живой, все еще на стиле",
    "Ведь я всего-лишь апельсин",
    "чин чан чин чон чин чан чин чон чин чан чин чон чин чан чин чон",
    "А вспомни как я те пол ляма в долг дал просто так, ну а теперь все, я даже убрал свой лайк",
    "Ну где моя нога? О как же больно, бля",
    "А почему вода не тонет?",
    "ВА ЦАО НИ МАААА",
    "БАН МАААН",
    "Я круто выспался, съел редбул, запил его сникерсом",
    "#колбасаменяет",
    "Чувак, никого не слушай, ты реально талант",
    "Да блять у меня психическое заболевание, мне когда говорят не смеяться, я не могу не смеяться",
    "Я словно собака, с усами котенка",
    "пятислойная",
    "#деньгименяют",
    "Да это не шторы фиолетовые, это подстветка. О, оранжевие шторы, синие шторы подъехали",
    "Какие-то долбоебы кричали под окном Серега пират, я нассал на них с окна, правда ветер был сильный, так что на себя нассал",
    "Это вам не на заводе ебашить или грузчиком мешки таскать,это жоская тема, на алхимике фармить",
];

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').textContent = quotes[randomIndex];
}


