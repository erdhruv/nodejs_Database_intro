const dboperations = require('./dboperations');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    console.log("Button Clicked");
    console.log("App.js working");
    dboperations.getOrders().then(result => {
        console.log(result);
    })

});
