'use strict';
module.exports = function() {

  const vault = (function() {
    let key;
    let value;
    return {
      getValue : function(k){
        if(k === undefined) {
          return null;
        }
      },
      setValue : function(k, v){}
    };
  })();

  return vault;
};