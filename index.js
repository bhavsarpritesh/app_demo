function func1() {
    return new Promise(function (resolve, reject) {
        const username = "root";
        const password = "root";
        setTimeout(() => {
            const error = true;
            if (username == password) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Access denied');
            }
        }, 2000);
    })
}

func1().then(function () {
    console.log("Harry: Thanks for resolving");
}).catch(function (error) {
    console.log("Sorry please try again later " + error);
})


function mypassword(){
    return new Promise( function(resolve,reject){

        const a = 20,b = 10;
    
     if(a>=b){
        console.log("A is greater than B");
        resolve();
     }
     else{
        console.log("B is greater");
        reject();
     }

    })
        
    }

    mypassword().then(function(){
        console.log("condition is resolved");
    }).catch(function(error){
        console.log("condition is rejected"+error);
    })







