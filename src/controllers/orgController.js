
let network = require('./../fabric/network.js');
const fs = require('fs');
const path = require('path');
const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
const appAdmin = config.appAdmin;


exports.HospitalProcesses = async (req, res) => {
    const orgid=req.params.orgid;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'HospitalProcesses',orgid);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);

  };

  exports.queryHistoryForProcess = async (req, res) => {
    const VID=req.params.id;
    const Vname=req.params.name;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke2(networkObj, true, 'queryHistoryForProcess',VID,Vname);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  
  };

  exports.usedVaccine =async (req, res) => {
    // const =req.user.id;
     const {vaccineNum,citizenID,timeStamp,processNUM}=req.body;
     let networkObj = await network.connectToNetwork(appAdmin);
     let response = await network.invoke2(networkObj, false, 'usedVaccine', vaccineNum,citizenID,timeStamp,processNUM);
     //let parseddres= JSON.stringify(response);
     //res.send(parseddres);
     if(response === "false"){
       res.sendStatus(404);
     }
     else{
       res.sendStatus(200);
     }
   };
   exports.delieveredVaccine = async (req, res) => {
    const {
      vaccineNum,
      timeStamp
    }=req.body;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke2(networkObj, false, 'delieveredVaccine', vaccineNum,
    timeStamp);
    //let parsedResponse = await JSON.parse(response); vacine id = 201
    //res.send(response);
    res.send(response);
  };
  exports.queryHospitalByCondition = async (req, res) => {
    const hospitalID = req.user.name;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'queryHospitalByCondition',hospitalID);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  
  };
  exports.queryHospital = async (req, res) => {
    const hospitalID=req.params.hospitalID;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'queryHospital',hospitalID);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);

  };
  exports.queryCure = async (req, res) => {
    const id=req.params.id;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'queryCure',id);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  };
  exports.readVaccine = async (req, res) => {
    const key=req.params.key;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'readVaccine',key);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  };
  exports.queryProcess = async (req, res) => {
    const processNumber=req.params.key;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'queryProcess',processNumber);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  };