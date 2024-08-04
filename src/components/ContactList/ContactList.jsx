import { useEffect, useState } from "react";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ filteredContacts }) => {
  return (
    <ul>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
