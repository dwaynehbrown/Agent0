import Header from '@/components/shared/header'
import UsersList from '@/components/users/users-list';
import UsersInvitesList from '@/components/users/users-invites-list';

import { getSession, getAccessToken } from '@auth0/nextjs-auth0';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import axios from "axios";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function Business() {

  const { user } = await getSession();

  const token = await getAccessToken();

  let orgMembers = [];
  let orgInvites = [];
  let userOrg = {};

  if (!user) {

    console.log('no session');

  } else {

    console.log(user);


    try {
      if (token?.accessToken) {
        let getUserOrg = await axios.get(`${process.env.AUTH0_BASE_URL}/api/organisation/`, {
          headers: {
            authorization: 'Bearer ' + token?.accessToken
          }
        })

        // console.log ('got user orgs ',JSON.stringify( getUserOrg.data));
        console.log(userOrg = { ...getUserOrg.data });
      }


    } catch (e) {
      console.log(e);
    }

    try {

      const token = await getAccessToken();

      if (token?.accessToken) {
        let getOrgInvites = await axios.get(`${process.env.AUTH0_BASE_URL}/api/organisation/invitations`, {
          headers: {
            authorization: 'Bearer ' + token?.accessToken
          }
        })

        // console.log ('got user orgs ',JSON.stringify( getOrgInvites.data));
        console.log(orgInvites = [...getOrgInvites.data]);

      }
    } catch (e) {
      console.log(e);
    }

    try {

      const token = await getAccessToken();

      if (token?.accessToken) {
        let getOrgMembers = await axios.get(`${process.env.AUTH0_BASE_URL}/api/organisation/members`, {
          headers: {
            authorization: 'Bearer ' + token?.accessToken
          }
        })

        // console.log ('got user orgs ',JSON.stringify( getOrgMembers.data));
        console.log(orgMembers = [ ...getOrgMembers.data ]);

      }
    } catch (e) {
      console.log(e);
    }

  }

  const ctx = {
    org: userOrg?.display_name || 'Orgx'
  }


  return (
    <>

      <div style={{ maxWidth: '1000px' }} className="z-10 w-full max-w-xl px-5 xl:px-0 p-12">

        <div className="animate-fade-up space-y-10 divide-y divide-gray-900/10">
          <Header
            userOrg={ctx.org}
            heading="Your Users"
            crumbs={[{
              title: ctx.org,
              href: '#',
              current: false
            }, {
              title: 'Users',
              href: '/users',
              current: true
            }]}
          />

          <UsersInvitesList data={orgInvites} />

          <UsersList data={orgMembers} />

        </div>
      </div>
    </>
  )
}

