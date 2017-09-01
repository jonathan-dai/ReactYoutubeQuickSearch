import React, { Component } from 'react'; //{ Component} is to clean up the code syntax so we don't have to write React.Component everytime and just use Component

//class-based components
// Define a new class called SearchBar and give it access to all of
// the functionalities that React.Component has.
// In other words, it gives our SearchBar a bunch of functionalities from React.Component
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: ''}; //Only in our constructor function do we change our state like this
  }

  render() {
    return (
    <div className="search-bar">
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
    </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}
export default SearchBar;
