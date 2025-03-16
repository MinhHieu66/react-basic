import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo.png";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
    console.log(">>> Check users delete: ", user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  // HOC: higher order comonent
  render() {
    console.log(">>> Check props: ", this.props);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello from from Hompage with Mr Hieu</div>
        <div>
          <img style={{ width: 100 }} src={logo}></img>
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} {item.name} &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}
// export default withRouter(Home);
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
