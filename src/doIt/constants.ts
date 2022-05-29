interface IPossibleServices {
  label: string,
  code: string,
  disabled: boolean,
  justRequest: boolean,
}

const possibleServices: IPossibleServices[] = [
  {
    label: 'Abrir Spotify',
    code: 'openSpotify',
    disabled: false,
    justRequest: false,
  },
  {
    label: 'Abrir o Visual Studio',
    code: 'openVisual',
    disabled: true,
    justRequest: false,
  },
  {
    label: 'Pesquisar no google',
    code: 'searchGoogle',
    disabled: true,
    justRequest: false,
  },
  {
    label: 'Abrir o Youtube',
    code: 'openYoutube',
    disabled: true,
    justRequest: false,
  }
]

const optionsServices = {
  spotify: [
    {
      label: 'Procurar uma musica',
      code: 'search'
    },
    {
      label: 'Abrir na home',
      code: 'home'
    }
  ]
}


export {
  possibleServices,
  optionsServices
}