// "use client";
// import {
//   ChartBarSquareIcon,
// } from '@heroicons/react/24/outline'

// import Header from '@/components/shared/header'

// import ConnectionsList from '@/components/connections/connections-list';
import ConnectionsEmpty from '@/components/connections/connections-empty';
import ConnectionsSubheader from '@/components/connections/connections-subheader';

// import { getSession, getAccessToken } from '@auth0/nextjs-auth0';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ') 
// }

// export default async function Connections() {

//   // const { user } = await getSession();

//   // if (!user) {

//   //   console.log('no session');

//   // } else {

//   //   console.log(user);

//   //   try {

//   //     const token = await getAccessToken();

//   //     if (token?.accessToken) {
//   //       let getUserOrg = await axios.get('http://localhost:3000/api/organisation/', {
//   //         headers: {
//   //           authorization: 'Bearer ' + token?.accessToken
//   //         }
//   //       })

//   //       // console.log ('got user orgs ',JSON.stringify( getUserOrg.data));
//   //       console.log(userOrg = { ...getUserOrg.data });

//   //     }
//   //   } catch (e) {
//   //     console.log(e);
//   //   }

//   // }

//   const ctx = {
//     org: user?.org_name || 'Orgx'
//   }


//   return (
//     <>

//       <div style={{ maxWidth: '1000px' }} className="z-10 w-full max-w-xl px-5 xl:px-0 p-12">

//         <div className=" space-y-10 divide-y divide-gray-900/10">
//           <Header className="animate-fade-up"
//             heading="Your Connections"
//             crumbs={[{
//               title: ctx.org,
//               href: '#',
//               current: false
//             }, {
//               title: 'Connections',
//               href: '/connections',
//               current: true
//             }]}
//           />

//          

//           <div className="animate-fade-up  grid-cols-1 gap-x-8 gap-y-8 ">

//             <ConnectionsSubheader heading="Enterprise Connections" subheading="SAML, WSFED , .etc." />
//             {/* <ConnectionsList /> */}
//             <ConnectionsEmpty />


//           </div>

//           <div className="animate-fade-up  grid-cols-1 gap-x-8 gap-y-8 ">

//             <ConnectionsSubheader heading="Social Connections" subheading="Enterprise" />
//             {/* <ConnectionsList /> */}
//             <ConnectionsEmpty />

//           </div>

//         </div>
//       </div>

//     </>
//   )

// }

import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


import { getSession, getAccessToken } from '@auth0/nextjs-auth0';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Header from '@/components/shared/header'

import axios from "axios";

const navigation = [
  { name: 'Business', href: '#', icon: FolderIcon, current: true },
  { name: 'Authentication', href: '#', icon: ServerIcon, current: false },
  { name: 'Roles', href: '#', icon: SignalIcon, current: false },
  { name: 'User Management', href: '#', icon: GlobeAltIcon, current: false },
  // { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
  // { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: true },
]
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
]
const secondaryNavigation = [
  { name: 'Account', href: '#', current: true },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Integrations', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function Business() {


  const { user } = await getSession();

  const token = await getAccessToken();

  let userOrg = {};

  if (!user) {

    console.log('no session');

  } else {

    console.log(user);

    try {

      const token = await getAccessToken();

      if (token?.accessToken) {
        let getUserOrg = await axios.get('http://localhost:3000/api/organisation/', {
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

  }

  const ctx = {
    org: userOrg?.display_name || 'Orgx'
  }

  return (
    <>

      <div style={{ maxWidth: '1000px' }} className="z-10 w-full max-w-xl px-5 xl:px-0 p-12">

        <div className=" space-y-10 divide-y divide-gray-900/10">
          <Header className="animate-fade-up"
            heading="Your Connections"
            userOrg={userOrg}
            crumbs={[
              {
                title: ctx.org,
                href: '#',
                current: false
              }, {
                title: 'Your Connections',
                href: '/connections',
                current: true
              }]}
          />
          <div className="animate-fade-up grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">

            <div className="px-4 sm:px-0">

              <h2 className="text-base font-semibold leading-7 text-gray-900">Database Connections</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Username/Email &amp; Password
              </p>
            </div>


            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
              
              <div className="animate-fade-up  grid-cols-1 gap-x-8 gap-y-8 ">

                <ConnectionsEmpty />

              </div>
            </form>
          </div>

          <div className="animate-fade-up grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Enterprise Connections</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">SAML, WS Fed, .etc</p>
            </div>

            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
              <div className="animate-fade-up  grid-cols-1 gap-x-8 gap-y-8 ">

                <ConnectionsEmpty />

              </div>
            </form>
          </div>


          <div className="animate-fade-up grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Social Connections</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Google, Facebook, .etc</p>
            </div>

            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
              <div className="animate-fade-up  grid-cols-1 gap-x-8 gap-y-8 ">

                <ConnectionsEmpty />

              </div>
            </form>
          </div>


        </div>
      </div>
    </>
  )
}

