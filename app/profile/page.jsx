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

        <div
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

              <span className="hidden sm:inline-block">{user.sub}</span>
              <span className="font-semibold">&nbsp;{userOrgs && userOrgs.filter((org) => org.id == user?.org_id)[0]?.display_name}</span>

            </p>
          </a>
        </div>

        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
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

      
  

        </div>

      </div>
    </>
  );
})

