const express = require('express');

module.exports.getLogin = (req,res,next)=>{
    res.render('account/login',{
        title:'Login',
        path:'/'
    })
}

module.exports.postLogin = (req,res,next) =>{
    
}

module.exports.getIndex = (req,res,next) => {
    res.render('user/index',{
        title:'Home',
        path:'/index'
    })
}
module.exports.postMail =(req,res,next) =>{

}