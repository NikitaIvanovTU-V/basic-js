const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if((typeof sampleActivity)!="string" || arguments.length==0)
  return false;
  if(sampleActivity.length==0 || parseFloat(sampleActivity,10)==NaN || sampleActivity.search(/[^0-9^\.]/)!=-1 || parseFloat(sampleActivity,10)>MODERN_ACTIVITY || parseFloat(sampleActivity,10)<=0 )
    return false;
  return Math.abs(Math.ceil(Math.log(parseInt(MODERN_ACTIVITY,10)/sampleActivity)/(0.693/HALF_LIFE_PERIOD)));

}

module.exports = {
  dateSample
};
