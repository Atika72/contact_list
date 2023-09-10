"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavHamburger = () => {
  const menu = [
    {
      link: "/create-contact",
      label: "Create-Contact",
    },
    {
      link: "/contact-list",
      label: "Contact-List",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="gap-6 md:flex hidden font-medium">
        {menu.map((item) => (
          <Link
            className="font-medium  text-teal-700 hover:text-black "
            href={item.label}
            key={item.label}
          >
            {item.label}
          </Link>
        ))}
      </div>
      {openMenu ? (
        <Image
          onClick={() => setOpenMenu(false)}
          className="md:hidden"
          src={"/assets/close-circle-outline.svg"}
          alt=""
          height={25}
          width={25}
        />
      ) : (
        <Image
          onClick={() => setOpenMenu(true)}
          className="md:hidden"
          src={"/assets/menu-outline.svg"}
          alt=""
          height={25}
          width={25}
        />
      )}

      {openMenu && (
        <div className="flex flex-col w-44 p-5 justify-center gap-6 z-10 bg-white rounded-lg shadow left-44 top-16 absolute">
          {menu.map((item) => (
            <Link href={item.label} key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavHamburger;
