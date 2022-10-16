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
        type: 'text',
        placeholder: 'Write one subject { assunto } to find advice'
    }
];
const createItemsToBuildNavbar = [
    {
        text: 'home',
        url: '/'
    },
    {
        text: 'advice',
        url: '/advice'
    },
    {
        text: 'rick',
        url: '/rickAndMorty'
    },
    {
        text: 'pokeApi',
        url: '/pokeApi'
    },
    {
        text: 'contact',
        url: '#'
    },
];
const createPagesPosition = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
}
const createInputToFindCharacter = [
    {
        name: 'searchCharacterByName',
        type: 'text',
        placeholder: 'Write the name of a character from the Rick and Morty series'
    }
];
const createInputToGetSingleCharacter = [
    {
        name: 'searchCharacterByID',
        placeholder: 'Choose a number to get single character from the Rick and Morty series',
        minimumValue: 1,
        maximumValue: 286,
    }
]
const createGenerationsToBuildForm = [
    {
        name: "generation-i",
        url: "https://pokeapi.co/api/v2/generation/1/"
    },
    {
        name: "generation-ii",
        url: "https://pokeapi.co/api/v2/generation/2/"
    },
    {
        name: "generation-iii",
        url: "https://pokeapi.co/api/v2/generation/3/"
    },
    {
        name: "generation-iv",
        url: "https://pokeapi.co/api/v2/generation/4/"
    },
    {
        name: "generation-v",
        url: "https://pokeapi.co/api/v2/generation/5/"
    },
]

export {
    createMyProjectTitle,
    createListOfCompanies,
    createListOfCardsApi,
    createFirstAdvice,
    createAdviceHero,
    createInputToFindAdvice,
    createItemsToBuildNavbar,
    createPagesPosition,
    createInputToFindCharacter,
    createInputToGetSingleCharacter,
    createGenerationsToBuildForm
}