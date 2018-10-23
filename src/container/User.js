import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FetchData, Delete, FetchSpecificData } from "../action/Actions.js";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

class User extends Component {
  static contextType = {
    router: PropTypes.object
  };

  constructor() {
    super();
    this.state = { employee: [] };
  }
  componentDidMount() {
    this.props.FetchData();
  }

  componentDidUpdate(prevProps) {
    console.log("updated props is", this.props);
    if (prevProps.employee !== this.props.employee) {
      console.log(prevProps.employee);
      console.log("Updated", this.props.employee);
      this.setState({ employee: this.props.employee });
    }
  }

  render() {
    const { classes } = this.props;

    console.log(this.props.employee);

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>FIRST_NAME</TableCell>
              <TableCell>LAST_NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>DELETE</TableCell>
              <TableCell>UPDATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(this.state.employee || []).map(data => {
              return (
                <TableRow key={data.id}>
                  <TableCell component="th" scope="row">
                    {data.id}
                  </TableCell>
                  <TableCell>{data.first_name}</TableCell>
                  <TableCell numeric>{data.last_name}</TableCell>
                  <TableCell numeric>{data.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.button}
                      onClick={() => this.props.Delete(data.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      onClick={() => this.props.FetchSpecificData(data.id)}
                      component={Link}
                      to={`/update/${data.id}`}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
User.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    employee: state.employees,
    isLoading: state.isLoading
  };
};

const theme = withStyles(styles)(User);
export default connect(
  mapStateToProps,
  { FetchData, Delete, FetchSpecificData }
)(theme);
