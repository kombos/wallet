import React, { useState } from "react";
import Head from "next/head";
import EarnTable from "../components/EarnTable";

export default function Earn() {
  const [searchValue, setSearchValue] = useState();

  return (
    <>
      <Head>
        <title>Earn | MantleWallet</title>
      </Head>
      <section className="row h-100">
        <div className="col-12 col-lg-8 h-100">
          <div
            className="bg-gray-800 p-3 pb-5 rounded-4 d-flex flex-column gap-2"
            style={{ height: "90%" }}
          >
            <div className="d-flex align-items-center justify-content-between w-100">
              <h1 className="card-title body1 text-primary my-auto">Earn</h1>
            </div>
            <div
              className="d-flex flex-column w-100 nav-bg p-2 rounded-4 flex-grow-1"
              style={{ height: "90%" }}
            >
              <div className="w-100 h-100" style={{ overflow: "auto" }}>
                <EarnTable />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="rounded-4 p-3 my-2 bg-gray-800 width-100 d-flex flex-column ">
            <p>
              To purchase MNTL, visit the exchanges (CEX & DEX) shown to swap
              with your available tokens.
            </p>
            <br></br>
            <p>
              Options to directly on-ramp to MNTL using fiat currencies will be
              coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
