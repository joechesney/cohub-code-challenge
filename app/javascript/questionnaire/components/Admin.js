import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import EntriesTable from './EntriesTable';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import AuthForm from './AuthForm';
import axios from 'axios';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Admin extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      labelWidth: 0,
      allEntries: [],
      authorized: false,
      username: "",
      password: "",
      warning: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    console.log("submitted!", this.state);
    var headers = {
      "Content-Type": "application/json"
    }
    axios.post(
      `http://localhost:3000/admin`, 
      {
        username: this.state.username,
        password: this.state.password
      }, 
      {headers: headers})
    .then(res => {
      console.log("res", res);
      if(res.data.authorized){
        this.setState({authorized: true})
      } else {
        this.setState({warning: true})
        console.log("not authorized!", this.state)
      }
      // tell user whether their form was successfully submitted or not
    });
}



  render() {
    const { classes } = this.props;
    const { languages } = this.props;
    if(!this.state.authorized){
      return (
        <div>
          <div>You must be authorized to view this page!</div>
          <AuthForm 
            username={this.state.username} 
            password={this.state.password}  
            onClick={this.handleSubmit}
            onChange={this.handleChange}
          />

        </div>
      )
    }else{
      return (
        <div>
            <Query query={LIST_ENTRIES}>
            {({ loading, error, data }) => {
                if (loading) return <div>Loading..</div>;
                if (error) return `Error! ${error.message}`;
                console.log("entries", data.entries);
                return <EntriesTable entries={data.entries}/>
              }
            }
            </Query>
        </div>
      );
    }
  }
}

const LIST_ENTRIES = gql`
        query ListEntries {
            entries: ListEntries {
                id
                full_name
                years_experience
                good_developer
                favorite_language
                other_favorites
            }
        }
    `;


export default withStyles(styles)(Admin);