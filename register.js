import fs from 'fs';

const baseUrl = 'http://localhost:3000';

if(process.argv.length<5){
    throw new Error("please enter the email,password and role")
}
else{
    const email = process.argv[2];
    const password = process.argv[3];
    const role = process.argv[4];

    // Read the contents of db.json
    const dbContents = fs.readFileSync('db.json', 'utf8');

    // Parse the JSON content into an object
    const dbData = JSON.parse(dbContents);

    // Check if the user with the provided email already exists
    const existingUser = dbData.users.find(user => user.email === email);

    if (existingUser) {
        console.log("User already exists!");
    }
    else{
        const res = await fetch(`${baseUrl}/register`,{
            method:'POST',
            body:JSON.stringify({"email":email,"password":password,"roles":[role]}),
            headers:{
                'content-type':'application/json'
            }
        })
        if(res.status!==201){
            console.log("User is not registered")
        }
        else{
            console.log("New User registered")
        }
    }
}