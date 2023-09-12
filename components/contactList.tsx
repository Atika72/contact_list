import React from "react";
import Image from "next/image";
import { ContactType } from "@/app/types/contactType";

interface Props {
  contactProps: ContactType[];
}

const ContactList = ({ contactProps }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-teal-600 flex items-center pb-2 pr-2 border-b-2 border-teal-700 uppercase">
          <Image
            src="/assets/address-book.svg"
            alt=""
            height={15}
            width={15}
            className="mr-3"
          />
          <a href="#" className="font-semibold inline-block">
            Contact List
          </a>
        </div>
        <a href="#">See All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* CARD 1 */}
        {contactProps.map((item) => (
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="/assets/human.png"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Call
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                {item.name}
              </a>
              <p className="text-gray-500 text-sm">{item.phone}</p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <Image
                  src={"/assets/map-outline.svg"}
                  alt=""
                  height={20}
                  width={20}
                />
                <span className="ml-1">{item.address}</span>
              </span>
              <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg
                  className="h-5 pr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                <Image
                  className="pl-1"
                  src={"/assets/edit.svg"}
                  alt=""
                  height={25}
                  width={25}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
