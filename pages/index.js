import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import Axios from "axios";
import Router, { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";

import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPending, setIsPending] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setIsPending(true);

    // POST method to Node Server
    const res = await Axios.post("http://192.168.254.115:3001/signup", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    cookieCutter.set("jwt", res.data.token);

    if (res.data.message === "The Email is already in use.") {
      iziToast.error({
        title: "Error",
        message: res.data.message,
        position: "topCenter",
      });
      setIsPending(false);
      return;
    }

    if (res.data.message === "Password and Confirm Password doesn't match.") {
      iziToast.error({
        title: "Error",
        message: res.data.message,
        position: "topCenter",
      });
      setIsPending(false);
      return;
    }

    console.log(res);
    Router.push("/dashboard");

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");

    // setIsPending(false);

    // iziToast.success({
    //   title: "Success",
    //   message: res.data.message,
    //   position: "topCenter",
    // });

    $("#signupModal").modal("hide");
    // $("#loginModal").modal("show");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsPending(true);

    // POST method to Node Server
    const res = await Axios.post("http://192.168.254.115:3001/login", {
      email,
      password,
    });

    // if (res.data.message === "The Email is already in use.") {
    //   iziToast.error({
    //     title: "Error",
    //     message: res.data.message,
    //     position: "topCenter",
    //   });
    //   setIsPending(false);
    //   return;
    // }

    // if (res.data.message === "Password and Confirm Password doesn't match.") {
    //   iziToast.error({
    //     title: "Error",
    //     message: res.data.message,
    //     position: "topCenter",
    //   });
    //   setIsPending(false);
    //   return;
    // }

    console.log(res);

    // setEmail("");
    // setPassword("");

    // setIsPending(false);

    // iziToast.success({
    //   title: "Success",
    //   message: res.data.message,
    //   position: "topCenter",
    // });

    // $("#signupModal").modal("hide");
    // $("#loginModal").modal("show");
  };

  return (
    <>
      <Head>
        <title>Home Security | Home </title>
      </Head>
      <main className="flex-shrink-0">
        <Navbar></Navbar>

        <header className="bg-dark py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2">
                    SMART, SAFE <br /> HOME SECURITY
                  </h1>
                  <p className="lead fw-normal text-white-50 mb-4">Monitor your home, and keep it protected.</p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    {/* <Link className="btn btn-info btn-lg px-4 me-sm-3" href="/signup">Get Started</Link> */}
                    <button type="button" className="btn btn-info btn-lg px-4 me-sm-3" data-bs-toggle="modal" data-bs-target="#signupModal">
                      Get Started
                    </button>
                    <button type="button" className="btn btn-outline-light btn-lg px-4" data-bs-toggle="modal" data-bs-target="#loginModal">
                      Log In
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <Image className="img-fluid rounded-3 my-5" width={600} height={400} src="/home.jpg" alt="..." />
              </div>
            </div>
          </div>
        </header>

        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bolder mb-0">A better way to monitor your home.</h2>
              </div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <div className="col mb-5 h-100">
                    <div className="feature bg-info bg-gradient text-white rounded-3 mb-3">
                      <i className="fa-solid fa-house-laptop"></i>
                    </div>
                    <h2 className="h5">TOTAL CONTROL</h2>
                    <p className="mb-0">Easy to navigate and configure.</p>
                  </div>
                  <div className="col mb-5 h-100">
                    <div className="feature bg-info bg-gradient text-white rounded-3 mb-3">
                      <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <h2 className="h5">FULL PROTECTION</h2>
                    <p className="mb-0">The Comfort of security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sign Up Modal */}
      <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="">
                Sign Up
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSignup}>
                <div class="mb-2">
                  <label for="recipient-name" class="col-form-label">
                    First Name<sup className="text-danger">*</sup>:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="signup_first_name"
                    name="signup_first_name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div class="mb-2">
                  <label for="recipient-name" class="col-form-label">
                    Surname<sup className="text-danger">*</sup>:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="signup_last_name"
                    name="signup_last_name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div class="mb-2">
                  <label for="recipient-name" class="col-form-label">
                    Email<sup className="text-danger">*</sup>:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="signup_email"
                    name="signup_email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div class="mb-2">
                  <label for="recipient-name" class="col-form-label">
                    Password<sup className="text-danger">*</sup>:
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="signup_password"
                    name="signup_password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Confirm Password<sup className="text-danger">*</sup>:
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="signup_confirm_password"
                    name="signup_confirm_password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {!isPending && <button className="btn btn-outline-success w-100 mb-2">Sign Up</button>}

                {isPending && (
                  <button className="btn btn-outline-success w-100 mb-2" disabled>
                    <div class="spinner-border text-success" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Log In Modal */}
      <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="">
                Log In
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleLogin}>
                <div class="mb-2">
                  <label for="recipient-name" class="col-form-label">
                    Email<sup className="text-danger">*</sup>:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="signup_email"
                    name="signup_email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Password<sup className="text-danger">*</sup>:
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="signup_password"
                    name="signup_password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-outline-primary w-100 mb-2">
                  Log In
                </button>
              </form>

              <div className="text-center mt-2">
                <a className="text-primary" type="button" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">
                  Forgotten Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="forgotPasswordModal" tabindex="-1" aria-labelledby="" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="">
                Forgot Password
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Email<sup className="text-danger">*</sup>:
                  </label>
                  <input type="email" class="form-control" id="recipient-name" required />
                </div>

                <button type="submit" className="btn btn-outline-danger w-100 mb-2">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
