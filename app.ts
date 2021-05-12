
// import * as googleAuth from 'google-auth-library';
// import { Credentials } from 'google-auth-library/build/src/auth/credentials';

// const scope: string = "https://mail.google.com/";

// /**
//  * Step 0: Create OAuth2 credentials at the Google Console (make sure to download JSON, not only just get key and secret)
//  */

// export const credentials = {
//   "web": {
//     "client_id": "118207077118-jp9a4j7r734lqdfq188dcmta9gn1nm6q.apps.googleusercontent.com",
//     "project_id": "quickstart-1602817550460",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_secret": "F_jvEkNNcuFgV1fAg80U7LI7",
//     "redirect_uris": [
//       "http://localhost"
//     ]
//   }
// };




// /**
//  * Step 1: Authorize in the browser
//  */

// export function getAuthorizeUrl(callback: (err: any, url: string) => any): void {
//   const oauth2Client = new googleAuth.OAuth2Client(credentials.web.client_id, credentials.web.client_secret, credentials.web.redirect_uris[0]);

//   const authUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: scope
//   });

//   callback(null, authUrl);
// }

// getAuthorizeUrl((err, url) => {
//   if (err) return console.log(err);
//   console.log("Auth url is: ", url);
// });


// const express = require('express')
impost * as express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
