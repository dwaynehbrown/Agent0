import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

import { getSession } from '@auth0/nextjs-auth0';
import Changelog from "./changelog/page";

export default async function Home() {

  const { user } = await getSession() || {};

  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));


  const features = [
    {
      title: "Beautiful, reusable components",
      description:
        "Pre-built beautiful, delegated admin UI, powered by [Auth0](https://auth0.com/), [Next JS](https://nextjs.org/), and [Tailwind CSS](https://tailwaindcss.com/)",
      large: true,
    },
    {
      title: "Open Source",
      description:
        "Host, reproduce and improve as you need.",
      demo: <WebVitals value={100} />,
    }];

return (
  <>
    {!user && (<>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">

        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >

          Introducing Agent0
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Open Source Delegated Admin for Auth0</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Let your customers manage their own identities all by themselves.
          </Balancer>
        </p>
        {/* <div
            className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <a
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
            <a
              className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
              href="https://github.com/steven-tey/precedent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              <p>
                <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
                <span className="font-semibold">{nFormatter(stars)}</span>
              </p>
            </a>
          </div> */}
      </div>

      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <a href={DEPLOY_URL}>
                  <Image
                    src="/auth0.png"
                    alt="Auth0 logo"
                    width={120}
                    height={30}
                    unoptimized
                  />
                </a>
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}




      </div>
      <Changelog />

    </>)}


    {
      user && <>
        <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      
          <a
            href="https://twitter.com/steventey/status/1613928948915920896"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <Balancer className="text-[#1d9bf0]">Open Source Delegated Admin for Auth0</Balancer>

          </a>
          <h1
            className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Welcome to  Agent0
          </h1>
          <p
            className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Let your customers manage their Organisations, Connections, login experience, user memberships, roles and much more.
            </Balancer>
          </p>
          <div
            className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-green-500 bg-green-500 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
              href="/dashboard"
              target="_top"
              rel="noopener noreferrer"
            >
              <p>Continue</p>
            </a>


          </div>
        </div>
      </>
    }
  </>
);

}
