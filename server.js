const express=require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const root = require("./root");
const schema = require('./schema');
var server_port = process.env.PORT || 5000;
var server_host = process.env.HOST || '0.0.0.0';

const app=express();
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true }, () => console.log("connected to DB"));
app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema,
    rootValue:root
}))
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});

