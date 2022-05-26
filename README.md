git clone https://github.com/annabnn812/test_api2.git

cd test_api2

npm install

//TO start the unit test API server which is listening on port 3001

npm start &

//You can confirm the server is working by opening a browser and entering this URL - http://locahost:3001/users

//Now Start server.js

node .\server.js

after this command , the output.json file will be automatically created


========================================================================================
RESULT
=========================================================================================
INPUT:

{

  id: 123,
  
  name: 'Elsa',
  
  username: 'iugkio18',
  
  email: 'elsa@gmail.com',
  
  power: 'ice ray',
  
  friends: [
  
    { id: 234, username: 'Magic213' },
    
    { id: 456, username: 'call_me_anna' },
    
    { id: 222, username: 'Trololo' },
    
    { id: 8846, username: 'Just_Alice' }
    
  ]
  
}

OUTPUT:

{

  "id": 123,
  
  "name": "****",
  
  "username": "********",
  
  "email": "****@gmail.com",
  
  "age": 21,
  
  "power": "ice ray",
  
  "friends": "[{\"id\":234,\"username\":\"********\"},{\"id\":456,\"username\":\"************\"},{\"id\":222,\"username\":\"*******\"},{\"id\":8846,\"username\":\"**********\"}]"
  
}
