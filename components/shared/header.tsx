import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { HomeIcon } from '@heroicons/react/20/solid'
import { userAgentFromString } from 'next/server'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ crumbs, heading, userOrg }: { crumbs: any, heading: string, userOrg: any }) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        {/* <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            {
              crumbs && crumbs.length > 0 && crumbs.map((crumb, i) => <>
                <li>
                  <div className="flex">
                    {(i > 0) && <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-black-500" aria-hidden="true" />}

                    <a href={crumb.href} className="text-sm font-medium text-black-300 hover:text-black">
                      { crumb.title }
                    </a>


                  </div>
                </li>
              </>)
            }
          </ol>
        </nav>
         */}


        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol role="list" className="flex space-x-4 rounded-md bg-white px-6 shadow">
            <li className="flex">
              <div className="flex items-center">
                <a href="/dashboard" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            {crumbs.map((crumb: any, i: any) => (
              <li key={crumb?.title} className="flex">
                <div className="flex items-center" >
                  <svg
                    className="h-full w-6 flex-shrink-0 text-gray-200"
                    viewBox="0 0 24 44"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                  </svg>
                  <a
                    href={crumb.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    style={{color: (i == 0) ? userOrg?.branding?.colors?.primary : 'black'}}
                    aria-current={crumb.current ? 'page' : undefined}
                  >
                    {crumb.title} 
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>



        <h2 className="mt-2 text-2xl font-bold leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight">
          {heading}
        </h2>

        {/* <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
            $120k – $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
            Closing on January 9, 2020
          </div>
        </div> */}

      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        {/* <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/20"
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Edit
          </button>
        </span>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/20"
          >
            <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            View
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Publish
          </button>
        </span> */}

      </div>
    </div>
  )
}