const MailboxList = ({ mailboxes }) => {
  return (
    <ul>
      {mailboxes.map((mailbox) => (
        <li>{mailbox.name}</li>
      ))}
    </ul>
  );
};

export default MailboxList;
