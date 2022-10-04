const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

const {schema} = require('./graphql/graphql.schema');
const {graphqlHTTP} = require ('express-graphql');


// connect to mongodb
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database can't be connected: " + error);
    }
  );
  // app.use(express.json());  
  //  app.use("/smartphones", require("./routes/smartphone.routes"));
  app.use('/graphql',graphqlHTTP  ({
    schema,
    graphiql: true,
  }));

  app.listen(4000, () => {
    console.log("Ready to Go!");
  });
