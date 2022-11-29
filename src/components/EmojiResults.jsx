import React from "react";
import { EmojiApiCall } from "./EmojiApiCall";
import EmojiRow from "./EmojiRow";
function EmojiResults(props) {
  const matches = [];
  EmojiApiCall.forEach((item) => {
    if (
      item.keywords.includes(props.input) &&
      props.input.length &&
      matches.length <= 20
    ) {
      matches.push(item);
    }
  });
  return (
    <div>
      {matches.length
        ? matches.map((input) => (
            <EmojiRow title={input.title} symbol={input.symbol} />
          ))
        : null}
    </div>
  );
}

export default EmojiResults;
