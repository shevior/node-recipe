// const { LocalStorage } = require("node-localstorage");
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const bay = [
    {
        "Id": 1,
        "Name": "אבקת אפיה",
        "UserId": 1,
        "Count": 2

    },
    {
        "Id": 2,
        "Name": "שוקולד מריר",
        "UserId": 1,
        "Count": 2

    },
    {
        "Id": 3,
        "Name": "סוכר",
        "UserId": 1,
        "Count": 5

    },
    {
        "Id": 4,
        "Name": "קמח",
        "UserId": 2,
        "Count": 8

    },

]
localStorage.setItem('bay',JSON.stringify(bay));

module.exports = bay;