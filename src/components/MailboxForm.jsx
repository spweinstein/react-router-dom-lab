import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addBox }) => {
  const initialState = {
    boxOwner: "",
    boxSize: "Small",
  };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxOwner">Box Owner</label>
      <input name="boxOwner" id="boxOwner" onChange={handleChange} />
      <label htmlFor="boxSize">Box Owner</label>
      <select name="boxSize" id="boxSize" onChange={handleChange}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MailboxForm;
