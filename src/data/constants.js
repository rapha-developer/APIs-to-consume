const createMyProjectTitle = {
    title: "Our Client",
    description: "Several selected clients, who already believe in our service."
};

const createListOfCompanies = [
    {
        svg: 'companyTenziesSvg',
        url: '#',
        altText: 'Tenzies Game Project Logo',
    }, 
    {
        svg: 'companyCodepenSvg',
        url: '#',
        altText: 'Codepen Profile Logo'
    },
    {
        svg: 'companyBehanceSvg',
        url: '#',
        altText: 'Behance Profile Logo',
    }
];
const createListOfCardsApi = [
    {
        title: 'Business Idea Planning',
        description: 'We present you a proposal and discuss niffty-gritty like',
        iconType: 'boxSearch'
    },
    {
        title: 'Financial Planning System',
        description: 'Protocols apart from aen gage models, pricing billing',
        iconType: 'wallet'
    },
    {
        title: 'Development Website and App',
        description: 'Communication protocols apart from engagement models',
        iconType: 'code'
    },
    {
        title: 'Market Analysis Project',
        description: 'Protocols apart from aen gage models, pricing billing',
        iconType: 'chart'
    }
];
const createFirstAdvice = {
    slip: {
        advice: 'Click the button to appear a good advice for you here...',
        id: "This ID is unique for advice"
    }
};
const createAdviceHero = {
    title: 'Get Random Advice after click the button below',
    description: "“Receba um conselho aleatório a cada vez que você clicar no botão abaixo. Quando clicar, aumentará o contador de conselhos recebidos.” Portuguese description.",
    stats: {
        signal: "+",
        label: "Advice(s)",
    },
}
const createInputToFindAdvice = [
    {
        name: 'searchByWord',
        type: 'searchByWord',
        placeholder: 'Write one subject { assunto } to find advice'
    }
]
export {
    createMyProjectTitle,
    createListOfCompanies,
    createListOfCardsApi,
    createFirstAdvice,
    createAdviceHero,
    createInputToFindAdvice
}