import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import Axios from "axios";
import Router, { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPending, setIsPending] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setIsPending(true);

    // POST method to Node Server
    const res = await Axios.post("http://192.168.254.115:3001/reset", {
      email,
      otp,
      password,
      confirmPassword
    });

    if (res.data.message === "The Email is not yet registered.") {
      iziToast.error({
        title: "Error",
        message: res.data.message,
        position: "topCenter",
      });
      setEmail("");
      setOtp("");
      setPassword("");
      setConfirmPassword("");
      setIsPending(false);
      return;
    }

    if (res.data.message === "Password and Confirm Password doesn't match.") {
      iziToast.error({
        title: "Error",
        message: res.data.message,
        position: "topCenter",
      });
      setPassword("");
      setConfirmPassword("");
      setIsPending(false);
      return;
    }

    if (res.data.message === "The OTP is incorrect.") {
        iziToast.error({
          title: "Error",
          message: res.data.message,
          position: "topCenter",
        });
        setOtp("");
        setPassword("");
        setConfirmPassword("");
        setIsPending(false);
        return;
      }

      if (res.data.message === "Your Password has been updated. You may now login.") {
        iziToast.success({
          title: "Success",
          message: res.data.message,
          position: "topCenter",
        });
        setEmail("");
        setOtp("");
        setPassword("");
        setConfirmPassword("");
        setIsPending(false);
        $("#forgotPasswordModal").modal("hide");

        setTimeout(() => {
            Router.push("/");
        }, 5000);
      }

  };

  return (
    <>
      <main className="flex-shrink-0">
        <h2 className="d-flex justify-content-center mt-5">
          <i className="fa-solid fa-shield-halved"></i> Home Security
        </h2>

        <div className="d-flex justify-content-center">
          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
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
              <label for="exampleInputEmail1" className="form-label">
                Reset Code<sup className="text-danger">*</sup>:
              </label>
              <input type="text" class="form-control" id="signup_email" name="signup_email" required value={otp} onChange={(e) => setOtp(e.target.value)} />

              <label for="recipient-name" class="col-form-label">
                New Password<sup className="text-danger">*</sup>:
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

              <label for="recipient-name" class="col-form-label">
                Confirm New Password<sup className="text-danger">*</sup>:
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
            {!isPending && <button className="btn btn-outline-danger w-100 mb-2">Reset Password</button>}

            {isPending && (
              <button className="btn btn-outline-danger w-100 mb-2" disabled>
                <div class="spinner-border text-danger" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
