const axios = require('axios')
const token = '';
axios.post(
    'http://localhost:4000/api/rest/constituency', {
        name: 'Manchester'
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
).then((req,res)=>{
    console.log("success")
}).catch((err)=>{
      console.log(err.data)
});

axios.post(
    'http://localhost:4000/api/rest/constituency', {
        name: 'london'
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
).then((req,res)=>{
    console.log("success")
}).catch((err)=>{
      console.log(err.data)
});

axios.post(
    'http://localhost:4000/api/rest/constituency', {
        name: 'sheffield'
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
).then((req,res)=>{
    console.log("success")
}).catch((err)=>{
      console.log(err.data)
});
axios.post(
    'http://localhost:4000/api/rest/constituency', {
        name: 'leeds'
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
).then((req,res)=>{
    console.log("success")
}).catch((err)=>{
      console.log(err.data)
});