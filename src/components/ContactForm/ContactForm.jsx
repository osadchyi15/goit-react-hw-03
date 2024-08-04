import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required!")
    .min(3, "To short!")
    .max(50, "To long!"),
  number: Yup.string()
    .min(1, "To short!")
    .matches(phoneRegExp, "Format 'xxx-xx-xx'")
    .required("Required!"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactsObject = {
      name: values.name,
      number: values.number,
    };

    onAddContact(contactsObject);

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactValidationSchema}
    >
      {({ values, errors }) => {
        return (
          <Form className={css.contactForm}>
            <label className={css.contactFormLabel}>
              <span className={css.contactFormTitle}>Name</span>

              <Field
                className={css.contactFormInput}
                placeholder="Name Surname"
                name="name"
              />
              <ErrorMessage
                className={css.errorText}
                name="name"
                component="span"
              />
            </label>

            <label className={css.contactFormLabel}>
              <span className={css.contactFormTitle}>Number</span>

              <Field
                className={css.contactFormInput}
                placeholder="xxx-xx-xx"
                name="number"
              />
              <ErrorMessage
                className={css.errorText}
                name="number"
                component="span"
              />
            </label>

            <button type="submit" className={css.ContactFormSubmitButton}>
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
