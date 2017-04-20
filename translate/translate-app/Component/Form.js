// Include React
var React = require("react");

// This is the Form, our main component. It includes the banner and form element
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { text: "", text2: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // Here we descibe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Kit's Internationalization</h2>
            <p>
              <em>What you want to Translate?</em>
            </p>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Form</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h4 className="">
                      <strong>Choose a Language</strong>
                    </h4>
                    {/*
                      Note how each of the form elements has an id that matches the state.
                      This is not necessary but it is convenient.
                      Also note how each has an onChange event associated with our handleChange event.
                    */}
                    <select>
                      <option selected value="cn-TW">Chinese Taiwan</option>
                      <option value="fr">French</option>
                      <option value="cn">Chinese</option>
                      <option value="sp">Spanich</option>
                    </select>

                    <a onClick={this.doSomething} href="#" >Translate</a>


                    <h4>
                      <strong>Text 2 -- user input</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.text2}
                      className="form-control"
                      id="text2"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Translated Language</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h2>
                      {this.state.text2}
                    </h2>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


  }
ReactDOM.render(<Form />document.getElementById('root'));

});

// Export the component back for use in other files
module.exports = Form;