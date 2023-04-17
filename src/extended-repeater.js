const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  if(options!==undefined)
  {
    const string=String(str);
    let repeatedString = '';
    let repTimes,addRepTimes,sep,add,addSep;
    if(options.addition !== undefined )
    {
       add=String(options.addition);
    }
    else { add='';}
    if(options.repeatTimes !== undefined )
    {
       repTimes=options.repeatTimes;
    }
    else repTimes=1;
    if(options.additionRepeatTimes !== undefined )
    {
       addRepTimes=options.additionRepeatTimes;
    }
    else addRepTimes=1;
    if(options.separator !== undefined )
    {
       sep=options.separator;
    }
    else {sep='+';}
    
    if(options.additionSeparator !== undefined )
    {
       addSep=options.additionSeparator;
    }
    else { addSep='|';}
    for (let i = 0; i < repTimes; i++) 
    {
      repeatedString += string;
      for (let j = 0; j < addRepTimes; j++) 
      {
        repeatedString += add;
        
        if (j != addRepTimes - 1) 
        {
          repeatedString += addSep;
        }
      }  
      if (i != repTimes - 1) 
      {
        repeatedString += sep;
      }
    }
    
    return repeatedString;
  }
  else return string;
  
}

module.exports = {
  repeater
};
