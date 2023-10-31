import React from "react";

function ViewOption(props) {
  return (
    <div>
      <label>
        View Option:
        <select
          value={props.viewOption}
          onChange={(e) => props.setViewOption(e.target.value)}
        >
          <option value="all">All Notes</option>
          <option value="selected">Selected Notes</option>
          <option value="unselected">Unselected Notes</option>
        </select>
      </label>
    </div>
  );
}

export default ViewOption;
