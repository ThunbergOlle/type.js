let type = '';
let logs = true;
let mode = 'fixed';
module.exports = (value) => {
  if(typeof(value) === type){
    return value;
  }
  else if (type === 'string'){
    if(typeof(value) === 'number'){
      if(value < Number.MAX_SAFE_INTEGER && mode === 'fixed') {
        if(logs === true){
          console.log('Number is not a string value but can be converted without issues with "'+ value+'.toString();"')
        }
        return value.toString();
      }
      else if (mode !== 'fixed'){
        if(logs === true){
          console.log('The value you requested is not a string value but setting the mode to fixed may make it work if the value is less than: ' + Number.MAX_SAFE_INTEGER);
        }
      }
      else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
  else if(type === 'number'){
      if(typeof(value) === 'string'){
        if(parseInt(value) < Number.MAX_SAFE_INTEGER && mode === 'fixed'){
          if(logs === true)
          console.log('String is not a number but can be converted without issues with "parseInt('+ value +')"')
          return parseInt(value);
        }
        else if (mode !== 'fixed'){
          if(logs === true)
          console.log('The value you requested is not a string value but setting the mode to fixed may make it work if the value is less than: ' + Number.MAX_SAFE_INTEGER);
        }
        else {
          return undefined;
        }
      } else {
        return undefined;
      }
  }
}
module.exports.settings = (data) => {
  type = data.type;
  if(data.mode !== undefined){
    mode = data.mode;
  }
  if(data.logs !== undefined){
    logs = data.logs;
  }
}
