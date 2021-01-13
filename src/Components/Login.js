import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { adminPassword } from "../validation";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    pasword: ""
  };
  logIn = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    //console.log(this.state);

    if (email === "" && password === "")
      alert("email and password can not be null");
    else {
      if (
        email === adminPassword.email &&
        password === adminPassword.password
      ) {
        //alert("correct");
        this.props.dispatch({
          type: "LOGIN",
          payload: true
        });
        this.setState({ redirect: true });
      } else {
        alert("email and Password is not correct");
      }
    }
  };

  render() {
    //console.log("islogin state", this.props.isLoggedIn);
    if (this.state.redirect) return <Redirect to="/home" />;
    return (
      <div>
        <div className="my-5">
          <h1 className="text-center"> Login</h1>
          <h6 className="text-center text-danger">Email Id: raj@gmail.com</h6>
          <h6 className="text-center text-danger">password: 123</h6>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form action="/action_page.php">
                {!this.props.isLoggedIn && (
                  <div>
                    <div class="form-group">
                      <label for="email">Email address:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="Email Id"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input
                        type="password"
                        class="form-control"
                        id="pwd"
                        placeholder="password"
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn-get-started"
                      onClick={(e) => this.logIn(e)}
                    >
                      Login
                    </button>
                  </div>
                )}
                {this.props.isLoggedIn && <div>you're logged in now</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log("redux state", state);
  return {
    isLoggedIn: state.isLoggedIn
  };
};
export default connect(mapStateToProps)(Login);
