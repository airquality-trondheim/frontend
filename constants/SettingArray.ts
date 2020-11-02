const settingArray = [
  {
    keyID: 1,
    viewName: 'FUNKSJONER',
    viewArray: [
      {
        id: 1,
        name: 'Om oss',
        desc: 'Her kan du lese om oss og våre samarbeidspartnere',
        useOfToggle: false,
        navigateTo: 'SettingsAbout',
      },
    ],
  },
  {
    keyID: 2,
    viewName: 'NOTIFIKASJONER',
    viewArray: [
      {
        id: 1,
        name: 'Sensitivitet',
        desc:
          'Aktiver dersom du tilhører risikogrupper og ønsker å motta notifikasjoner om luftkvaliteten',
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
        desc:
          'Her kan du se svar på ofte stilte spørsmål om luftkvalitet og bruken av Frisk',
        useOfToggle: false,
        navigateTo: 'SettingsHelp',
      },
      {
        id: 2,
        name: 'Personvern',
        desc:
          'Her kan du se hvordan Frisk forholder seg til personvern og sikkerhet',
        useOfToggle: false,
        navigateTo: 'SettingsPrivacy',
      },
    ],
  },
];

export default settingArray;
