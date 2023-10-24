"use client";
import {
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline'

import Header from '@/components/shared/header'
 
import ConnectionsList from '@/components/connections/connections-list';
import ConnectionsEmpty from '@/components/connections/connections-empty';
import ConnectionsSubheader from '@/components/connections/connections-subheader';

import { getSession, getAccessToken } from '@auth0/nextjs-auth0';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ') 
}

export default async function Connections() {

  // const { user } = await getSession();

  // if (!user) {

  //   console.log('no session');

  // } else {

  //   console.log(user);

  //   try {

  //     const token = await getAccessToken();

  //     if (token?.accessToken) {
  //       let getUserOrg = await axios.get('http://localhost:3000/api/organisation/', {
  //         headers: {
  //           authorization: 'Bearer ' + token?.accessToken
  //         }
  //       })

  //       // console.log ('got user orgs ',JSON.stringify( getUserOrg.data));
  //       console.log(userOrg = { ...getUserOrg.data });

  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }

  // }

  const ctx = {
    org: user?.org_name || 'Orgx'
  }


  return (
    <>

      <div style={{ maxWidth: '1000px' }} className="z-10 w-full max-w-xl px-5 xl:px-0 p-12">

        <div className=" space-y-10 divide-y divide-gray-900/10">
          <Header className="animate-fade-up"
            heading="Your Connections"
            crumbs={[{
              title: ctx.org,
              href: '#',
              current: false
            }, {
              title: 'Connections',
              href: '/connections',
              current: true
            }]}
          />

          <div className="animate-fade-up  grid-cols-1 gap-x-8 gap-y-8 ">
            <ConnectionsSubheader heading="Database Connections" subheading="Username/Email & Password" />
            <ConnectionsEmpty />

          </div>

          <div className="animate-fade-up  grid-cols-1 gap-x-8 gap-y-8 ">

            <ConnectionsSubheader heading="Enterprise Connections" subheading="SAML, WSFED , .etc." />
            {/* <ConnectionsList /> */}
            <ConnectionsEmpty />


          </div>

          <div className="animate-fade-up  grid-cols-1 gap-x-8 gap-y-8 ">

            <ConnectionsSubheader heading="Social Connections" subheading="Enterprise" />
            {/* <ConnectionsList /> */}
            <ConnectionsEmpty />

          </div>

        </div>
      </div>

    </>
  )

}
