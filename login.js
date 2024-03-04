import fs from 'fs';

const baseUrl = 'http://localhost:4000/login'
const email = process.argv[2]
const password = process.argv[3]
const existUser = await fetch(`${baseUrl}/login`,{
    method:'POST',
    body:JSON.stringify({"email":email,"password":password}),
    headers:{
        'content-type':'application/json'
    }
})
if(existUser.status===200){
    console.log("Login Successful")
}
else{
    console.log("Incorrect Credentials")
}