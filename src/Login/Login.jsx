import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { auth} from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authObj) => {
          history.push("/chat");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(email);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {

        if (auth) {
          console.log(auth);
          history.push("/chat");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <form>
                            <h4 class="mb-4 pb-3 " style={{ color: "white" }}>
                              Log In
                            </h4>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-style"
                                placeholder="Your Username"
                                id="lusername"
                                autocomplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <i class="input-icon uil uil-at"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                class="form-style"
                                placeholder="Your Password"
                                id="lpassword"
                                autocomplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <i class="input-icon uil uil-lock-alt"></i>
                            </div>

                            <button class="btn mt-4 sub" onClick={signIn}>
                              Login
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3" style={{ color: "white" }}>
                            Sign Up
                          </h4>
                          <form>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-style"
                                placeholder="Your First Name"
                                id="rusername"
                                autocomplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <i class="input-icon uil uil-user"></i>
                            </div>

                            <div class="form-group mt-2">
                              <input
                                type="password"
                                class="form-style"
                                placeholder="Your Password (no spaces allowed)"
                                id="rpassword"
                                autocomplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>

                            <button class="btn mt-4 sub" onClick={register}>
                              Sign Up
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
