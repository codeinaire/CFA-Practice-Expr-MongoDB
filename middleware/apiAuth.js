const express = require('express');
var jwt = require('jsonwebtoken');

const apiAuth = (req, res, next) => {
  // NOTE
  // KEYS for validation
  // this contains a bunch of valid keys, that can be put into another file or maybe in an env.var??
  // const validKeys = [
  //   { key: 'random number' }
  //   { key: 'random number' }
  // ]
  console.log("Authenticating api request");

  // this will handle key in body or query or headers with the key being x-access-token and the value being 1234. This makes it safer than putting it into the url.
  const key = req.body.key || req.query.key || req.headers['x-access-token'];

  // NOTE
  // JSON WEB TOKENS
  // this is the way to verify the jwt
  // verify a token symmetric - synchronous
  // var decoded = jwt.verify(token, 'shhhhh');
  // console.log(decoded.foo) // bar
  //  this is the test of the email
  // let fonud = false;
  // if (decoded.email === 'email') {
  //   found = true;
  // }


  var decoded = jwt.verify(key, 'secretcode');
  console.log(decoded.email)
  let found = false;
  if (decoded.email === 'john@john.com') {
    found = true;
  };

  // NOTE
  // KEYS to find
  // this will check to see if any of the keys entered
  // were from the array it will assign a true or false
  // value to the found where it can be checked in the
  // next if statement.
  // const found = validKeys.find(k => k.key === key);

  // const key = req.query.key;
  // if(found)
  if (found) {
    next();
  } else {
    res.status(401)
      .json({
        success: false,
        message: 'Not Authorised',
      });
  }
};

module.exports = apiAuth;
