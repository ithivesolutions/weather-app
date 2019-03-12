const ggeocodejs = require('./get-geocode')
const gweatherjs = require('./get-weather')

const address = 'Melbourne'

ggeocodejs.geocode(address, (error, {latitude, longtitude}) => {
    if (!error) {
        console.log('GeoCode Details: ', latitude, longtitude);
        gweatherjs.weatherdtl(latitude, longtitude, (error, weadata) => {
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