import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: { audience: 'https://agent0' } // Pass in custom params
    })
});

// export const GET = handleAuth({
//   async login(req: any, res: any) {
//     try {
//       await handleLogin(req, res, {
//         authorizationParams: {
//           audience: 'https://agent0', // or AUTH0_AUDIENCE
//           // Add the `offline_access` scope to also get a Refresh Token
//           scope: 'openid profile email' // or AUTH0_SCOPE
//         }
//       });
//     } catch (error: any) {
//         console.log (error)
//       res.status(error.status || 400).end(error.message);
//     }
//   }
// });