import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };
  return (
    <div>
      <p>Ticket Sales</p>
      <input
        placeholder="Find your favorite event"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
};

export default Navbar;
