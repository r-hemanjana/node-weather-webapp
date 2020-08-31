

console.log('client side javascript loaded!')

// //fetch api not part of js, it is browser based api, means we can use it in browser but accessible in node
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



//integrate client side js with html
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#msg_1')
const messagetwo = document.querySelector('#msg_2')
 

//we use event listner 
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault() //to prevent from default setting of form i.e the moment we click submit testing shows up but form reloads itselfs immediately.
    const location = search.value
    messageone.textContent = 'loading...'
    messageone.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            messageone.textContent = data.error
        }else{
           
            messagetwo.textContent = data.location
            messageone.textContent = data.forecast
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
    console.log(location)
})