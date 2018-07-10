# node-typeof
A module for better typeof with Javascript (Nodejs)

#### Install
```js
npm i node-typeof --save
```

#### Import
```js
const type = require('node-typeof');

type.settings({
  type: 'number', //Set it to whatever value you want to check.
  mode: 'fixed', //Fixed = If the value is less than the max value in javascript it's still going to return the value instead of undefined, Normal = It will not change anything and will simply return undefined even though the value could be fixed
  logs: false //This is if it should log errors or warning. We recommend to have this set to true when developing and false when finished projects or modules.
});
```
### More about the settings.
- type: The type that you want to check it for. This should be set as a string value.
- mode: There are generally 2 modes. The mode called 'fixed' will not return undefined because the value is not harmfull (With harmfull we mean that it's higher than javascripts max number length). The other mode is called 'normal' and will simply return undefined if the value is not the same as the type declared.
- logs: This could be either true or false. If true the module will log all the warnings and errors from the module and your input. **This is strongly recommended set to true when developing and can later be changed to false on release or when publishing a module ect.**
---
### Examples in JS format
```js
// YOU NEED TO TAKE A CLOSER LOOK TO THE SETTINGS
type.settings({
  type: 'string',
  mode: 'not',
  logs: false
});

if (type('This is defently a string')){
  console.log('This is a string');
}
```
**Output**
```
This is a string
```
---
```js
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
```
**Output**
```
This is not a string
```
