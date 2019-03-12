const ggeocodejs = require('./get-geocode')
const gweatherjs = require('./get-weather')

const address = 'Melbourne'

ggeocodejs.geocode(address, (error, geodata) => {
    if (!error) {
        console.log('GeoCode Details: ',geodata );
        gweatherjs.weatherdtl(geodata.latitude, geodata.longtitude, (error, weadata) => {
            if (!error){
                console.log('Weather Report: ', weadata);
            } else{
                console.log('Error-weatcode-msg: ', error);
            }
        })
    } else {
        console.log('Error-geocode-msg: ', error);
    }
})