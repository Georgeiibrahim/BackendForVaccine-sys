let network = require('./../fabric/network.js');
const fs = require('fs');
const path = require('path');
const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
const appAdmin = config.appAdmin;




exports.queryBatch =async (req, res) => {
    const patch=req.params.patchnumber;
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'queryBatch',patch);
    let parsedResponse = await JSON.parse(response);
    //res.send(parsedResponse);
    console.log("asdasd");
    console.log(response);
    if(response.length === 0 ){
      return res.status(404).send(parsedResponse);
      
     }
     res.send(parsedResponse);
  };
exports.queryAllProcess =async (req, res) => {
  
    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'queryAllProcess','');
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  
  };

exports.queryALL = async (req, res) => {

    let networkObj = await network.connectToNetwork(appAdmin);
    let response = await network.invoke(networkObj, true, 'queryALL','');
    let parsedResponse = await JSON.parse(response);
    res.send(parsedResponse);
  
  };