import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CssBaseline from "@material-ui/core/CssBaseline";
import Questionnaire from './Questionnaire';
import Admin from './Admin'


export default class App extends React.Component {
  
  componentDidUpdate(prevProps, prevState){
    if(this.state !== prevState){
      console.log("App state", this.state);
    }
  }

  render() {
    const { classes } = this.props; 
    return (
      <div>
        <CssBaseline />
        <Router>
          <div>
            <Header />

            <Route path="/questionnaire" component={Questionnaire} />
            <Route path="/admin" component={Admin} />
          </div>
        </Router>
        
        
      </div>
    );
  }
}
const Header = () => (
  <ul>
    <li>
      <Link to="/questionnaire">Questionnaire</Link>
    </li>
    <li>
      <Link to="/admin">Admin</Link>
    </li>
  </ul>
);
const LIST_QUESTIONS = gql`
  query ListQuestions {
    questions: ListQuestions {
      id
      label
      position
      field_type
      options
      multiselect
    }
  }
`;
