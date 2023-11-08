
import axios from "axios";

const domain = process.env.AUTH0_ISSUER_BASE_URL,
    baseURL = domain,
    api = domain + '/api/v2',
    client_id = process.env.AUTH0_M2M_CLIENT_ID,
    client_secret = process.env.AUTH0_M2M_CLIENT_SECRET;

const Auth0ManagementApi = {

    token: {
        getManagementApiToken: async (options: any) => axios.post(baseURL + '/oauth/token/',
            {
                grant_type: 'client_credentials',
                client_id,
                client_secret,
                audience: baseURL + api
            })
    },

    //users
    users: {
        getUsersOrganisations: (id: string) => axios.get(baseURL + '/api/v2/users/' + id + '/organizations')
    },
    organizations: {
        getMembers: async (id: string) => {

            axios.get(`${api}/organizations/${id}/members`, {
                headers: {
                    // Authorization: `Bearer ${m2m.data?.access_token}`
                }
            })
        }
    }

}

export default Auth0ManagementApi;