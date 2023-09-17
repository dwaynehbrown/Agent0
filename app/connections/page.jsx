"use client";
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'



import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Header from '@/components/shared/header'
import ConnectionsList from '@/components/connections/connections-list';
import ConnectionsEmpty from '@/components/connections/connections-empty';
import ConnectionsSubheader from '@/components/connections/connections-subheader';

const navigation = [
  { name: 'Business', href: '#', icon: FolderIcon, current: true },
  { name: 'Connections', href: '#', icon: ServerIcon, current: false },
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

export default function Connections( ) {


  const ctx = {
    org: 'Orgx'
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
            },{
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

