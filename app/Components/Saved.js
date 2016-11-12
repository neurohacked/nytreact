// Include React and React-Router dependencies
import React, {Component} from 'react';
import Router from 'react-router';

// Include the Helper (for the saved recall)
import helpers from '../utils/helpers';

import moment from 'moment';

// Create the Main component
class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedArticles: ""
        };
    }

    componentDidMount() {
        helpers.getSaved().then(function(articleData) {
            this.setState({savedArticles: articleData.data});
            console.log("saved results", articleData.data);
        }.bind(this))
    }

    // This code handles the sending of the search terms to the parent Search component
    handleClick(item, event) {
        // Delete the list!
        helpers.deleteSaved(item.title, item.date, item.url).then(function(data) {
            // Get the revised list!
            helpers.getSaved().then(function(articleData) {
                this.setState({savedArticles: articleData.data});
                console.log("saved results", articleData.data);
            }.bind(this))
        }.bind(this))
    }

    render() {
        if (this.state.savedArticles == "") {
            return (
                <li className="list-group-item">
                    <h3>
                        <span>
                            <em>Save your first article...</em>
                        </span>
                    </h3>
                </li>
            );
        } else {
            var articles = this.state.savedArticles.map(function(article, index) {
                return (
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>
                                <span>
                                    <em>{article.title}</em>
                                </span>
                                <span className="btn-group pull-right">
                                    <a href={article.url} target="_blank">
                                        <button className="btn btn-default">View Article</button>
                                    </a>
                                    <button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Delete</button>
                                </span>
                            </h3>
                            <p>Date Published: {moment(article.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </li>
                    </div>
                )
            }.bind(this))
        }
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {articles}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Saved;
