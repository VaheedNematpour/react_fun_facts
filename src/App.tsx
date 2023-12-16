import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  const [dark, setDark] = useState(false);
  const facts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100k stars on Github",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps",
  ];

  return (
    <div
      className={`min-h-screen px-6 py-12 ${
        dark ? "bg-slate-800" : "bg-slate-100"
      }`}
    >
      <header>
        <Navbar dark={dark} onDark={() => setDark(!dark)} />
      </header>
      <main>
        <Main dark={dark} facts={facts} />
      </main>
    </div>
  );
};

export default App;
