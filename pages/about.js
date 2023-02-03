import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>Home Security | About </title>
      </Head>

      <main className="flex-shrink-0">
        <Navbar></Navbar>
        <section className="py-5 bg-light">
          <div className="container px-5 my-5 py-5">
            <div className="text-center">
              <h2 className="fw-bolder">PinkCodeX</h2>
              <p class="lead fw-normal text-muted mb-5">
                We are the Students of Technological University of the Philippines - Cavite Campus, <br /> under the program of Bachelor of Engineering
                Technology Major in Computer Engineering Technology.
              </p>
            </div>
            <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
              <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                  <Image className="img-fluid rounded-circle mb-4 px-4" width={180} height={180} src="/jasa.jpg" alt="..." />
                  <h5 className="fw-bolder">Jasa, Mary Chris O.</h5>
                  <div className="fst-italic text-muted">Project Manager</div>
                </div>
              </div>

              <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                  <Image className="img-fluid rounded-circle mb-4 px-4" width={180} height={180} src="/nazaire.jpg" alt="..." />
                  <h5 className="fw-bolder">Nazaire, Alliah Faith S.</h5>
                  <div className="fst-italic text-muted">QA</div>
                </div>
              </div>
              <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                  <Image className="img-fluid rounded-circle mb-4 px-4" width={180} height={180} src="/taccad.jpg" alt="..." />
                  <h5 className="fw-bolder">Taccad, Kyle Nicole R.</h5>
                  <div className="fst-italic text-muted">QA</div>
                </div>
              </div>
              <div className="col mb-5 mb-5 mb-sm-0">
                <div className="text-center">
                  <Image className="img-fluid rounded-circle mb-4 px-4" width={180} height={180} src="/tulabot.jpg" alt="..." />
                  <h5 className="fw-bolder">Tulabot, Vanessa R.</h5>
                  <div className="fst-italic text-muted">Designer</div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="text-center">
                  <Image className="img-fluid rounded-circle mb-4 px-4" width={180} height={180} src="/bataller.jpg" alt="..." />
                  <h5 className="fw-bolder">Bataller, John Anthony B.</h5>
                  <div className="fst-italic text-muted">Developer</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
};

export default About;
