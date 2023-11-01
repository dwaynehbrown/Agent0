'use client';

import { ArrowRightOnRectangleIcon, EllipsisVerticalIcon } from '@heroicons/react/20/solid'

import { useOrgSwitchModal } from "../../components/layout/org-switch-modal";
import Image from 'next/image';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function OrgsMiniList(userOrgs: any, user: any) {

  console.log ('user ', user);
  const { OrgSwitchModal, setShowOrgSwitchModal, setFocusOrgSwitchModal } = useOrgSwitchModal();

  return (

    <>

      <OrgSwitchModal
      />
      <div>




        {/* user is not in an org context and has no orgs */}
        {/* user is in org context and has no more orgs assigned */}
        {userOrgs && userOrgs?.orgs?.length == 0 && <> You aren&apos;t assigned to any other organisations.</>}


        {/* user is in org context and has one or more orgs assigned */}
        {/* user is not in an org context and has more than one org */}
        {(userOrgs && userOrgs?.orgs?.length > 1) || (userOrgs && userOrgs?.orgs?.length > 0 && !user?.org_id) && <>


          <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {userOrgs && userOrgs.orgs.length > 0 && userOrgs?.orgs?.map((org: any) => (
              <li key={org?.display_name} className="col-span-1 flex rounded-md shadow-sm" onClick={() => { setShowOrgSwitchModal(true); setFocusOrgSwitchModal(org) }} >
                <div

                  className={classNames(
                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                  )}
                >
                  <Image src={org?.branding?.logo_url} alt="org logo" width="90" height="75" />
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a href={org?.href} className="font-medium text-gray-900 hover:text-gray-600">
                      {org?.name}
                    </a>
                    <p className="text-gray-500">{org?.id} </p>
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">Open options</span>
                      <ArrowRightOnRectangleIcon className="h-5 w-5" aria-hidden="true" style={{ color: org?.branding?.colors?.primary }} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

        </>}
      </div>
    </>
  )
}
