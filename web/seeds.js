const axios = require('axios')
var faker = require('faker');
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTUzMTE3ODAyLCJleHAiOjE1NTMxMjE0MDJ9.Qp15vm_7E9WYWi78vAV9H8hCjPcx83jFcItu06eAscQ"
console.log(faker.address.country())
// axios.post(
//     'http://localhost:4000/api/rest/constituency', {
//         name: faker.address.county()
//     }, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     }
// ).then((req,res)=>{
//     console.log("success")
//     axios.post(
//         'http://localhost:4000/api/rest/parties', {
//             name: faker.company.companyName(),
//             link: "https://www.libdems.org.uk/",
//             manifesto: faker.lorem.paragraph()
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//     ).then((req,res)=>{
//         console.log("success")
//         getCandidate(1,1)
//         getCandidate(1,1)
//         getCandidate(1,1)
//         getCandidate(1,1)
//         getUser(1)
        
//     })
// })

// //------------SECOND---------------------

// axios.post(
//     'http://localhost:4000/api/rest/constituency', {
//         name: faker.address.county()
//     }, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     }
// ).then((req,res)=>{
//     console.log("success")
//     axios.post(
//         'http://localhost:4000/api/rest/parties', {
//             name: faker.company.companyName(),
//             link: "https://www.conservatives.com/",
//             manifesto: faker.lorem.paragraph()
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//     ).then((req,res)=>{
//         console.log("success")
//         getCandidate(2,2)
//         getCandidate(2,2)
//         getCandidate(2,2)
//         getCandidate(2,2)
//         getUser(1)

//     })
// })
// // //-------------3 ----------------
// axios.post(
//     'http://localhost:4000/api/rest/constituency', {
//         name: faker.address.county()
//     }, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     }
// ).then((req,res)=>{
//     console.log("success")
//     axios.post(
//         'http://localhost:4000/api/rest/parties', {
//             name: faker.company.companyName() ,
//             link: "https://www.conservatives.com/",
//             manifesto: faker.lorem.paragraph()
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//     ).then((req,res)=>{
//         console.log("success")
//         getCandidate(3,3)
//         getCandidate(3,3)
//         getCandidate(3,3)
//         getCandidate(3,3)
//         getUser(1)
//     })

// })

// //--------------4-------------------
// axios.post(
//     'http://localhost:4000/api/rest/constituency', {
//         name: faker.address.county()
//     }, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     }
// ).then((req,res)=>{
//     console.log("success")
//     axios.post(
//         'http://localhost:4000/api/rest/parties', {
//             name: faker.company.companyName() ,
//             link: "https://www.conservatives.com/",
//             manifesto: faker.lorem.paragraph()
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//     ).then((req,res)=>{
//         console.log("success")
//         getCandidate(4,4)
//         getCandidate(4,4)
//         getCandidate(4,4)
//         getCandidate(4,4)
//         getUser(1)


//     })
// }).catch((err)=>{
//       console.log(err.data)
// });

getCandidate(2,1)
getCandidate(2,1)
getCandidate(1,1)
getCandidate(1,1)
getCandidate(1,1)
getCandidate(1,1)
getCandidate(1,1)
getCandidate(1,1)
getCandidate(1,1)
getCandidate(1,1)
getCandidate(2,1)
getCandidate(2,1)
getCandidate(2,1)
getCandidate(3,3)
getCandidate(3,3)
getCandidate(3,3)
getCandidate(3,3)
getCandidate(2,2)
getCandidate(2,2)
getCandidate(2,2)
getCandidate(2,2)
getCandidate(2,2)





function getCandidate(constituency, party){
    axios.post(
        'http://localhost:4000/api/rest/candidates', {
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            constituency: constituency,
            party: party,
            numOfVotes: 0,
            isElected: false,
            profilePic: faker.image.avatar()
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


