import React from 'react';


class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
      }

    onChange(e){
        this.props.onChange(e.target.value);
        console.log(e.target.value);

    }
    render(){
        return(
            <input placeholder='Search' type='text' value={this.props.search} onChange={this.onChange}></input>

        );
    }
}

export default SearchForm;
