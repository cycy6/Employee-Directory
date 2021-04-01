import React, { Component } from "react";

class EmployeeCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="card mt-3" style={{border: "2px solid black"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={this.props.picture} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Name: {this.props.firstName} {this.props.lastName}</h5>
                                <p className="card-text">Email Address: {this.props.email}</p>
                                <p className="card-text">Phone Number: {this.props.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default EmployeeCard