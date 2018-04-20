window.lexicons.push({
  id: 'sesamfroer',
  name: {
    'all': 'Sesam frökatalog'
  },
  tabs: ["Frö", "Medlem"],
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
        tab: 0,
        main: true
      },
      'description': {
        label: {
          'swe': 'Beskrivning',
          'eng': '-'
        },
        search: 'description',
        column: 7,
        tab: 0
      },
      'latin': {
        label: {
          'swe': 'Latin',
          'eng': '-'
        },
        search: 'latin',
        column: 4,
        tab: 0
      },
      'family': {
        label: {
          'swe': 'Familj',
          'eng': '-'
        },
        search: 'genus',
        column: 5,
        tab: 0
      },
      'genus': {
        label: {
          'swe': 'Släkte',
          'eng': '-'
        },
        search: 'genus',
        column: 6,
        tab: 0
      },
      'cultivar': {
        label: {
          'swe': 'Sortnamn',
          'eng': '-'
        },
        search: 'cultivar',
        column: 7,
        tab: 0
      },
      'zone': {
        label: {
          'swe': 'Zon',
          'eng': '-'
        },
        search: 'zon',
        column: 3,
        tab: 0
      },
      'age': {
        label: {
          'swe': 'Årighet',
          'eng': '-'
        },
        search: 'age',
        column: 8,
        tab: 0
      },
      'mnr': {
        label: {
          'swe': 'Medlemsnummer',
          'eng': '-'
        },
        search: 'mnr',
        column: 9,
        tab: 1
      }
    }
  }
});
