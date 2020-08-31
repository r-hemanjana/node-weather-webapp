const request = require('request')

//now geocode with callback starts ....... where both request are going communicate.
const geocode = (address, callback)=>{ //encodeURLComponent will encode the special character. eg - ? becomes %3F , space becomes %
    
    const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiaGVtYW5qYW5hIiwiYSI6ImNrNm93eGplMjAzbm8zbG56ZjloZWFpN2cifQ.hWY-jy69xbs6GFUMDglFyw&limit=1"   
   //error will generate at the lower level like internet unconnectivity & sometime if you dont provide correct parameters like not given latitude, then we get response & inside response we get error
   //with like status 404...
    request({url:url, json:true},(error, {body})=>{ //2 para of rquest() - 1.options- where we give url,2.callback funct
        if(error){ 
            callback('Unable to connect location services') // data will go undefined if we dont provide any 2nd argument.
        }
        else if(body.features.length === 0){
            callback('Unable to find loaction.Type another search')
        }else{
            callback(undefined,{
                longitude:body.features[0].center[0], 
                latitude:body.features[0].center[1], 
                location:body.features[0].place_name
            })
        }
        
    })
}

module.exports = geocode