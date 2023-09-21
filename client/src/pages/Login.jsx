import React, { useState } from 'react';
import '../Loginpage.css'; // Import your CSS file

function LoginPage() { 

  //use a global state to store login status
    
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_BACKEND_URL+'auth/google';
  };

  return (
    <div className='google-sign' style={{
      width:'100vw',
      height:'100vh',
      background:`linear-gradient(
        345deg,
        rgba(111, 0, 53, 1) 4%,
        rgba(57, 0, 53, 1) 34%,
        rgba(64, 0, 64, 1) 58%,
        rgba(111, 0, 53, 1) 96%
      )`,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }}>
      <img src='/assets/logos/logocream.png' className="milan-top-logo" alt="milan-logo"/>
      <button type="button" class="google-sign-in-button" onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginPage;
