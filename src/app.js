
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const authController = require('./controllers/authController');

// const path = require('path');
// const fs = require('fs');

const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
const userRouter = require('./routes/userRoutes');
const serumRouter = require('./routes/serumRoutes');
const mohRouter = require('./routes/mohRoutes');
const orgRouter = require('./routes/orgRoutes');

// let network = require('./fabric/network.js');
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// const configPath = path.join(process.cwd(), './config.json');
// const configJSON = fs.readFileSync(configPath, 'utf8');
// const config = JSON.parse(configJSON);

//use this identity to query
// const appAdmin = config.appAdmin;
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

mongoose.connect('database_name');
console.log("success database");
//get all assets in world state
// app.get('/queryALL', async (req, res) => {

//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'queryALL','');
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });
// app.get('/queryCure/:id', async (req, res) => {
//   const id=req.params.id;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'queryCure',id);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });
// app.get('/queryHistory/:id/:name', async (req, res) => {
//   const id=req.params.id;
//   const name=req.params.name;

//   console.log(id,name);
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke2(networkObj, true, 'queryHistory',id,name);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });

// app.get('/queryBatch/:patchnumber', async (req, res) => {
//   const patch=req.params.patchnumber;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'queryBatch',patch);
//   let parsedResponse = await JSON.parse(response);
//   //res.send(parsedResponse);
//   console.log("asdasd");
//   console.log(response);
//   if(response.length === 0 ){
//     return res.status(404).send(parsedResponse);
    
//    }
//    res.send(parsedResponse);
// });



// app.get('/querySeurm/:id', async (req, res) => {
//   const id=req.params.id;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'querySeurm',id);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });


// app.get('/queryHospital/:hospitalID', async (req, res) => {
//   const hospitalID=req.params.hospitalID;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'queryHospital',hospitalID);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });
// app.get('/queryCitizen', authController.protect,async (req, res) => {
//   const citizenID=req.user.id;
//   console.log(citizenID);
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'queryCitizen',citizenID);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);


// });

// app.get('/readVaccine/:key', async (req, res) => {
//   const key=req.params.key;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'readVaccine',key);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });
// app.get('/queryAllProcess', async (req, res) => {
  
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'queryAllProcess','');
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });

// app.get('/queryHospitalByCondition', authController.protect, async (req, res) => {
//   const hospitalID = req.user.name;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'queryHospitalByCondition',hospitalID);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });

// app.get('/queryHistoryForProcess/:VID/:Vname', async (req, res) => {
//   const VID=req.params.VID;
//   const Vname=req.params.Vname;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke2(networkObj, true, 'queryHistoryForProcess',VID,Vname);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });


// app.get('/queryProcess/:key', async (req, res) => {
//   const processNumber=req.params.key;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'queryProcess',processNumber);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });

// app.get('/HospitalProcesses/:orgid', async (req, res) => {
//   const orgid=req.params.orgid;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke(networkObj, true, 'HospitalProcesses',orgid);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });
// app.post('/createVaccine', async (req, res) => {
  
//   const {
//     VID,
//     Vname,
//     company,
//     cure,
//     date,
//     expired,
//     currentDate,
//     owner ,
//     status,
//     batchnum
//   }=req.body;

//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke2(networkObj, false, 'createVaccine', VID,
//   Vname,
//   company,
//   cure,
//   date,
//   expired,
//   currentDate,
//   owner ,
//   status,
//   batchnum);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });
// app.post('/createProcess',  authController.protect,async (req, res) => {
  
//   const citizenID=req.user.id;
//   const processID =Date.now();
//   let processIDS = processID.toString();

//   const {
//     vaccineKey,
//     orgID,
//     type
//    }=req.body;
// console.log(type);
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke2(networkObj, false, 'createProcess',processIDS,
//   vaccineKey,
//   citizenID,
//   orgID,
//   type);
//   let parsedResponse = await JSON.parse(response);
//   res.send(parsedResponse);

// });


// app.patch('/delieveredVaccine', async (req, res) => {
  
//   const {
//     vaccineNum,
//     timeStamp
//   }=req.body;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke2(networkObj, false, 'delieveredVaccine', vaccineNum,
//   timeStamp);
//   //let parsedResponse = await JSON.parse(response); vacine id = 201
//   //res.send(response);
//   res.send(response);

// });
// app.patch('/usedVaccine',async (req, res) => {
//  // const =req.user.id;
//   const {
//     vaccineNum,
//     citizenID,
//     timeStamp,
//     processNUM
//   }=req.body;
//   console.log("sadsadasd");
// console.log( vaccineNum,
//   timeStamp);
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke2(networkObj, false, 'usedVaccine', vaccineNum,
//   citizenID,
//   timeStamp,processNUM);
//   //let parseddres= JSON.stringify(response);
//   //res.send(parseddres);
//   if(response === "false"){
//     res.sendStatus(404);
//   }
//   else{
//     res.sendStatus(200);
//   }
// });
// app.patch('/underTransportVaccine', async (req, res) => {
  
//   const {vaccineNum,timeStamp,new_owner}=req.body;
//   let networkObj = await network.connectToNetwork(appAdmin);
//   let response = await network.invoke2(networkObj, false, 'underTransportVaccine', vaccineNum,timeStamp,new_owner);
//   let parseddres= JSON.stringify(response);
//   res.send(parseddres);



// });
// app.get("/listhospital", function (req, res) {
//   fs.readFile(
//     __dirname + "/" + "utils/hospital.json",
//     "utf8",
//     function (err, data) {
//       console.log(data);
//       res.end(data);
//     }
//   );
// });



// app.get('/list',function (req, res) {
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("vaccine");
//   dbo.collection("vaccine").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     res.send(result);
//     db.close();
//   });
// });
// });
app.use(userRouter);
app.use(serumRouter);
app.use(mohRouter);
app.use(orgRouter);
app.listen(process.env.PORT || 8081);