import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CssBaseline from "@material-ui/core/CssBaseline";
import YearsExperience from "./YearsExperience.js";
import GoodDev from "./GoodDev.js";
import FaveLanguage from "./FaveLanguage.js";
import fastdb from './db-fast.json';

console.log(fastdb);


// const questions = data.questions.map(question => (
//   <li key={question.id}>
//     <label htmlFor={question.id}>{question.label}</label>
//     <input name={question.id} type={question.field_type}></input>
//   </li>
// ));
const inlineStyle = {
  display: "block"
};
const questions = fastdb.questions.map(question => {
  if (question.field_type === "string")
    return (
      <div key={question.id} >
        <YearsExperience
          id={question.label}
          label={question.label}
        />
      </div>
    );
  else if (question.field_type === "boolean")
    return (
      <div key={question.id} style={inlineStyle}>
        <GoodDev
          id={question.label}
        />
      </div>
    );
  else if (question.field_type === "list" && question.multiselect === false)
    return (
      <div key={question.id} style={inlineStyle}>
        <FaveLanguage
          languages={question.options}
          id={question.label}
        />
      </div>
    );
});
export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <CssBaseline />
        {/* <Query query={LIST_QUESTIONS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading..</div>;
            if (error) return `Error! ${error.message}`;
            
          }}
        </Query> */}
        
        <ul>{questions}</ul>
        
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
