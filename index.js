const QRCode = require('qrcode');
let data = {
    name: "Miretu Jaleta",
    age: 24,
    department: "Software Engineering ",
    id: "RU 1414 12"
};
let stringData = JSON.stringify(data);
QRCode.toString(stringData, { type: 'terminal' }, function (err, url) {
    if (err) return console.log("Error occurred");
    console.log(url);
});

// To get the base64 URL (useful for deployment):
 
// QRCode.toDataURL(stringData, function (err, url) {
//     if (err) return console.log("Error occurred");
//     console.log(url);
// });
