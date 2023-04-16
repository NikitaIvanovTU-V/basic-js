const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length;
  },
  addLink(val) {
    this.chain.push("( "+val+" )");
    return this;
  },
  removeLink(pos) {
    if(Number.isInteger(pos) && pos>0 && pos<=this.chain.length)
    {
      this.chain.splice(pos-1,1);
      return this;
    }
    else{
      this.chain=[];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
   let finishedChain=this.chain.shift();
   while(this.chain.length>0)
   {
    finishedChain+="~~"+this.chain.shift();
   }
   return finishedChain;
   }
};

module.exports = {
  chainMaker
};
