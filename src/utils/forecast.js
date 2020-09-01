const request = require('request')

const forecast = (latitude, longitude, callback)=>{ 
    const url ='https://api.darksky.net/forecast/351bda6ff74746809169c452b99b9576/'+latitude+','+longitude
 
    request({url, json:true},(error, {body})=>{ //destructuring, instead of url:url , we can use url, we are using response.body , so instead of response we destructure it to body only
           if(error){
                callback('Unable to connect location services')
           }else if(body.error){
                callback('Unable to find location.Type another search')
           }else{
            
            callback(undefined,
                body.daily.data[0].summary+". It is currently " +body.currently.temperature+" degrees out. There is " + body.currently.precipProbability +" chance of rain"
                +" .The humidity is "+body.currently.humidity+"%.")
           }
            
    }) 
}

module.exports = forecast