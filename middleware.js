import { NextResponse } from "next/server";

const middleware = async (req) => {
  const jwt = req.cookies.get("jwt")?.value;
  const url = req.url;

  if (url.includes("/dashboard")) {
    if (jwt === undefined) {
      console.log("No Token - redirect to /");
      return NextResponse.redirect("localhost:3000");
    }

    const res = await fetch("http://192.168.254.115:3001/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jwt }),
    });

    if (res.status === 401) {
      console.log("No Token - redirect to /");
      return NextResponse.redirect("localhost:3000");
    }

    if (res.status === 200) {
      console.log("Token Verified");
      return NextResponse.next();
    }
  }

  return NextResponse.next();
};

export default middleware;
