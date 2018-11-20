function debounce (func, time) {
    
    var timer = null; 
    
    return function (...args) {
        var onComplete = () => {
        func.apply(this, args);
        timer = null;
        }
  
        if (timer) {
        clearTimeout(timer);
        }
  
        timer = setTimeout(onComplete, time);
    };    
}
  
function promiseSetTimeout(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
}

function promiseXMLHR (metod, url, body) {
    return new Promise(function (resolve, reject){
        
        var x = new XMLHttpRequest();
        x.open = (metod, url, true);
        x.send = (body);
        
        x.onload = function () {
            
            if (this.status == 200) {
                resolve(this.response);                
                } else {                    
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);               
                }   
        }
    })
}


function request(url) {
    return new Promise((res, rej) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;
        setTimeout(() => res(url), delayTime);
    });
}

function performRequests(urlList) {
    return new Promise((resolve, reject) => {
        var colection = urlList.map(request);
        var arr = [];
       
        colection.forEach(element => {
    
            element.then(result => {
                arr.push(result);

                if (arr.length == colection.length) {
                    resolve(arr);
                }

            }, reject);
        });
    });
}
