import { Component, React } from "react";
import axios from "axios";

class Upload extends Component {
  render() {
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let encoded = reader.result.toString().replace(/^data:(.*,)?/, "");
          if (encoded.length % 4 > 0) {
            encoded += "=".repeat(4 - (encoded.length % 4));
          }
          resolve(encoded);
        };
        reader.onerror = (error) => reject(error);
      });

    const submitHandler = async (e) => {
      e.preventDefault();
      const FirstName = e.target.firstName.value;
      const lastName = e.target.lastName.value;
      const email = e.target.email.value;
      const phone = e.target.phone.value;
      const gitProfile = e.target.gitProfile.value;
      const aboutYou = e.target.about.value;
      const CVFile = await toBase64(e.target.cv.files[0]);
      const coverLetter = await toBase64(e.target.coverLetter.files[0]);
      const liveInUs = e.target.liveinus.value === "on" ? true : false;

      const obj = {
        FirstName,
        lastName,
        email,
        phone,
        liveInUs,
        gitProfile,
        CVFile,
        coverLetter,
        aboutYou,
      };
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
                required
              />
            </div>

            <div className="col-md-6 mb-2">
              <label for="floatingInput">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                required
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
              required
              email
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
                required
                phone
                minLength={10}
              />
            </div>
            <div className="col-md-6 mb-2">
              <label for="floatingPassword">Git Profile</label>
              <input
                type="text"
                className="form-control"
                id="gitProfile"
                placeholder=""
                required
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
              required
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
              <input
                className="form-control"
                type="file"
                id="coverLetter"
                required
              />
            </div>
          </div>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="liveinus"
              required
            />

            <label className="form-check-label mb-2" for="liveinus">
              Do you live in the U.S?
            </label>
            <div className="border-top my-3"></div>
          </div>
          <input type="submit" className="btn btn-primary"></input>
          <span className="" id="spnSuccess"></span>
        </form>
      </div>
    );
  }
}

export default Upload;
