import dynamic from "next/dynamic";
import React from 'react';
import Navbar from "./navbar";

const NoSSRWrapper = (props : any)  => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default async function Nav() {

  return <Navbar session={{}} />
}
