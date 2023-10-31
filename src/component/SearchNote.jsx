import React from "react";

function SearchNote({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <label>
        Search Notes:
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchNote;
