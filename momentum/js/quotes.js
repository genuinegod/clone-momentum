const quotes = [
    {
        quote: "괴물과 싸우고 있는 자, 그 스스로 괴물이 되어가고 있는 것은 아닌지 돌아봐야 한다.",
        author: "니체",
    } ,
    {
        quote: "눈을 들어 별을 향하되 발은 땅에 두어라.",
        author: "시어도어 루스벨트",
    } ,
    {
        quote: "지금 당신은 근면과 성실이란 미명 아래 사유의 의무를 방기하고 있는 것은 아닌가?",
        author: "한나 아렌트 ",
    } ,
    {
        quote: "불쾌하게 여기는 농담만큼 그 사람의 인격을 분명히 드러내 주는 것도 없다.",
        author: "리히텐베르크",
    } ,
    {
        quote: "사물의 무상함에 대해 심각하게 고민하고 속세의 덧없음에 몰두하는 사람들을 보면 안타깝다. 모름지기 우리 인간은 덧없는 것을 의미있는 것으로 만들기 위해 태어나지 않았는가!",
        author: "괴테",
    } ,
    {
        quote: "나는 한 번도 내가 어떤 자리에 오르거나 어떤 사람이 될 것인가에 관심을 두지 않았습니다. 늘 내가 무엇을 해야 하나에 관심을 두었습니다.",
        author: "다트머스 대학 총장",
    } ,
    {
        quote: "단순하지만 누를 길 없이 강렬한 세 가지 열정이 내 인생을 지배해 왔으니, 사랑에 대한 갈망, 지식에 대한 탐구욕, 인류의 고통에 대한 참기 힘든 연민이 바로 그것이다.",
        author: "버틀런트 러셀",
    } ,
    {
        quote: "무언가를 위해 목숨을 버릴 각오가 되어 있지 않은 한, 그것이 삶의 목표라는 어떤 확신도 가질 수 없다.",
        author: "체 게바라",
    } ,
    {
        quote: "행위는 삶의 실체이며 말은 그 장식이다. 탁월한 행동은 후세에 남지만 탁월한 말은 지나가 버린다.",
        author: "발타자르 그라시안",
    } ,
    {
        quote: "보수가 훨씬 많다는 이유로 노력할 만한 가치가 없는 일을 선택하는 사람들이 있다면, 어떻게 사는 것이 행복한 것인가 하는 관점에서 곰곰이 따져볼 필요가 있다. 자부심이 없는 사람은 결코 진정한 행복을 누릴 수 없고, 자기 일을 부끄럽게 여기는 사람은 결코 자부심을 가질 수 없다.",
        author: "버트런트 러셀 ",
    } ,
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author}`;
