
import { NextResponse } from "next/server";
var axios = require("axios");

export async function GET(
  req,
  res
) {

  /////////

  var options = {
    method: 'POST',
    url: 'https://db-prospect-adhoc.eu.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: {
      "client_id": "9qbQAVQJXH1DG0PMo7eDoTd08VwsHuIO",
      "client_secret": "RTwt_8l2X-iBwV88eUj0sJ4FKUlyLgjGvVFbj0JpDLwC3SFeHfb7jjtqSMREFT_F",
      "audience": "https://db-prospect-adhoc.eu.auth0.com/api/v2/",
      "grant_type": "client_credentials"
    }
  };

  let resp = {};

  var jwt = require('jsonwebtoken');
  var jwksClient = require('jwks-rsa');
  var client = jwksClient({
    jwksUri: 'https://db-prospect-adhoc.eu.auth0.com/.well-known/jwks.json'
  });

  function getKey(header, callback){
    client.getSigningKey(header.kid, function(err, key) {
      var signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }

  axios.post(options.url,
    options.body
  )
    .then(resp =>
      // console.log(resp))

    console.log(
      jwt.verify(resp.data.access_token)
    )
  
    
    // jwt.verify(resp.data.access_token, getKey, options, function(err, decoded) {
    //   console.log('test ', decoded.foo) // bar
    // })




    // )

    // console.log (parseJwt(resp.data.access_token)))

  // axios.get ('https://db-prospect-adhoc.eu.auth0.com/users/id/organisations')
  //  .then (resp => {
  //   console.log('fyfjtdckyrxkyrd');
  //  })
  //  .then (resp => {}))

  // NextResponse.json({ ...resp  }, { status: 200 }))
  //   .catch (err => console.log (err))

    )
}