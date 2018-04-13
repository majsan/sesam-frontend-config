window.lexicons.push({
  id: 'sesammembers',
  name: {
    'all': 'Sesam medlemsregister'
  },
  view: 'COLUMNS',
  structure: {
    table: 1,
    label: {
      'swe': 'Medlem',
      'eng': 'Member'
    },
    noRow: true,
    properties: {
      'mnr': {
        label: {
          'swe': 'Medlemsnummer',
          'eng': '-'
        },
        search: 'mnr',
        column: 1,
        main: true
      },
      'name': {
        label: {
          'swe': 'Namn',
          'eng': '-'
        },
        properties: {
          "name": {
            search: 'name.fullname',
            label: {
              'swe': 'Fullständigt namn',
              'eng': '-'
            }
          },
          "firstname": {
            label: {
              'swe': 'Förnamn',
              'eng': '-'
            },
            search: 'name.firstname',
            column: 2
          },
          "lastname": {
            label: {
              'swe': 'Efternamn',
              'eng': '-'
            },
            search: 'name.lastname',
            column: 3
          }
        }
      },
      'paid': {
        label: {
          'swe': 'Betalat',
          'eng': '-'
        },
        search: 'paid',
        column: 4
      },
      'familymember': {
        properties: {
          'name': {
            label: {
              'swe': 'Familjemedlem, namn',
              'eng': '-'
            },
            column: 5
          },
          'paid': {
            label: {
              'swe': 'Familjemedlem, betalat',
              'eng': '-'
            },
            column: 6
          }
        }
      },
      'adress': {
        properties: {
          'co': {
            label: {
              'swe': 'Adress, co',
              'eng': '-'
            },
            column: 7
          },
          'line1': {
            label: {
              'swe': 'Adress, rad 1',
              'eng': '-'
            },
            column: 8
          },
          'line2': {
            label: {
              'swe': 'Adress, rad 2',
              'eng': '-'
            },
            column: 9
          },
          'zipcode': {
            label: {
              'swe': 'Adress, postnummer',
              'eng': '-'
            },
            column: 10
          },
          'city': {
            label: {
              'swe': 'Adress, stad',
              'eng': '-'
            },
            column: 11
          },
          'country': {
            label: {
              'swe': 'Adress, land',
              'eng': '-'
            },
            column: 12
          },
          'email': {
            label: {
              'swe': 'E-post',
              'eng': '-'
            },
            column: 13
          },
          'telephone': {
            label: {
              'swe': 'Telefonnummer',
              'eng': '-'
            },
            column: 14
          }
        }
      },
      'gesall': {
        label: {
          'swe': 'Gesäll',
          'eng': '-'
        },
        column: 15
      },
      'alderman': {
        label: {
          'swe': 'Ålderman',
          'eng': '-'
        },
        column: 16
      },
      'otherinfo': {
        label: {
          'swe': 'Övrig info',
          'eng': '-'
        },
        column: 17
      }
    }
  }
});
