import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Entry from './Entry';
import gql from "graphql-tag";
import { Query } from "react-apollo";
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
      authorized: false,
      allEntries: []
    };

  }

  componentDidMount() {
    // make ajax call to graphql to get all entries
    // add those entries ot the state
    

    this.setState({
      // labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }



  render() {
    const { classes } = this.props;
    const { languages } = this.props;
    return (
      <div>
        <Query query={LIST_ENTRIES}>
        {({ loading, error, data }) => {
            if (loading) return <div>Loading..</div>;
            if (error) return `Error! ${error.message}`;
            console.log("entries", data.entries);
            // const entries = data.entries.map
          }
        }
        </Query>
        <Entry 

        />
      </div>
    );
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