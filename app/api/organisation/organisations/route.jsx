
import { NextResponse } from "next/server";
const axios = require("axios");

export async function GET(
  req,
  res
) {

  const jwt = require('jsonwebtoken');
  console.log('-----------------------------')
  let userSub = jwt.decode(req?.headers.get('authorization').split(" ")[1]).sub;
  // console.log('user/oranisations ', userSub);

  // console.log(req?.headers.get('authorization'));

  // get management token
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

  let m2m = await axios.post(options.url,
    options.body
  )

  let a0MagementToken = m2m.data?.access_token;

  let userOrgs = await axios.get(`https://db-prospect-adhoc.eu.auth0.com/api/v2/users/${userSub}/organizations`, {
    headers: {
      authorization: `Bearer ${a0MagementToken}`
    }
  });

  return NextResponse.json(
    userOrgs.data, { status: 200 }
  )

}


