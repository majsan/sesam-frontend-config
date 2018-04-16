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
      'family': {
        label: {
          'swe': 'Familj',
          'eng': '-'
        },
        search: 'genus',
        column: 5
      },
      'genus': {
        label: {
          'swe': 'Släkte',
          'eng': '-'
        },
        search: 'genus',
        column: 6
      },
      'cultivar': {
        label: {
          'swe': 'Sortnamn',
          'eng': '-'
        },
        search: 'cultivar',
        column: 7
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
          'swe': 'Årighet',
          'eng': '-'
        },
        search: 'age',
        column: 8
      },
      'mnr': {
        label: {
          'swe': 'Medlemsnummer',
          'eng': '-'
        },
        search: 'mnr',
        column: 9
      }
    }
  }
});
