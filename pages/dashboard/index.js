import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

import Navbar from "../Navbar";
import Footer from "../Footer";

const Dashboard = () => {
    return ( 
        <>
        <main className="flex-shrink-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <Link className="navbar-brand" href="/"><i class="fa-solid fa-shield-halved"></i> Home Security</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" href="/"><i class="fa-solid fa-house"></i></Link></li>
                        <li className="nav-item nav-link">|</li>
                        <li className="nav-item"><Link className="nav-link" href="/"><i class="fa-solid fa-clock-rotate-left"></i></Link></li>
                        <li className="nav-item nav-link">|</li>
                        <li className="nav-item"><Link className="nav-link" href="/about"><i class="fa-solid fa-power-off"></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        

        <Footer></Footer>
        </main>
        
        </>
     );
}
 
export default Dashboard;