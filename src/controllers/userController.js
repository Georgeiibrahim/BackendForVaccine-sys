const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://george:22359187Gg@cluster0.rzdr6.mongodb.net/?retryWrites=true&w=majority";
let network = require('./../fabric/network.js');
const fs = require('fs');
const path = require('path');
const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
const appAdmin = config.appAdmin;

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.createprocess = async (req, res) => {
  
  const citizenID=req.user.id;
  const processID =Date.now();
  let processIDS = processID.toString();
  const type = "REQUEST";
  const {vaccineKey,orgID}=req.body;
  console.log(type);
  let networkObj = await network.connectToNetwork(appAdmin);
  let response = await network.invoke2(networkObj, false, 'createProcess',processIDS,
  vaccineKey,
  citizenID,
  orgID,
  type);
  let parsedResponse = await JSON.parse(response);
  // if(response === "false"){
  //   res.sendStatus(404);
  // }
  // else{
  //   res.sendStatus(200);
  // }
res.send(parsedResponse);
};
exports.listhospital = function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("Organization").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
  };


//function (req, res) {
//   fs.readFile(
//     __dirname + "/" + "../utils/hospital.json",
//     "utf8",
//     function (err, data) {
//       console.log(data);
//       res.end(data);
//     }
//   );
// };
exports.queryCitizen = async (req, res) => {
  const citizenID=req.user.id;
  console.log(citizenID);
  let networkObj = await network.connectToNetwork(appAdmin);
  let response = await network.invoke(networkObj, true, 'queryCitizen',citizenID);
  let parsedResponse = await JSON.parse(response);
  res.send(parsedResponse);
};