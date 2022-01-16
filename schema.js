const {buildSchema}=require('graphql');

const schema= buildSchema(`
type User {
  id: ID
  firstName: String
  lastName: String
  email: String
  address: String
  dateBirth: String
  phoneNumber: String
  gender: String
  job: String
  companyName: String
}
type Job {
  id: ID
  name: String
  
}
type Speciality {
  id: ID
  idJob: String
  nameSpec: String
}
input JobInput{
  job: String}


type Query {
  getUsers: [User],
  getJobs(job:JobInput):Job,
  getSpecialities:[Speciality],
 
}

input UserInput{
    firstName: String
    lastName: String
    email: String
    address: String
    dateBirth: String
    phoneNumber: String
    gender: String
    job: String
    companyName: String

}

type Mutation{
  registerUser(user:UserInput):User
}
`);

module.exports=schema;