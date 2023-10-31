import React from "react";

function SearchNote(props) {
  return (
    <div>
      <label>
        Search Notes:
        <input
          type="text"
          value={props.searchQuery}
          onChange={(e) => props.setSearchQuery(e.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchNote;
