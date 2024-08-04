import { useEffect, useState } from "react";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeletContact }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDeletContact={onDeletContact}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
