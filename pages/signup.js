import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";
import Footer from "./Footer";

const SignUp = () => {
  return (
    <>
      <main className="flex-shrink-0">
        <Navbar></Navbar>
        <div className="container p-5 maximize-height">
          <div className="text-center mb-3">
            <h2 className="fw-bolder">Sign Up</h2>
          </div>
          <div className="d-flex justify-content-center">
            <form>
              <div className="form-group mb-2">
                <label for="exampleInputEmail1">First Name<sup className="text-danger">*</sup>:</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>

              <div className="form-group mb-2">
                <label for="exampleInputEmail1">Surname:</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              

              <div className="form-group mb-2">
                <label for="exampleInputEmail1">Email address:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>

              <div className="form-group mb-2">
                <label for="exampleInputPassword1">Password:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>

              <div className="form-group mb-2">
                <label for="exampleInputPassword1">Confirm Password:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>


              <button type="submit" className="btn btn-outline-success w-100">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
};

export default SignUp;
