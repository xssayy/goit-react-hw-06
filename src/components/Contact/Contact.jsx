import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <>
      <p>
        <FaUser /> {name}
      </p>
      <p>
        <FaPhoneAlt /> {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;
