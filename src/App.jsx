// src/App.jsx
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router";
import MailboxList from "./components/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm.jsx";
const App = () => {
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
        <Route path="/mailboxes" element={<MailboxList mailboxes={[]} />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
      </Routes>
    </>
  );
};

export default App;
