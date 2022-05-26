// import fetch
//const fetch = require('node-fetch');
const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

// implement fetch
//const response = await fetch(url, { //params })
const input = require('./data/input')
const express = require('express')

let url = 'http://localhost:3001/users';

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    
    return response.json(); // parses JSON response into native JavaScript objects
    
  }
 

  postData(url, { answer: 42 })
    .then(data => {
  
      console.log(data); // JSON data parsed by `data.json()` call
    });



var bodyParser = require('body-parser')


const app = express()
//const PORT = 3000
//app.listen(PORT, () => console.log('listening att http:/localhost:${PORT}'))
app.use(express.static('public'));
app.use(bodyParser.json());

//change name to "*"; name length = number of characters
let out_name = input.name.length;
let out_name_stars = "*".repeat(out_name)

//change username to "*"; username length = number of characters
let out_username = input.username.length;
let out_username_stars = "*".repeat(out_username)


//change first part email to "*"; name email length = number of characters
let out_email = input.email;
let from = out_email.search("@");
let email_stars = "*".repeat(from);
let after = out_email.slice(from)
let out_email_stars = email_stars + after;
 //change objects in array "friends" 
const obj  = JSON.parse(JSON.stringify(input))
obj.friends = obj.friends.map(el=> ({...el, username: '*'.repeat(el.username.length)}))
const output= JSON.stringify(obj.friends)




const player ={
    id: input.id,
    name: out_name_stars,
    username: out_username_stars,
    email: out_email_stars,
    age: input.age,
    power: input.power,
    friends: output

}


const fs = require('fs');
const { response } = require('express');

const saveData = (player) =>{
    const finished = (error) => {
        if(error){
            console.error(error)
            return;
        }
    }
   const jsonData =  JSON.stringify(player, null, 2)
   fs.writeFile('output.json', jsonData, finished)
   console.log(player);
   console.log(jsonData)
}
saveData(player) 

