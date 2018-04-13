window.lexicons.push({
  id: 'sesamfroer',
  name: {
    'all': 'Sesam frökatalog'
  },
  view: 'COLUMNS',
  structure: {
    table: 1,
    label: {
      'swe': 'Fröer',
      'eng': 'Seeds'
    },
    noRow: true,
    properties: {
      'species': {
        label: {
          'swe': 'Art',
          'eng': '-'
        },
        search: 'species',
        column: 1,
        main: true
      },
      'description': {
        label: {
          'swe': 'Beskrivning',
          'eng': '-'
        },
        search: 'description',
        column: 7
      },
      'latin': {
        label: {
          'swe': 'Latin',
          'eng': '-'
        },
        search: 'latin',
        column: 4
      },
      'genus': {
        label: {
          'swe': 'Genus',
          'eng': '-'
        },
        search: 'genus',
        column: 5
      },
      'cultivar': {
        label: {
          'swe': 'Kultivar',
          'eng': '-'
        },
        search: 'cultivar',
        column: 6
      },
      'anything': {
        label: {
          'swe': 'Fritext',
          'eng': '-'
        },
        search: 'anything',
        column: 2
      },
      'sun': {
        label: {
          'swe': 'sol',
          'eng': '-'
        },
        search: 'sun',
        column: 2
      },
      'zone': {
        label: {
          'swe': 'Zon',
          'eng': '-'
        },
        search: 'zon',
        column: 3
      },
      'age': {
        label: {
          'swe': 'Ålder',
          'eng': '-'
        },
        search: 'age',
        column: 7
      },
      'mnr': {
        label: {
          'swe': 'Medlemsnummer',
          'eng': '-'
        },
        search: 'mnr',
        column: 7
      }
    }
  }
});