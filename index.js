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
    console.log("Harry: Thanks for resolving")
}).catch(function (error) {
    console.log("Sorry please try again later " + error)
})
