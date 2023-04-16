const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(direction=true) {
    this.direction = direction;
  }
 

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let code = '';
    for (let i = 0, j = 0; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i]) === -1) {
        code += str[i];
        continue;
      }
      code += this.alphabet.charAt((this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(key.charAt(j % key.length)) + 26) % 26);
      j++;
    }
    return this.direction ? code : code.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let decode = '';
    for (let i = 0, j = 0; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i]) === -1) {
        decode += str[i];
        continue;
      }
      decode += this.alphabet.charAt((this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(key.charAt(j % key.length)) + 26) % 26);
      j++;
    }
    return this.direction ? decode : decode.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
