const Car = require('./car');

Car.methods(['get', 'post', 'put', 'delete']);
Car.updateOptions({ new: true, runValidators: true });

module.exports = Car;
