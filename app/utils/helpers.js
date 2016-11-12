// Include the Axios library for HTTP requests
import axios from 'axios';

// NYT API Key
const APIKey = "cad239ff413d4be4801628605ed683b2";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  // This will run API query.
  runQuery: function(term, start, end)  {

    // Adjust to get search terms in proper format
    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim() + "1231";

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': APIKey,
          'q': term,
          'begin_date': start,
          'end_date': end
      }
    })

    .then(function(results){
      console.log("Axios Results", results.data.response);

      return results.data.response;

    });
  },

  getSaved: function(){

    return axios.get('/api/saved')
      .then(function(results){
        console.log("axios results", results);
        return results;
      })
  },

  postSaved: function(title, date, url){

    var newArticle = {title: title, date: date, url: url};
    return axios.post('/api/saved', newArticle)
      .then(function(results){
        console.log("axios results", results._id);
        return results._id;
      })

  },

  deleteSaved: function(title, data, url){

    return axios.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(function(results){
      console.log("axios results", results);
      return results;
    })
  }

}

export default helpers;
