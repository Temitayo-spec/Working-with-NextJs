import progress from "../styles/Progress.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";
import Modal from "react-modal";
Modal.setAppElement("body");
class SignIn extends React.Component {
  state = {
    email: "",
    emailtwo: "",
    errors: "",
    err: "",
    password: "",
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  validate = () => {
    const { password, email } = this.state;
    let isValid = true;
    const errors = {};
    if (this.state.email === "" || this.state.password === "") {
      errors.passwordLength = "Fill in the text boxes";
      isValid = false;
    } else if (
      !this.state.email.includes("@") ||
      !this.state.email.includes(".")
    ) {
      errors.passwordLength = "Invalid Email Address";
      isValid = false;
    } else if (password.trim().length < 6) {
      errors.passwordLength = "Password must be of 6 characters or higher";
      isValid = false;
    } else {
      window.location.href = "/mainpage";
    }
    this.setState({ errors });
  };

  check = () => {
    const { emailtwo } = this.state;
    let itsValid = true;
    const err = {};
    if (this.state.emailtwo === "") {
      err.passwordLength = "Fill in the text boxes";
      itsValid = false;
    } else if (
      !this.state.emailtwo.includes("@") ||
      !this.state.emailtwo.includes(".")
    ) {
      err.passwordLength = "Invalid Email Address";
      itsValid = false;
    } else {
      window.location.href = "/changepassword";
      console.log("work");
    }
    this.setState({ err });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeTwo = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeThree = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({ password: "", email: "" });
    }
  };

  onSubmitTwo = (e) => {
    e.preventDefault();
    const isValid = this.check();
    if (isValid) {
      this.setState({ emailtwo: "" });
      console.log("omo");
    }
  };

  //Modal

  render() {
    const { password, errors, err, email, emailtwo } = this.state;
    return (
      <>
        <Modal
          style={{
            overlay: {
              background: "#24274d",
              opacity: 0.95,
            },
            content: {
              color: "#24274d",
              opacity: 0.95,
              background: "#24274d",
              border: "none",
              overflow: "hidden",
              padding: "0",
            },
          }}
          isOpen={this.state.visible}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() =>
            this.setState({
              visible: false,
            })
          }
          ariaHideApp={false}
        >
          <form onSubmit={this.onSubmitTwo} className="modal">
            <div className="modal_wrapper">
              <div className="modal_header">
                <h2>Forgot Password</h2>
              </div>
              <div className="modal_content">
                <div className="modal_body">
                  <label>
                    <p>Email</p>
                  </label>
                  <input
                    type="text"
                    name="emailtwo"
                    onChange={this.onChangeThree}
                    value={emailtwo}
                    required
                  />
                  <p>Enter email address of your registered account</p>

                  {Object.keys(err).map((key) => {
                    return (
                      <div style={{ color: "red" }} key={key}>
                        {err[key]}
                      </div>
                    );
                  })}
                </div>
                <div className="modal_footer">
                  <button type="submit" className="send">
                    SEND EMAIL
                  </button>
                  <button
                    onClick={this.handleCancel}
                    type="submit"
                    className="btn-cancel"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal>
        <div className={styles.register_container}>
          <div className={progress.heading}>
            <header className="title">
              <div className={progress.header}>
                <img src="/image-2.png" />
                <h1>Learnovate</h1>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Soluta commodi placeat ipsam possimus earum ut quia explicabo
                  minus sapiente labore, doloribus laboriosam autem aliquid,
                  pariatur enim porro optio non blanditiis consequatur qui
                  laborum. Sapiente totam, atque enim consequatur animi
                  corrupti.
                </p>
              </div>
            </header>
          </div>

          <form onSubmit={this.onSubmit} className={styles.content}>
            <h2 className={styles.head}>So much to see, sign in now.</h2>
            <div className={progress.row1}>
              <div className="firstname">
                <label htmlFor="">
                  <h3>Email</h3>
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                  required
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="">
                <h3>Password</h3>
              </label>
              <input
                type="password"
                name="password"
                onChange={this.onChangeTwo}
                value={password}
                required
              />
            </div>

            <a className={styles.forgot} onClick={this.showModal}>
              Forgot Password?
            </a>

            {Object.keys(errors).map((key) => {
              return (
                <div style={{ color: "red" }} key={key}>
                  {errors[key]}
                </div>
              );
            })}

            <button
              style={{
                marginTop: "80px",
                marginBottom: "10px",
              }}
              className="btn"
              type="submit"
            >
              <a style={{ color: "white", transition: "all 0.4s ease-in-out" }}>
                Sign In
              </a>
            </button>

            <p className={styles.sign_in}>
              <span>
                <Link href="/">
                  <a>Create an Account Instead</a>
                </Link>
              </span>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default SignIn;
