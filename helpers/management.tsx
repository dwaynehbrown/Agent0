
import axios from "axios";

const domain = process.env.AUTH0_ISSUER_BASE_URL,
baseURL =  domain,
api = '/api/v2',
client_id = process.env.AUTH0_M2M_CLIENT_ID,
client_secret = process.env.AUTH0_M2M_CLIENT_SECRET;

const Auth0ManagementApi = {

    token: {
        getManagementApiToken: (options : any) => axios.post(baseURL + '/oauth/token/',
        {
            grant_type: 'client_credentials',
            client_id,
            client_secret,
            audience: baseURL + api
        })
    },

    //users
    users: {
        getUsersOrganisations: (id : string) =>  axios.get(baseURL + '/api/v2/users/' + id + '/organizations')
    }

}

export default Auth0ManagementApi;