import { useState } from "react";

const MailboxForm = ({ addMailbox }) => {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //   const handleSubmit = (event) => {

  //   }

  return (
    <form>
      <label htmlFor="boxOwner">Box Owner</label>
      <input name="boxOwner" id="boxOwner" />
      <label htmlFor="boxSize">Box Owner</label>
      <select name="boxSize" id="boxSize">
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </form>
  );
};

export default MailboxForm;
