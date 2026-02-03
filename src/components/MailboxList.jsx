import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <ul>
      {mailboxes.map((mailbox) => (
        <li key={mailbox._id}>
          <Link to={`/mailboxes/${mailbox._id}`}> Mailbox {mailbox._id}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MailboxList;
