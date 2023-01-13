const  {reply} = require("express");
const request = require("request");
// const db = require("../models");
// const User = db.users;
// const mysql= require("mysql");



exports.postUser = async function(req, res){

    // const getuser = await User.find()
    // console.log(getuser)
    // res.send(getuser)

    const req_data = req.body
    // console.log(req_data)
    const dataToDB = new User({
        username: req_data.username,
        password: req_data.password
    }) 
    
//     dataToDB.save((err, response) => {
//         if(err) return res.status(500).send(err)

//         return res.status(200).send({
//             message:'Success',
//             result:response
//         })
//     });
}



// const getUsers = async (request, reply) => {
//     reply.send('getUser')
// }

// const getInfoUserById = async (request, reply)=> {
//     reply.send('getUserById')
// }

// const postUser = async (request, reply) => {


// }

// const patchUser =  async (request, reply) => {
//     reply.send('patchUser')
// }

// const deleteUser = async (request, reply) => {
//     reply.send('deleteUser')
// }

// module.exports = {
//     getInfoUserById,
//     getUsers,
//     postUser,
//     patchUser,
//     deleteUser
// }