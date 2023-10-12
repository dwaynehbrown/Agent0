
import axios from "axios";

const domain = "db-prospect-adhoc.eu.auth0.com",
baseURL = "https://" + domain,
api = '/api/v2',
client_id = '9qbQAVQJXH1DG0PMo7eDoTd08VwsHuIO',
client_secret = 'RTwt_8l2X-iBwV88eUj0sJ4FKUlyLgjGvVFbj0JpDLwC3SFeHfb7jjtqSMREFT_F';

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