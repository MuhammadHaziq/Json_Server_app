import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { updateData, FetchSpecificData } from "../action/Actions.js";
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

class UpdateEmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: {}
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("match", this.props.match);
    this.props.FetchSpecificData(id);
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ employees: { ...this.state.employees, [name]: value } });
  };
  componentDidUpdate(prevProps) {
    console.log("updated props is", this.props);
    if (prevProps.employee !== this.props.employee) {
      console.log("Updated", this.props.employee);
      this.setState({ employees: this.props.employee });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const id = this.props.match.params.id;
    this.props.updateData(
      {
        first_name: this.state.employees.first_name,
        last_name: this.state.employees.last_name,
        email: this.state.employees.email
      },
      id
    );
  };
  render() {
    const { classes } = this.props;

    console.log(this.props.employee);
    console.log("state data", this.state);

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.onSubmit}
      >
        <div className={classes.container}>
          <TextField
            required
            id="standard-required"
            label="Fisrt Name"
            name="first_name"
            placeholder="Fisrt Name"
            value={this.state.employees.first_name}
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
            name="last_name"
            value={this.state.employees.last_name}
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
            value={this.state.employees.email}
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

UpdateEmp.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    employee: state.employee,
    isLoading: state.isLoading
  };
};
// const UpdateEmp = withStyles(styles)(UpdateEmp);
const theme = withStyles(styles)(UpdateEmp);
export default connect(
  mapStateToProps,
  { updateData, FetchSpecificData }
)(theme);
