// Include React and React-Router dependencies
import React, {Component} from 'react';

// Query Component Declaration
class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            start: "",
            end: ""
        };
    }

    // Whenever we detect ANY change in the textbox, we register it.
    handleChange(event) {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    /*This code handles the sending of the search terms to the parent Search component*/
    handleSubmit() {
        this.props.updateSearch(this.state.search, this.state.start, this.state.end);
        return false;
    }

    // Here we render the Query component
    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-newspaper-o" aria-hidden="true"></i> Query</strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                {/*Note how we associate the text-box inputs with the state values*/}
                                <form>
                                    <div className="form-group">
                                        <h4 className="">
                                            <strong>Topic</strong>
                                        </h4>
                                        <input type="text" value={this.state.value} className="form-control " id="search" onChange={this.handleChange.bind(this)} required/>
                                        <h4 className="">
                                            <strong>Start Year</strong>
                                        </h4>
                                        <input type="number" value={this.state.value} className="form-control " id="start" onChange={this.handleChange.bind(this)} required/>
                                        <h4 className="">
                                            <strong>End Year</strong>
                                        </h4>
                                        <input type="number" value={this.state.value} className="form-control " id="end" onChange={this.handleChange.bind(this)} required/>
                                    </div>
                                    {/*Here we create the onClick event that triggers the HandleSubmit*/}
                                    <div className="pull-right">
                                        <button type="button" className="btn btn-danger" onClick={this.handleSubmit.bind(this)}>
                                            <h4>Submit</h4>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Query;
