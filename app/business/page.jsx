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

export default function Business() {
  
  const ctx = {
    org: 'Orgx'
  }
  
  return (
    <>

      <div style={{ maxWidth: '1000px' }} className="z-10 w-full max-w-xl px-5 xl:px-0 p-12">

        <div className=" space-y-10 divide-y divide-gray-900/10">
          <Header className="animate-fade-up"
            heading="Your Business"
            crumbs={[
              {
                title: ctx.org,
                href: '#',
                current: false
              },{
              title: 'Your Business',
              href: '/business',
              current: true
            }]}
             />
          <div className="animate-fade-up grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            
            <div className="px-4 sm:px-0">
<br />

              <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>

            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
              <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">http://</span>
                        <input
                          type="text"
                          name="Name"
                          id="Name"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="DisplayName" className="block text-sm font-medium leading-6 text-gray-900">
                      Display Nam
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">http://</span>
                        <input
                          type="text"
                          name="DisplayName"
                          id="DisplayName"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="animate-fade-up grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Branding</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are the branding settings associaed with your organisation.</p>
            </div>

            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
              <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                      Logo
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Primary Colour
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="primary-colour"
                        id="primary-colour"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Secondary Colour
                    </label>
                    <div className="mt-2">
                      <input
                        id="secondary-colour"
                        name="secondary-colour"
                        type="text"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>


                </div>
              </div>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

      
        </div>
      </div>
    </>
  )
}

