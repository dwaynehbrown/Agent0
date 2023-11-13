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
//   //       let getUserOrg = await axios.get('${process.env.AUTH0_BASE_URL}/api/organisation/', {
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

  let userOrg = {}, orgConnections = [];

  if (!user) {

    console.log('no session');

  } else {

    console.log(user);

    try {

      const token = await getAccessToken();

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

      if (token?.accessToken) {
        let getOrgConnections = await axios.get(`${process.env.AUTH0_BASE_URL}/api/organisation/connections`, {
          headers: {
            authorization: 'Bearer ' + token?.accessToken
          }
        })

        // console.log ('got user orgs ',JSON.stringify( getOrgConnections.data));
        console.log(orgConnections = [...getOrgConnections.data]);

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
          <div className="animate-fade-up ">

            <div>
              {orgConnections.length == 0 && <ConnectionsEmpty />}
              {orgConnections.length > 0 && <>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                              Name
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Strategy
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              assign_membership_on_login
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              id
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {orgConnections.map((connection) => (
                            <tr key={connection?.connection_id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                {connection?.connection?.name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{connection?.connection?.strategy}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{connection?.assign_membership_on_login ? 'yes' : 'no'}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{connection?.connection_id}</td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                  Edit<span className="sr-only">, {connection?.name}</span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>}
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

