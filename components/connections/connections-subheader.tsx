import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function ConnectionsSubheader({ heading, subheading }: { heading: any, subheading: any }){
  return (
    <div className="border-b border-gray-200 pb-5">
      <div className="sm:flex sm:items-baseline sm:justify-between p-5">
        <div className="sm:w-0 sm:flex-1">
          <h1 id="message-heading" className="text-base font-semibold leading-6 text-gray-900">
            {heading}
          </h1>
          <p className="mt-1 truncate text-sm text-gray-500">{subheading}</p>
        </div>

        <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
        </div>
      </div>
    </div>
  )
}
