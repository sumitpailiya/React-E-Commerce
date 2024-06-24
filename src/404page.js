import { useEffect, useState } from "react";

function NotFound() {
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const getLogin = () => {
    fetch("http://localhost:4546/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "hiii",
        password: "nooooo",

        expiresInMins: 30,
      }),
    })
  
  };
  console.log(getLogin)


  return (
    <>
      <div className="container">
      <form action="http://localhost:4546/create-checkout-session" method="post">
      <input type="text" name="name" id="" value="john" />
        <button type="submit" className="btn btn-info" onClick={getLogin}> Payment</button>
        </form>
      </div>
    </>
  );
}

export default NotFound;
