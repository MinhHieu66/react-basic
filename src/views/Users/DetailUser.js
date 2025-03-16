import React, { use } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };

  handleBackButton = () => {
    this.props.history.push("/user/");
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log(">>> Check: ", res);
    }
  }

  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>
          Hello word from detail user with id: {this.props.match.params.id}
        </div>
        {isEmptyObj === false && (
          <>
            <div>
              User's name: {user.first_name} - {user.last_name}
            </div>
            <div>User's email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackButton()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
