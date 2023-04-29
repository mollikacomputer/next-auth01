import Head from "next/head";

import { useSession, signIn, signOut } from "next-auth/react";
const login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        Welcome, {session.user.email}
        <button className="btn btn-success" onClick={() => signOut()}>
          {" "}
          Sign Out{" "}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p> You are not signin </p>
        <button className="btn btn-success" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    );
  }
};

export default login;
