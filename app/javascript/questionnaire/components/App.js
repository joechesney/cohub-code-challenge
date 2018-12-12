import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <CssBaseline />
        <Query query={LIST_QUESTIONS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading..</div>;
            if (error) return `Error! ${error.message}`;
            

            const questions = data.questions.map(question => (
              <li key={question.id}>
                <label htmlFor={question.id}>{question.label}</label>
                <input name={question.id} type={question.field_type}></input>
              </li>
            ));
            
            return <ul>{questions}</ul>;
          }}
        </Query>
      </div>
    );
  }
}

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
