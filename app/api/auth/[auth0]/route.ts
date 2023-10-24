// import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
// import {useRouter} from "next/router";

// export const GET = handleAuth({
//     async login(req: any, res: any){

//         const { searchParams } = new URL(req.url)
//         const id = searchParams.get('id')

//         handleLogin(req, res, {
//             authorizationParams: { , } // Pass in custom params
//         })
//     }
// });

import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin((req: any) => {
                const { searchParams } = new URL(req.url)
                const org = searchParams.get('org') 

                let authorizationParams: {audience?: any, organization?: any} = {};
                authorizationParams.audience=process.env.AUTH0_AUDIENCE;
                if (org && org.indexOf ('org_') > -1) authorizationParams.organization = org;

                 console.log('sp ---- ', searchParams);
                 console.log('az ---- ', authorizationParams);

        return {
            authorizationParams
        };
    })
});