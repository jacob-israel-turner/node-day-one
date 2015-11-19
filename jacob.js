var agenda = require('./agenda.js');
// import agenda from './agenda.js'; // ES6

var getSomeData = function(cb){
  hitDatabase()
    .then(function(data){
      cb(data);
    })
}

module.exports = {
  name: 'Jacob Turner',
  age: 22,
  socialMedia: {
    twitter: 'jisraelturner',
    linkedin: 'https://www.linkedin.com/in/jacob-turner-620572a1',
    github: 'jacob-israel-turner'
  },
  getData: getSomeData,
  agenda: agenda
}
