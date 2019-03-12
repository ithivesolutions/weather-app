const request = require('request')

const geocode = (address, callback) => {

    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2l2YWlzaCIsImEiOiJjanQ1NGZoOGkwMXp2NDNwamJkcXFpcHZoIn0.CJexqslaiLCuYvQUL2gGuA`

    request({ url: geocodeURL, json: true }, (error, gresponse) => {

        if (error) {
            callback('Unable to connect to location services!', undefined )
        } else if (gresponse.body.features.length === 0) {
            callback('Unable to locate the location - Try another location', undefined)
        }
        else {
            callback(undefined, {
                latitude: gresponse.body.features[0].center[1],
                longtitude: gresponse.body.features[0].center[0],
                location: gresponse.body.features[0].place_name
            })
        }

    })
}

module.exports = {
    geocode: geocode
}