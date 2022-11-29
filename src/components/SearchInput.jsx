import React from "react";
import EmojiResults from "./EmojiResults";

export default class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} />
        <EmojiResults input={this.state.text} />
      </div>
    );
  }
}
