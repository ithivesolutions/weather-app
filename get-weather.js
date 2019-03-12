const request = require('request')

const weatherdtl = (lat, log, callback) => {
    const url = `https://api.darksky.net/forecast/58a27f2eedc77d1fc47f66b7ebd0fed0/${lat},${log}?units=si`

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('The weather service is not available', undefined);
        } else if (response.body.error) {
            callback('Unable to get the weather for the location', undefined);
        } else {
            callback(undefined, {
                Temperature: response.body.currently.temperature,
                Preciption: response.body.currently.precipProbability
            })
        }
    })
}

module.exports = {
    weatherdtl: weatherdtl
}
