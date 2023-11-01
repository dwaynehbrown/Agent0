import { Fragment } from 'react'
import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/react/20/solid'
import UsersInvitesEmpty from './users-invites-empty'
import UsersEmpty from './users-empty'

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

export default function UserMembersList( data: any) {

  console.log ('mem ', data)
  return (
    <>
      <div className="sm:flex sm:items-center pt-8">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Organisation Members ({data?.data && data?.data.length })</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the invitations in your organisation including their name, title, email and role.
            </p>
          </div>
      

        </div>

        <UsersEmpty />
        
        </>
  )
}
