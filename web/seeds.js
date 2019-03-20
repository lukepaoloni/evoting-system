const axios = require('axios')
var faker = require('faker');
const token = '';
//console.log(faker.address.country())
axios.post(
    'http://localhost:4000/api/rest/constituency', {
        name: faker.address.county()
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
).then((req,res)=>{
    console.log("success")
    axios.post(
        'http://localhost:4000/api/rest/parties', {
            name: faker.company.companyName(),
            link: "https://www.libdems.org.uk/",
            manifesto: faker.lorem.paragraph()
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    ).then((req,res)=>{
        console.log("success")
        getCandidate(1,1)
        getCandidate(1,1)
        getCandidate(1,1)
        getCandidate(1,1)
        getUser(1)
        
    })
})

//------------SECOND---------------------

axios.post(
    'http://localhost:4000/api/rest/constituency', {
        name: faker.address.county()
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
).then((req,res)=>{
    console.log("success")
    axios.post(
        'http://localhost:4000/api/rest/parties', {
            name: faker.company.companyName(),
            link: "https://www.conservatives.com/",
            manifesto: faker.lorem.paragraph()
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    ).then((req,res)=>{
        console.log("success")
        getCandidate(2,2)
        getCandidate(2,2)
        getCandidate(2,2)
        getCandidate(2,2)
        getUser(1)

    })
})
// //-------------3 ----------------
axios.post(
    'http://localhost:4000/api/rest/constituency', {
        name: faker.address.county()
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
).then((req,res)=>{
    console.log("success")
    axios.post(
        'http://localhost:4000/api/rest/parties', {
            name: faker.company.companyName() ,
            link: "https://www.conservatives.com/",
            manifesto: faker.lorem.paragraph()
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    ).then((req,res)=>{
        console.log("success")
        getCandidate(3,3)
        getCandidate(3,3)
        getCandidate(3,3)
        getCandidate(3,3)
        getUser(1)
    })

})

//--------------4-------------------
axios.post(
    'http://localhost:4000/api/rest/constituency', {
        name: faker.address.county()
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
).then((req,res)=>{
    console.log("success")
    axios.post(
        'http://localhost:4000/api/rest/parties', {
            name: faker.company.companyName() ,
            link: "https://www.conservatives.com/",
            manifesto: faker.lorem.paragraph()
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    ).then((req,res)=>{
        console.log("success")
        getCandidate(4,4)
        getCandidate(4,4)
        getCandidate(4,4)
        getCandidate(4,4)
        getUser(1)


    })
}).catch((err)=>{
      console.log(err.data)
});


function getCandidate(constituency, party){
    axios.post(
        'http://localhost:4000/api/rest/candidates', {
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            constituency: constituency,
            party: party,
            numOfVotes: 0,
            isElected: false
            }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
}

function getUser(constituency){
    axios.post(
        'http://localhost:4000/api/rest/users', {
            username: faker.internet.userName(),
            password: "password",
            constituencyId: constituency
            }).then(()=>{
                console.log("user success")
            })
}


