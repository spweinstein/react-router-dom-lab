// src/App.jsx
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router";
import MailboxList from "./components/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";

import { useState } from "react";
const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const addBox = (newBox) => {
    setMailboxes((prevMailboxes) => {
      newBox._id = prevMailboxes.length + 1;
      return [...prevMailboxes, newBox];
    });
  };

  return (
    <>
      <h1>React Router DOM Lab</h1>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
