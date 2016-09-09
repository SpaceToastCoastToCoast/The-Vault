'use strict';
module.exports = function() {

  const vault = (function() {
    let key;
    let value;
    return {
      getValue : function(k){
        if(k === undefined) {
          return null;
        } else if (k === key) {
          return value;
        }
        return null;
      },
      setValue : function(k, v){

      }
    };
  })();

  return vault;
};