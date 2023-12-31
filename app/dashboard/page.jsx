import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

import { LoadingDots, Google } from "@/components/shared/icons";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSession, getAccessToken } from '@auth0/nextjs-auth0';

import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import OrgsMiniList from "@/components/dashboard/orgs-mini-list";
import { access } from "fs";
import axios from "axios";
import { DEPLOY_URL } from "@/lib/constants";
export default withPageAuthRequired(async function Dashboard() {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  let userOrgs = [];

  const { user } = await getSession();

  let showOrgsMini = false;

  if (!user) {

    console.log('no session');

  } else {

    try {

      const token = await getAccessToken();

      console.log('fe ', token.accessToken)

      if (token?.accessToken) {
        let getUserOrgs = await axios.get(`${process.env.AUTH0_BASE_URL}/api/user/organisations/`, {
          headers: {
            authorization: 'Bearer ' + token?.accessToken
          }
        })

        showOrgsMini = true;

        // console.log ('got user orgs ',JSON.stringify( getUserOrgs.data));
        userOrgs = [...getUserOrgs.data];

      }
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">

        <a
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Delegated Admin
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer user={{ ...user }}>Welcome, {user.name}</Balancer>
        </h1>

        {user && user?.org_id && <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-red-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"

            rel="noopener noreferrer"
          >
            <p>
              {/* <span className="hidden sm:inline-block">Something not working?</span>
              <span className="font-semibold">&nbsp;Get help</span> */}

              <span className="hidden sm:inline-block">You are currently managing</span>
              <span className="font-semibold">&nbsp;{userOrgs && userOrgs.filter((org) => org.id == user?.org_id)[0]?.display_name}</span>

            </p>
          </a>

        </div>}

        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <span><a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
              href={DEPLOY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-4 w-4 group-hover:text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L20 20H4L12 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Deploy to Vercel</p>
            </a>
            </span>

            <span><a href="https://app.netlify.com/start/deploy?repository=https://github.com/dwaynehbrown/Agent0">
              <Image src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" width="150" height="90" />
</a>
            </span>
          </Balancer>
          <Balancer>
            <span className="hidden sm:inline-block">Having trouble?</span>
            <span className="font-semibold">&nbsp;Get help</span>
          </Balancer>
        </p>
      </div>
      <div className="p-12 animate-fade-up">

        <div>
          {/* <h2 className="text-base font-semibold leading-6 text-black-900">Projects</h2>
          <Balancer style={{position: 'absolute'}}> You haven’t created a project yet. Get started by selecting a template or start from an empty project.</Balancer> */}

          {
            user && user.org_id && <>
              <ul role="list" className="animate-fade-up mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
                {items.map((item, itemIdx) => (

                  <li key={itemIdx} className="flow-root">
                    <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                      <div
                        className={classNames(
                          item.background,
                          'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                        )}
                      >
                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          <a href={item?.href} className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <span>{item.title}</span>
                            <span aria-hidden="true"> &rarr;</span>
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          }

          <div className="mt-4 flex">
            {(userOrgs && userOrgs?.length > 0) && <>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                You also have access to the following Organisations
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </>}

          </div>
          <div className="mt-4 flex">

            {
              !showOrgsMini && <>

                <LoadingDots color="#808080" />
              </>
            }
            {
              showOrgsMini && <OrgsMiniList orgs={userOrgs.filter(org => org.id != user?.org_id)} />
            }


          </div>
        </div>

      </div>
    </>
  );
})


const items = [
  {
    title: 'Manage your business details',
    description: 'We only need a few details.',
    icon: Bars4Icon,
    background: 'bg-pink-500',
    href: "/business"
  },
  {
    title: 'Control how your users will authenticate',
    description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
    icon: CalendarIcon,
    background: 'bg-yellow-500',
    href: "/connections"
  },
  // {
  //   title: 'Manage your user roles',
  //   description: 'Define your RBAC model',
  //   icon: PhotoIcon,
  //   background: 'bg-green-500',
  //   href: "/roles"
  // },
  {
    title: 'Invite & Manage your users',
    description: 'Provision, update and reset user accounts',
    icon: ViewColumnsIcon,
    background: 'bg-blue-500',
    href: "/users"
  },
  // {
  //   title: 'Create a Spreadsheet',
  //   description: 'Lots of numbers and things — good for nerds.',
  //   icon: TableCellsIcon,
  //   background: 'bg-indigo-500',
  // },
  // {
  //   title: 'Create a Timeline',
  //   description: 'Get a birds-eye-view of your procrastination.',
  //   icon: ClockIcon,
  //   background: 'bg-purple-500',
  // },
]