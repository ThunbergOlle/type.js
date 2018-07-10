const type = require('./index.js');
// We strongly recommend chaning logs to false if you are planning to use this inside other modules
// YOU NEED TO TAKE A CLOSER LOOK TO THE SETTINGS
type.settings({
  type: 'string',
  mode: 'not',
  logs: false
});

if (type(213123)){
  console.log('This is a string');
} else {
  console.log('This is not a string')
}
