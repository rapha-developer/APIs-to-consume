const createMyProjectTitle = {
	title: "Our Client",
	description:
		"Several selected clients, who already believe in our service.",
};

const createListOfCompanies = [
	{
		svg:{
			url: '/src/assets/myCompanyTenzies.svg',
			altText: "Tenzies Game Project Logo",
		},
		url: "#",
	},
	{
		svg:{
			url: '/src/assets/myCompanyCodepen.svg',
			altText: "Codepen Profile Logo",
		},
		url: "#",
	},
	{
		svg:{
			url: '/src/assets/MyCompanyBehance.svg',
			altText: "Behance Profile Logo",
		},
		url: "#",
	},
];
const createListOfCardsApi = [
	{
		title: "Business Idea Planning",
		description: "We present you a proposal and discuss niffty-gritty like",
		iconType: "boxSearch",
	},
	{
		title: "Financial Planning System",
		description: "Protocols apart from aen gage models, pricing billing",
		iconType: "wallet",
	},
	{
		title: "Development Website and App",
		description: "Communication protocols apart from engagement models",
		iconType: "code",
	},
	{
		title: "Market Analysis Project",
		description: "Protocols apart from aen gage models, pricing billing",
		iconType: "chart",
	},
];
const createFirstAdvice = {
	slip: {
		advice: "Click the button to appear a good advice for you here...",
		id: "This ID is unique for advice",
	},
};
const createAdviceHero = {
	title: "Get Random Advice after click the button below",
	description:
		"“Receba um conselho aleatório a cada vez que você clicar no botão abaixo. Quando clicar, aumentará o contador de conselhos recebidos.” Portuguese description.",
	stats: {
		signal: "+",
		label: "Advice(s)",
	},
};
const createInputToFindAdvice = [
	{
		name: "searchByWord",
		type: "text",
		placeholder: "Write one subject { assunto } to find advice",
	},
];
const createItemsToBuildNavbar = [
	{
		text: "home",
		url: "/",
	},
	{
		text: "advice",
		url: "/advice",
	},
	{
		text: "rick",
		url: "/rickAndMorty",
	},
	{
		text: "pokeApi",
		url: "/pokeApi",
	},
	{
		text: "contact",
		url: "/contact",
	},
];
const createItemsToBuildFooter = [
	{
		title: "Poke fun",
		items: [
			{
				label: "Misc items",
				url: "/find-misc-items",
			},
			{
				label: "Battle items",
				url: "/find-battle-items",
			},
			{
				label: "Berries items",
				url: "/find-berry-items",
			},
			{
				label: "Medicine items",
				url: "/find-medicine-items",
			},
		],
	},
	{
		title: "Company",
		items: [
			{
				label: "About Us",
				url: "#",
			},
			{
				label: "Career",
				url: "#",
			},
			{
				label: "Become Investor",
				url: "#",
			},
		],
	},
	{
		title: "Support",
		items: [
			{
				label: "FAQ",
				url: "#",
			},
			{
				label: "Policy",
				url: "#",
			},
			{
				label: "Business",
				url: "#",
			},
		],
	},
	{
		title: "Contact",
		items: [
			{
				label: "Behance",
				url: "https://www.behance.net/rapha-developer",
			},
			{
				label: "Codepen",
				url: "https://codepen.io/rapha-developer",
			},
			{
				label: "Github",
				url: "https://github.com/rapha-developer",
			},
		],
	},
];
const createPagesPosition = {
	first: 0,
	second: 1,
	third: 2,
	fourth: 3,
	fifth: 4,
};
const createInputToFindCharacter = [
	{
		name: "searchCharacterByName",
		type: "text",
		placeholder:
			"Write the name of a character from the Rick and Morty series",
	},
];
const createInputToGetSingleCharacter = [
	{
		name: "searchCharacterByID",
		placeholder:
			"Choose a number to get single character from the Rick and Morty series",
		minimumValue: 1,
		maximumValue: 286,
	},
];
const createGenerationsToBuildForm = [
	{
		name: "generation-i",
		url: "https://pokeapi.co/api/v2/generation/1/",
	},
	{
		name: "generation-ii",
		url: "https://pokeapi.co/api/v2/generation/2/",
	},
	{
		name: "generation-iii",
		url: "https://pokeapi.co/api/v2/generation/3/",
	},
	{
		name: "generation-iv",
		url: "https://pokeapi.co/api/v2/generation/4/",
	},
	{
		name: "generation-v",
		url: "https://pokeapi.co/api/v2/generation/5/",
	},
];
const createPokeBallsToPokeMart = [
	{
		name: "master-ball",
		url: "https://pokeapi.co/api/v2/item/1/",
		price: 900,
	},
	{
		name: "ultra-ball",
		url: "https://pokeapi.co/api/v2/item/2/",
		price: 800,
	},
	{
		name: "great-ball",
		url: "https://pokeapi.co/api/v2/item/3/",
		price: 600,
	},
	{
		name: "poke-ball",
		url: "https://pokeapi.co/api/v2/item/4/",
		price: 300,
	},
	{
		name: "safari-ball",
		url: "https://pokeapi.co/api/v2/item/5/",
		price: 100,
	},
];
const createPotionsToPokeMart = [
	{
		name: "full-restore",
		url: "https://pokeapi.co/api/v2/item/23/",
		price: 900,
	},
	{
		name: "max-potion",
		url: "https://pokeapi.co/api/v2/item/24/",
		price: 700,
	},
	{
		name: "hyper-potion",
		url: "https://pokeapi.co/api/v2/item/25/",
		price: 500,
	},
	{
		name: "super-potion",
		url: "https://pokeapi.co/api/v2/item/26/",
		price: 300,
	},
	{
		name: "moomoo-milk",
		url: "https://pokeapi.co/api/v2/item/33/",
		price: 200,
	},
	{
		name: "potion",
		url: "https://pokeapi.co/api/v2/item/17/",
		price: 100,
	},

];
const createHeldItemsToPokeMart = [
	{
		name: "muscle-band",
		url: "https://pokeapi.co/api/v2/item/243/",
		price: 900,
	},
	{
		name: "focus-band",
		url: "https://pokeapi.co/api/v2/item/207/",
		price: 700,
	},
	{
		name: "wise-glasses",
		url: "https://pokeapi.co/api/v2/item/244/",
		price: 550,
	},
	{
		name: "rocky-helmet",
		url: "https://pokeapi.co/api/v2/item/583/",
		price: 450,
	},
	{
		name: "float-stone",
		url: "https://pokeapi.co/api/v2/item/582/",
		price: 200,
	},
	{
		name: "air-balloon",
		url: "https://pokeapi.co/api/v2/item/584/",
		price: 100,
	}
];
const createItemsToBuildStoreOfPokeMart = [
	{
		product: "PokeBalls",
		items: createPokeBallsToPokeMart,
	},
	{
		product: "Potions",
		items: createPotionsToPokeMart,
	},
	{
		product: "HeldItems",
		items: createHeldItemsToPokeMart,
	},
]
const createItemsByCategoryMedicine = [
	{
		name: "vitamins",
		url: "https://pokeapi.co/api/v2/item-category/26/",
	},
	{
		name: "healing",
		url: "https://pokeapi.co/api/v2/item-category/27/",
	},
	{
		name: "pp-recovery",
		url: "https://pokeapi.co/api/v2/item-category/28/",
	},
	{
		name: "revival",
		url: "https://pokeapi.co/api/v2/item-category/29/",
	},
	{
		name: "status-cures",
		url: "https://pokeapi.co/api/v2/item-category/30/",
	},
];
const createItemsByCategoryBerries = [
	{
		name: "effort-drop",
		url: "https://pokeapi.co/api/v2/item-category/2/",
	},
	{
		name: "medicine",
		url: "https://pokeapi.co/api/v2/item-category/3/",
	},
	{
		name: "other",
		url: "https://pokeapi.co/api/v2/item-category/4/",
	},
	{
		name: "in-a-pinch",
		url: "https://pokeapi.co/api/v2/item-category/5/",
	},
	{
		name: "picky-healing",
		url: "https://pokeapi.co/api/v2/item-category/6/",
	},
	{
		name: "type-protection",
		url: "https://pokeapi.co/api/v2/item-category/7/",
	},
	{
		name: "baking-only",
		url: "https://pokeapi.co/api/v2/item-category/8/",
	},
];
const createItemsByCategoryBattle = [
	{
		name: "stat-boosts",
		url: "https://pokeapi.co/api/v2/item-category/1/",
	},
	{
		name: "flutes",
		url: "https://pokeapi.co/api/v2/item-category/38/",
	},
];
const createItemsByCategoryMisc = [
	{
		name: "evolution",
		url: "https://pokeapi.co/api/v2/item-category/10/",
	},
	{
		name: "spelunking",
		url: "https://pokeapi.co/api/v2/item-category/11/",
	},
	{
		name: "choice",
		url: "https://pokeapi.co/api/v2/item-category/13/",
	},
	{
		name: "effort-training",
		url: "https://pokeapi.co/api/v2/item-category/14/",
	},
	{
		name: "bad-held-items",
		url: "https://pokeapi.co/api/v2/item-category/15/",
	},
	{
		name: "training",
		url: "https://pokeapi.co/api/v2/item-category/16/",
	},
	{
		name: "plates",
		url: "https://pokeapi.co/api/v2/item-category/17/",
	},
	{
		name: "type-enhancement",
		url: "https://pokeapi.co/api/v2/item-category/19/",
	},
	{
		name: "scarves",
		url: "https://pokeapi.co/api/v2/item-category/36/",
	},
	{
		name: "jewels",
		url: "https://pokeapi.co/api/v2/item-category/42/",
	},
];
const createItemsToBuildMapOfOptions = [
	{
		type: "Miscellaneous",
		options: createItemsByCategoryMisc,
	},
	{
		type: "battle",
		options: createItemsByCategoryBattle,
	},
	{
		type: "berries",
		options: createItemsByCategoryBerries,
	},
	{
		type: "medicine",
		options: createItemsByCategoryMedicine,
	},
];
const createSocialMediasToContactSocial = {
	title: 'My Social Medias',
	data: [
		{
			name: 'email',
			username: "@gmail/contatosraphaelmoreira",
			url: "mailto:contatosraphaelmoreira@gmail.com",
			iconUrl: "https://cdn-icons-png.flaticon.com/512/732/732200.png"
		},
		{
			name: 'github',
			username: "@github/rapha-developer",
			url: "https://github.com/rapha-developer",
			iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733609.png"
		},
		{
			name: 'codepen',
			username: "@codepen.io/rapha-developer",
			url: "https://codepen.io/rapha-developer",
			iconUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111501.png"
		},
		{
			name: 'behance',
			username: "@behance.net/rapha-developer",
			url: "https://www.behance.net/rapha-developer",
			iconUrl: "https://cdn-icons-png.flaticon.com/512/145/145799.png"
		}
	]
};
export {
	createMyProjectTitle,
	createListOfCompanies,
	createListOfCardsApi,
	createFirstAdvice,
	createAdviceHero,
	createInputToFindAdvice,
	createItemsToBuildNavbar,
	createItemsToBuildFooter,
	createPagesPosition,
	createInputToFindCharacter,
	createInputToGetSingleCharacter,
	createGenerationsToBuildForm,
	createPokeBallsToPokeMart,
	createPotionsToPokeMart,
	createHeldItemsToPokeMart,
	createItemsToBuildStoreOfPokeMart,
	createItemsByCategoryMedicine,
	createItemsByCategoryBerries,
	createItemsByCategoryBattle,
	createItemsByCategoryMisc,
	createItemsToBuildMapOfOptions,
	createSocialMediasToContactSocial
};
