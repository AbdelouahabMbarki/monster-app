import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchField: "",
      monsters: [],
    };

  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          monsters: data,
        })
      )
      .catch((err) => {
        console.error();
      });
  }
  onChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonster= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    console.log(this.state.searchField);
    return (
      <div className="App">
        <h1>Monster App</h1>  
        <SearchBox placeholder='search a monster' handlechange={this.onChange}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
