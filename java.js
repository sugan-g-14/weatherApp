const axios = require('axios')


const getData = async() =>{
    try{
        const data = await axios.get("http://127.0.0.1:5000/");
        console.log(data.data);
    }
    catch(err){
        console.log(err);
    }
}


getData();