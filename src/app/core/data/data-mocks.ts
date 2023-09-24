export interface IGame {
  title: string;
  id: string;
  provider: string;
  image: string;
  genre: 'slot' | 'rulet' | 'blackjack' | 'poker';
}

export interface IFilter {
  searchTerm: string;
  category: ICategory | null,
  provider: IProvider | null,
  genre: string | null;
  providers: IProvider[] | null,
  genres: string[] | null,
}

export interface IProvider {
  id: string;
  name: string;
  logo: string;
}

export interface ICategory {
  id: number;
  name: string;
  gameIds: string[]
}

export const favorites = ['0001', '0005', '0011'];
export const popular = ['0001', '0002', '0005', '0012'];
export const genres = ['slot', 'rulet', 'blackjack', 'poker'];
export const categories = [
  {
    id: 1,
    name: 'Favourites',
    gameIds: ['0001', '0005', '0011']
  },
  {
    id: 2,
    name: 'Popular',
    gameIds: ['0001', '0002', '0005', '0012']
  },
  {
    id: 3,
    name: '20% Cash Back',
    gameIds: []
  }
]

export const providers: IProvider[] = [
  {
    id: '0001',
    name: '1x2 Network',
    logo: 'assets/providers-logos/1x2.png'
  },

  {
    id: '0002',
    name: '2 by 2 Games',
    logo: 'assets/providers-logos/2by2gaming.png'
  },

  {
    id: '0003',
    name: 'Amatic',
    logo: 'assets/providers-logos/amatic.png'
  },

  {
    id: '0004',
    name: 'Apollo Games',
    logo: 'assets/providers-logos/apollogames.png'
  },

  {
    id: '0005',
    name: 'Aspect Gaming',
    logo: 'assets/providers-logos/aspect.png'
  }
]

export const games: IGame[] = [
  {
    title: 'Sweet bonanza tipobet',
    id: '0001',
    provider: '0001',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153645171553079306/kamrader_slot_game_title_image_4418a8cf-9e7b-4b06-b034-96cd39d2dd1a.png',
    genre: 'slot',
  },

  {
    title: '20 golden coins',
    id: '0002',
    provider: '0002',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153646032572395580/kamrader_Slot_game_title_fruits_and_candies_7cd01644-7141-45d8-af94-43fe3b637e7f.png',
    genre: 'rulet',
  },

  {
    title: 'Tipobet wild cash',
    id: '0003',
    provider: '0003',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153669516795060365/kamrader_Random_slot_game_main_screen_example_561d996c-de25-4af0-8c96-103ff31c45d8.png',
    genre: 'blackjack',
  },

  {
    title: '777 Cash Out',
    id: '0004',
    provider: '0004',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153673973897379911/kamrader_casino_game_title_image_564d48ba-a5a7-4abe-9617-284746757440.png',
    genre: 'slot',
  },

  {
    title: 'Hot slot: 777 crown',
    id: '0005',
    provider: '0005',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153673998647967827/kamrader_casino_game_title_image_1411cab1-8bf1-41b4-ba83-20e3efea7580.png',
    genre: 'poker',
  },

  {
    title: 'Magic spins',
    id: '0006',
    provider: '0001',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153675808804716554/kamrader_casino_game_title_image_4c3d94ca-5d04-4248-8fee-5d888b3f94ad.png',
    genre: 'slot',
  },

  {
    title: 'Fruit shop megaways',
    id: '0007',
    provider: '0002',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153674600698368020/kamrader_casino_game_title_image_f642d478-aa95-48dd-9ff4-d567906cd7b9.png',
    genre: 'blackjack',
  },

  {
    title: 'Sweet bonanza',
    id: '0008',
    provider: '0003',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153674608789168268/kamrader_casino_game_title_image_2769c19d-3e83-45df-adeb-8d0b3c52986c.png',
    genre: 'slot',
  },

  {
    title: 'Chance machine 20',
    id: '0009',
    provider: '0004',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153674630167543849/kamrader_casino_game_title_image_c69e655c-72d9-484d-9830-249965efb714.png',
    genre: 'slot',
  },

  {
    title: 'Hell hot 100',
    id: '0010',
    provider: '0005',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153675800634212362/kamrader_casino_game_title_image_bd4a8a26-c072-4a0e-af68-13488e4cb121.png',
    genre: 'rulet',
  },

  {
    title: 'Frozen tropics',
    id: '0011',
    provider: '0001',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153675540025323600/kamrader_casino_game_title_image_shiny_particles_nice_attractiv_b03dae03-fa52-4f5d-a7c7-3f50ae370471.png',
    genre: 'poker',
  },

  {
    title: 'Clovers of luck 2',
    id: '0012',
    provider: '0002',
    image: 'https://cdn.discordapp.com/attachments/473640300670353410/1153675790542712952/kamrader_casino_game_title_image_97c2638b-2426-436e-bc01-3c4f3db351fc.png',
    genre: 'poker',
  }
];
