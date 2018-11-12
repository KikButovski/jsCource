var tools = (function(){
    return{
       
        checkUndefined: function (a) {
            return a === undefined;
        },
 
        checkNull: function (a) {
            return a === null;
        },

        checkNaN: function (a) {
            return isNaN(a);
        },

        checkEmptyObject: function (obj) {
            for (var key in obj) {
              return false;
            }
            return true;
          },

        mapObject: function(obj, func) {
            var result = {};

            for (var key in obj) {
                result[key] = func(obj[key]);
            }

            return result;
        },

        randomize: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        comparison: function (a, b) {
            if(Object.keys(a).length !== Object.keys(b).length) {
                return false;
            } else {
                var result;
                for(var key in a) {
        
                    if(typeof(a[key]) == 'object') {
                        result = this.qwe(a[key], b[key]);
                    } else {
                        result = (a[key] === b[key]);
                    }
        
                    if(!result) {
                        return false;
                    }
                }
                return result;
            }
        },

        deleteProperty: function (obj, func) {
            var result = {};
            for (var key in obj){
                if (func(obj[key])){
                    result[key] = obj[key];
                }
            }
            return result;    
        }

    }
})();

