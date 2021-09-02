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

type Query {
  getUsers: [User]
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