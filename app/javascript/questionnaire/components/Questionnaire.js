import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CssBaseline from "@material-ui/core/CssBaseline";
import YearsExperience from "./YearsExperience.js";
import GoodDevQ from "./GoodDevQ.js";
import FaveLanguage from "./FaveLanguage.js";
import OtherLanguages from "./OtherLanguages.js";
import FullName from "./FullName.js";
import fastdb from './db-fast.json';


const inlineStyle = {
  display: "block"
};

class Questionnaire extends React.Component {
  constructor(){
    super()
    this.state = {
      faveLanguage: '',
      otherFaveLanguages: [],
      fullName: '',
      yearsOfExperience: '',
      isGoodDev: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    console.log("state changed in Questionnaire")
    if(this.state !== prevState){
      console.log("App state", this.state);
    }
  }

  handleChange = event => {
    console.log("change handled in Questionnaire. event:", event)
    this.setState({ [event.target.name]: event.target.value});
    console.log("inside Questionnaire: ", this.state);
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <Query query={LIST_QUESTIONS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading..</div>;
            if (error) return `Error! ${error.message}`;
            const questions = fastdb.questions.map(question => {
              if (question.field_type === "string")
                return (
                  <div key={question.id} >
                    <YearsExperience
                      id={question.label}
                      label={question.label}
                      yearsOfExperience={this.state.yearsOfExperience}
                    />
                  </div>
                );
              else if (question.field_type === "boolean")
                return (
                  <div key={question.id} style={inlineStyle}>
                    <GoodDevQ
                      id={question.label}
                      label={question.label}
                      isGoodDev={this.state.isGoodDev}
                      handleChange={this.handleChange}
                    />
                  </div>
                );
              else if (question.field_type === "list" && question.multiselect === false)
                return (
                  <div key={question.id} style={inlineStyle}>
                    <FaveLanguage
                      languages={question.options}
                      id={question.label}
                      label={question.label}
                      faveLanguage={this.state.faveLanguage}
                      handleChange={this.handleChange}
                    />

                  </div>
                );
              else if (question.field_type === "list" && question.multiselect === true)
                return (
                  <div key={question.id} style={inlineStyle}>
                    <OtherLanguages
                      languages={question.options}
                      id={question.label}
                      handleChange={this.handleChange}
                      label={question.label}
                    />
                  </div>
                );
              
            });
            return (
                <ul>
                    <div>
                        <FullName 
                        handleChange={this.handleChange}
                        fullName={this.state.fullName}
                        label={"What is your full name?"}
                        />
                    </div>
                    {questions}
                </ul>
                )
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
export default (Questionnaire);