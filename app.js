const request = require('request')

const geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/melbourne.json?access_token=pk.eyJ1Ijoic2l2YWlzaCIsImEiOiJjanQ1NGZoOGkwMXp2NDNwamJkcXFpcHZoIn0.CJexqslaiLCuYvQUL2gGuA'


request({ url: geocode, json: true }, (error, gresponse) => {

    if (error) {
        console.log("The geocode service is not availabe")
    } else if (gresponse.body.features.length === 0) {
        console.log("Unable to locate the location - Try another location")
    }
    else {
        console.log(`Melbourne's Longitude = ${gresponse.body.features[0].center[0]} and its Latitude is = ${gresponse.body.features[0].center[1]}`)
    }

    const url = `https://api.darksky.net/forecast/58a27f2eedc77d1fc47f66b7ebd0fed0/${gresponse.body.features[0].center[1]},${gresponse.body.features[0].center[0]}?units=si`

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            console.log("The weather service is not available");
        } else if (response.body.error) {
            console.log("Unable to get the weather for the location");
        } else {
            console.log(`There is currently ${response.body.currently.temperature} degree out. There is a ${response.body.currently.precipProbability}% chance of rain`);
        }
    })

})
