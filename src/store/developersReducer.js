const initialState = [
  {
    createdAt: "2019-11-28T11:30:12.543Z",
    email: "rein@rein.co.uk",
    github_username: null,
    id: 71,
    intro: null,
    name: "Rein",
    technologies: [],
    website: null
  },
  {
    createdAt: "2019-11-28T13:35:36.372Z",
    email: "chahi@codaisseur.com",
    github_username: null,
    id: 74,
    intro: null,
    name: "Chahi",
    technologies: [],
    website: null
  },
  {
    createdAt: "2019-11-28T13:48:47.591Z",
    email: "qwerty@mail.ru",
    github_username: null,
    id: 75,
    intro: null,
    name: "Ksenia the second",
    technologies: [],
    website: null
  },
  {
    createdAt: "2019-11-28T14:13:13.312Z",
    email: "xiatian1@mail.ru",
    github_username: null,
    id: 76,
    intro: null,
    name: "Ksenia Gulyaeva",
    technologies: [],
    website: null
  }
];
export default function developersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_DEVELOPERS":
      return action.payload;
    default:
      return state;
  }
}
