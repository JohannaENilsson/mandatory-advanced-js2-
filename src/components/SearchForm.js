import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.value);
    console.log(e.target.value);
  }
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <input
        placeholder="Search"
        type="text"
        value={this.props.search}
        onChange={this.onChange}
        className={'search'}
      ></input>
    );
  }
}

export default SearchForm;
