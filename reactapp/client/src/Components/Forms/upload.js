import { Component, React } from "react";
import axios from "axios";

class Upload extends Component {
  render() {
    const submitHandler = (e) => {
      e.preventDefault();
      const FirstName = e.target.firstName.value;
      const LastName = e.target.lastName.value;
      const obj = { FirstName, LastName };
      axios
        .post("http://localhost:5290/api/uploadcv", {
          obj,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="d-flex justify-content-center">
        <form
          className="container mt-3 col-md-5 col-md-offset-5 mb-3 card p-4 bg-white"
          onSubmit={submitHandler}
        >
          <h5 className="text-center">Upload CV</h5>
          <div className="border-top my-3"></div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <label for="floatingInput">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
              />
            </div>

            <div className="col-md-6 mb-2">
              <label for="floatingInput">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
              />
            </div>
          </div>
          <div className="form-floating mb-2">
            <label for="floatingInput">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder=""
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <label for="floatingPassword">Phone</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder=""
              />
            </div>
            <div className="col-md-6 mb-2">
              <label for="floatingPassword">Git Profile</label>
              <input
                type="text"
                className="form-control"
                id="gitProfile"
                placeholder=""
              />
            </div>
          </div>
          <div className="form-floating mb-2">
            <label for="floatingPassword">About You</label>
            <input
              type="text"
              className="form-control"
              id="about"
              placeholder=""
            />
          </div>

          <div className="row">
            <div className="mb-2 col-md-6">
              <label for="formFile" className="form-label">
                Upload CV
              </label>
              <input className="form-control" type="file" id="cv" />
            </div>
            <div className="mb-2 col-md-6">
              <label for="formFile" className="form-label">
                Upload Cover Letter
              </label>
              <input className="form-control" type="file" id="coverLetter" />
            </div>
          </div>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="liveinus"
            />

            <label className="form-check-label mb-2" for="liveinus">
              Do you live in the U.S?
            </label>
            <div className="border-top my-3"></div>
          </div>
          <input type="submit" className="btn btn-primary"></input>
        </form>
      </div>
    );
  }
}

export default Upload;
