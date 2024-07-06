export interface Contact {
  type: string;
  link: string;
}

export interface Member {
  name: string;
  contacts: Contact[];
  status: string;
  github: {
    title: string;
    link: string;
  };
  portfolioLink: string;
}

export const members: Member[] = [
  {
    name: "Maksym Pryshchepa",
    contacts: [
      {
        type: "Telegram",
        link: "https://t.me/mmpryshchepa",
      },
      {
        type: "Mail",
        link: "mmpryshchepa@gmail.com",
      },
    ],
    status: "source community developer",
    github: {
      title: "Maks-Mm",
      link: "https://github.com/Maks-Mm",
    },
    portfolioLink: "http://meinportfolio.com",
  },
  {
    name: "Weronika",
    contacts: [
      {
        type: "Facebook",
        link: "",
      },
      {
        type: "Twitter",
        link: "",
      },
      {
        type: "Viber",
        link: "",
      },
      {
        type: "TikTok",
        link: "",
      },
      {
        type: "Snapchat",
        link: "",
      },
    ],
    status: "source community developer",
    github: {
      title: "",
      link: "https://github.com/Putinica",
    },
    portfolioLink: "",
  },
];
