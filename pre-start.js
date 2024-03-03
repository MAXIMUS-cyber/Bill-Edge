import fs from 'fs';
import path from 'path';

const dataPath = path.join('db.json')
if(!(fs.existsSync(dataPath))){
    const initialData  = {
        user:[]
    }
    fs.writeFileSync(dataPath,JSON.stringify(initialData,null,2));
    console.log('Created db.json.');
}
else{
    console.log("db.json already exists")
}