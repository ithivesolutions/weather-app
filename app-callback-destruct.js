const ggeocodejs = require('./utils/get-geocode-destruct')
const gforecastjs = require('./utils/get-forecast-destruct')

const address = 'Melbourne'

ggeocodejs.geocode(address, (error, { latitude, longtitude }) => {
    if (!error) {
        console.log('GeoCode Details: ', latitude, longtitude);
        gforecastjs.forecastdtl(latitude, longtitude, (error, { Temperature, Preciption }) => {
            if (!error) {
                console.log('Temperature of the day: ', Temperature);
                console.log('Chance of rain: ', Preciption);
            } else {
                console.log('Error-weatcode-msg: ', error);
            }
        })
    } else {
        console.log('Error-geocode-msg: ', error);
    }
})