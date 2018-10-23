import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Insert_Data } from "../action/Actions.js";
import { connect } from "react-redux";
const styles = theme => ({
  container: {
    display: "block",
    flexWrap: "wrap",
    marginLeft: 40
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class InsertData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lname: "",
      fname: "",
      email: ""
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.Insert_Data({
      first_name: this.state.fname,
      last_name: this.state.lname,
      email: this.state.email
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        name="form"
        autoComplete="off"
        onSubmit={this.onSubmit}
      >
        <div className={classes.container}>
          <TextField
            required
            id="standard-required"
            label="Fisrt Name"
            name="fname"
            placeholder="Fisrt Name"
            onChange={this.handleChange}
            className={classes.textField}
            margin="normal"
          />
        </div>
        <div className={classes.container}>
          <TextField
            required
            id="standard-required"
            label="Last Name"
            name="lname"
            placeholder="Last Name"
            onChange={this.handleChange}
            className={classes.textField}
            margin="normal"
          />
        </div>
        <div className={classes.container}>
          <TextField
            required
            id="standard-required"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            onChange={this.handleChange}
            placeholder="Email"
            className={classes.textField}
            margin="normal"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

InsertData.propTypes = {
  classes: PropTypes.object.isRequired
};

const theme = withStyles(styles)(InsertData);
export default connect(
  null,
  { Insert_Data }
)(theme);
