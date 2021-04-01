import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard"

class EmployeeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChart: []
        };
        this.compare = (a,b) => {
            if ( a.name.first + a.name.last < b.name.first + b.name.last){
                return -1;
              }
              if ( a.name.first + a.name.last > b.name.first + b.name.last ){
                return 1;
              }
              return 0;
        };
    }
    render() {
        var searchChart = []
        for (let i = 0; i < this.props.employeeList.length; i++) {
            var sanitizedName = this.props.employeeList[i].name.first.toLowerCase() + " " + this.props.employeeList[i].name.last.toLowerCase()
            if (sanitizedName.includes(this.props.search.toLowerCase())) {
                searchChart.push(this.props.employeeList[i])
            }
        }
        if (this.props.alphabetical) {
            searchChart.sort(this.compare)
        }
        return (
            <ul >
                {searchChart.map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last} picture={employee.picture.large} email={employee.email} phone={employee.cell} />)}
            </ul>
        )
    }
}

export default EmployeeChart