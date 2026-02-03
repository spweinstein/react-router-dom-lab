import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  console.log(mailboxId);
  const selectedBox = mailboxes.find((box) => box._id === Number(mailboxId));
  console.log(selectedBox);
  return (
    <div className="mail-box">
      <p>Box Owner: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
