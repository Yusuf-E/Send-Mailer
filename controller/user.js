const express = require('express');
const nodemailer = require('nodemailer');
var fs = require('fs');
let _transporter;
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
        _transporter = transporter;
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
    email = req.body.email;
     fs.readFile('',(err,data)=>{// Your message File Path should write 'inside of this'
            if(err){
              return  console.log(err);
            }
            else{
                const msg = {
                    to: email,
                    from: '',// Your mail adress should write 'inside of this', ex: 'YourNameandSurname<yourmail@xmail.com>'
                    subject: 'Sending Mail Completed',
                    html : data
                }
                _transporter.sendMail(msg)
                .then(()=>{
                    console.log('Email sent');
                    res.redirect('/index');
                }).catch((err)=>{
                    console.log(err)
                })
            }
    })
       
  
   
}