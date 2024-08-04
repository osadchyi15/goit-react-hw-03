import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import Contact from "./components/Contact/Contact";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filterValue, setFilterValue] = useState("");

  const onAddContact = (contact) => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };

    setContacts([finalContact, ...contacts]);
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const onDeletContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  console.log("contacts", contacts);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <div>
        {contacts.length === 0 ? (
          <div className="addContact">
            <p>Your phonebook is empty.</p>
            <p>Please add your first contact to the phonebook!</p>
          </div>
        ) : (
          <ul>
            {filteredContacts.map((contact) => {
              return (
                <li key={contact.id}>
                  <Contact
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDeletContact={onDeletContact}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
