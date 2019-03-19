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
    axios.post(
        'http://localhost:4000/api/rest/parties', {
            name: "liberal democrats",
            link: "https://www.libdems.org.uk/",
            manifesto: "The Britain we want requires a successful, sustainable and balanced economy to create jobs and opportunities for everyone who is willing to play their part, and to generate the revenue needed to fund public services.But the Conservatives have consistently put their own short-term priorities above long-term prosperity. They have neglected action to improve Britains poor levels of productivity and failed to stimulate innovation in industry. They have done nothing to redress the countrys profound regional and structural economic imbalances"
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    ).then((req,res)=>{
        console.log("success")
        axios.post(
            'http://localhost:4000/api/rest/candidates', {
                firstName: "bat",
                lastName: "man",
                constituency: 1,
                party: 1,
                numOfVotes: 0,
                isElected: false
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
    }).catch((err)=>{
          console.log(err.data)
    });
}).catch((err)=>{
      console.log(err.data)
});


//------------SECOND---------------------

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
    axios.post(
        'http://localhost:4000/api/rest/parties', {
            name: "Conservative and Unionist Party",
            link: "https://www.conservatives.com/",
            manifesto: "Our NHS Long Term Plan: protecting the health service now and for generations to come Thanks to our investment of £20.5 billion a year in real terms by 2023-24 the plan will transform patient care and make sure every penny of taxpayers’ money is spent wisely."
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    ).then((req,res)=>{
        console.log("success")
        axios.post(
            'http://localhost:4000/api/rest/candidates', {
                firstName: "supeer",
                lastName: "man",
                constituency: 2,
                party: 2,
                numOfVotes: 0,
                isElected: false
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
    }).catch((err)=>{
          console.log(err.data)
    });
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







