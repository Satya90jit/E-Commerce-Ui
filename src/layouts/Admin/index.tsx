import Head from "next/head";
import React from "react";
import AdminNavbar from "./AdminNavbar";
import Drawer from "./Drawer";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const AdminLayout = ({ children = <></>, title = "" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="relative max-w-[1920px] w-full h-full flex items-start justify-between mx-auto">
        <Drawer />
        <section className="w-full">
          <AdminNavbar />
          <article className="h-[calc(100vh-75px)] overflow-y-scroll md:px-6 px-2 bg-gray-50">
            {children}
          </article>
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
