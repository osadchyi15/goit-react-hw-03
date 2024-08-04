import css from "./Contact.module.css";
import { RiPhoneFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";

const Contact = ({ name, number, onDeletContact, id }) => {
  return (
    <div className={css.contact}>
      <ul className={css.contactDescr}>
        <li className={css.contactName}>
          <IoPerson /> {name}
        </li>
        <li className={css.contactNumber}>
          <RiPhoneFill /> {number}
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          onDeletContact(id);
        }}
        className={css.contactDeletButton}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
