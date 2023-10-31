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
                const org = searchParams.get('org') ,
                invitation = searchParams.get('invitation'),
                organization_org = searchParams.get('organization_org'),
                organization_name = searchParams.get('organization_name');
                let audience = process.env.AUTH0_AUDIENCE;

                let authorizationParams: {audience?: any, organization?: any, invitation?: any, organization_org?: any, organization_name?: any} = {
                    audience,
                    invitation,
                    organization_org,
                    organization_name
                };
              

                if (org && org.indexOf ('org_') > -1) authorizationParams.organization = org;

                 console.log('sp ---- ', searchParams);
                 console.log('az ---- ', authorizationParams);

        return {
            authorizationParams
        };
    })
});