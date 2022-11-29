import React from "react";

function EmojiRow(props) {
  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(props.symbol);
      }}
    >
      <span>{props.symbol}</span>
      <span>{props.title}</span>
    </div>
  );
}

export default EmojiRow;
