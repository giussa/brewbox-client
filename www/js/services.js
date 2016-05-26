angular.module('brewbox.services', [])
.factory('myPolls', function(){
  var getPolls = function(){
    var polls = [{
      'id': 1,
      'question': 'Dove mangiamo stasera?',
      'date': '20 giugno 2016',
      'user': {
        'firstname': 'Daniele',
        'lastname': 'Scotti'
      },
      'options': [{
        'id': 1,
        'label': 'Bistecchina',
        'value': 'bist'
      },{
        'id': 2,
        'label': 'Pizzeria',
        'value': 'pizza'
      },{
        'id': 3,
        'label': 'Picnic',
        'value': 'pinic'
      }]
    },{
      'id': 2,
      'question': 'Dove andiamo in vacanza?',
      'date': '10 maggio 2016',
      'user': {
        'firstname': 'Daniele',
        'lastname': 'Giusani'
      },
      'options': [{
        'id': 10,
        'label': 'Sardegna',
        'value': 'sardegna'
      },{
        'id': 11,
        'label': 'Brazzuoli (CR)',
        'value': 'brazzuoli'
      },{
        'id': 12,
        'label': 'Caniccatì',
        'value': 'CA'
      }]
    }];

    return polls;
  }

  return {
    getPolls: getPolls
  }
})
;
