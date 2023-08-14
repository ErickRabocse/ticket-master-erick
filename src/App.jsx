import "./App.css";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import SignUpForm from "./components/SignupForm";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleNavSearch = (term) => {
    setSearchTerm(term);
  };
  console.log(searchTerm, 10);
  return (
    <>
      {/* <Navbar onSearch={handleNavSearch} />
      <Events searchTerm={searchTerm} /> */}
      <SignUpForm />
    </>
  );
}

export default App;
