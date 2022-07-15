let network = require('./../fabric/network.js');
const fs = require('fs');
const path = require('path');
const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
const appAdmin = config.appAdmin;

exports.createVaccine = async (req, res) => {
  
    const {
      VID,Vname,company,cure,date,expired,currentDate,owner ,status,batchnum}=req.body;
  
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke2(networkObj, false, 'createVaccine', VID,Vname,
    company,
    cure,
    date,
    expired,
    currentDate,
    owner ,
    status,
    batchnum);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  
  };


  exports.queryHistory = async (req, res) => {
    const id=req.params.id;
    const name=req.params.name;
  
    console.log(id,name);
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke2(networkObj, true, 'queryHistory',id,name);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  
  };
  exports.underTransportVaccine =async (req, res) => {
    const {vaccineNum,timeStamp,new_owner}=req.body;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke2(networkObj, false, 'underTransportVaccine', vaccineNum,timeStamp,new_owner);
    let parseddres= JSON.stringify(response);
    res.send(parseddres);
  };
  exports.querySeurm = async (req, res) => {
    const id=req.params.id;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'querySeurm',id);
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  
  };