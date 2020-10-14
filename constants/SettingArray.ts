const settingArray = [
  {
    keyID: 1,
    viewName: 'FUNKSJONER',
    viewArray: [
      {
        id: 1,
        name: 'Spillelement',
        desc: 'Aktiver konkurranse og nivåer',
        useOfToggle: true,
      },
      {
        id: 2,
        name: 'Sensitivitet',
        desc: 'Aktiver dersom du tilhører risikogrupper',
        useOfToggle: true,
      },
    ],
  },
  {
    keyID: 2,
    viewName: 'NOTIFIKASJONER',
    viewArray: [
      {
        id: 1,
        name: 'Område',
        desc: 'Velg områder du ønsker å motta varslinger for',
        useOfToggle: false,
      },
      {
        id: 2,
        name: 'Smarte notifikasjoner',
        desc: 'Aktiver notifikasjoner som er tilpasset dine behov',
        useOfToggle: true,
      },
    ],
  },
  {
    keyID: 3,
    viewName: 'HJELP',
    viewArray: [
      {
        id: 1,
        name: 'Ofte stilte spørsmål',
        desc: '',
        useOfToggle: false,
      },
      {
        id: 2,
        name: 'Personvern',
        desc: '',
        useOfToggle: false,
      },
    ],
  },
];

export default settingArray;
