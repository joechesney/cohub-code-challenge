import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CssBaseline from "@material-ui/core/CssBaseline";
import YearsExperience from "./YearsExperience.js";
import GoodDevQ from "./GoodDevQ.js";
import FaveLanguage from "./FaveLanguage.js";
import OtherLanguages from "./OtherLanguages.js";
import FullName from "./FullName.js";
import SubmitButton from './SubmitButton.js';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 250,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });


const inlineStyle = {
  display: "block"
};

class Questionnaire extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      faveLanguage: '',
      otherFaveLanguages: [],
      fullName: '',
      yearsOfExperience: '',
      isGoodDev: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    const headers = {
      "Content-Type": "application/json"
    }
    axios.post(`http://localhost:3000/questionnaire`, this.state, {headers: headers})
    .then(res => {
      // tell user whether their form was successfully submitted or not
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <Query query={LIST_QUESTIONS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading..</div>;
            if (error) return `Error! ${error.message}`;
            const questions = data.questions.map(question => {
              if (question.field_type === "string")
                return (
                  <div key={question.id} >
                    <YearsExperience
                      id={question.label}
                      label={question.label}
                      yearsOfExperience={this.state.yearsOfExperience}
                      handleChange={this.handleChange}
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
              <form className={classes.container} noValidate autoComplete="off">
              <ul>
                <div>
                <FullName 
                handleChange={this.handleChange}
                fullName={this.state.fullName}
                label={"What is your full name?"}
                />
                </div>
                {questions}
                <SubmitButton
                    onClick={this.handleSubmit}
                />
              </ul>
              </form>
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
export default withStyles(styles)(Questionnaire);