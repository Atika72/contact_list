import ContactList from "@/components/contactList";
import React from "react";

const getContactList = async () => {
  try {
    const contactList = await fetch("http://localhost:3000/api/contact", {
      cache: "no-store",
    });
    return contactList.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  const contacts = await getContactList();
  console.log(contacts);
  return (
    <div>
      <ContactList contactProps={contacts} />
    </div>
  );
};

export default page;
