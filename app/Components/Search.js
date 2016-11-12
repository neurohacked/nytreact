// Include React and React-Router dependencies
import React, {Component} from 'react';
import Router from 'react-router';

// Include the Query and Results componens
import Query from './Search/Query';
import Results from './Search/Results';

// Include the Helper (for the query)
import helpers from '../utils/helpers';

// Create the Main component
class Search extends Component {
    /* Here we set the initial state variables (this allows us to propagate the variables for maniuplation by the children components */
    /* Also note the "resuls" state. This will be where we hold the data from our results */
    constructor(props) {
        super(props);
        this.state = {
            queryTerm: "",
            startYear: "",
            endYear: "",
            results: {}
        };
    }

    // This function gets called if the user searches for a completely new set of parameters (i.e. if any of the search terms changes)
    // If the user searches for the exact same thing, then React will ignore it.
    componentDidUpdate(prevProps, prevState) {

        console.log("COMPONENT UPDATED");
        console.log(this.state.queryTerm);
        console.log(this.state.startYear);
        console.log(this.state.endYear);
        console.log("Previous State", prevState);

        if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear)) {
            helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear).then(function(data) {
                if (data != this.state.results) {
                    this.setState({results: data})
                }
            }.bind(this))
        }
    }
    // This function will be passed down into children components so they can change the "parent"
    // i.e we will pass this method to the query component that way it can change the main component
    // to perform a new search
    setQuery(newQuery, newStart, newEnd) {
        this.setState({queryTerm: newQuery, startYear: newStart, endYear: newEnd});
    }
    // Render the function. Note how we deploy both the Query and the Results
    render() {
        return (
            <div className="main-container">
                {/*Note how we pass the setQuery function to enable Query to perform searches*/}
                <Query updateSearch={this.setQuery.bind(this)}/> {/*Note how we pass in the results into this component*/}
                <Results results={this.state.results}/>
            </div>
        );
    }
};

export default Search;
