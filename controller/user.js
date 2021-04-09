const express = require('express');
const nodemailer = require('nodemailer');
module.exports.getLogin = (req,res,next)=>{
    res.render('account/login',{
        title:'Login',
        path:'/'
    })
}

module.exports.postLogin = (req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;

    console.log(email);
    console.log(password);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: email,
          pass: password
        }
      });
      transporter.verify(function (error, success) {

        if (error) throw error;
      
        console.log('Bağlantı başarıyla sağlandı');
        res.redirect('/index');
      
      });
}

module.exports.getIndex = (req,res,next) => {
    res.render('user/index',{
        title:'Home',
        path:'/index'
    })
}
module.exports.postMail =(req,res,next) =>{

}