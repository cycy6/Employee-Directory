import React, { Component } from "react";
import API from "./utils/API"
import EmployeeChart from "./components/EmployeeChart"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchInput: "",
    };

    this.changeSearch = (event) => {
      this.setState({
        ...this.state,
        searchInput: event.target.value
      }
      );
    };
    this.toggleAlphabet = (event) => {
      event.preventDefault()
      this.setState({
        ...this.state,
        alphabetical: true
      })
    }
  }


  componentDidMount() {
    API.getRandomEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">

      <h1 className="text-center" >Employee Directory</h1>
        <div className="row">
          <div className="col-6">
            <span >
              <label><h3>Search by Name:</h3></label>
              <input value={this.state.searchInput} onChange={this.changeSearch} style={{ maxWidth: "540px" }}></input>
            </span>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={this.toggleAlphabet} style={{ maxWidth: "540px" }}>Sort Employees Alphabetically</button>
          </div>
        </div>

        <EmployeeChart employeeList={this.state.employees} search={this.state.searchInput} alphabetical={this.state.alphabetical} />

      </div>
    )
  }
}

export default App;