import React, { useState } from 'react';
import '../Loginpage.css'; // Import your CSS file

function LoginPage() { 

  //use a global state to store login status
    
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // You can add your login logic here, e.g., making an API call to verify credentials.
    // For this example, we'll simulate a successful login after a button click.

    // use auth call back
    window.location.href = import.meta.env.VITE_BACKEND_URL+'auth/google';

    //setLoggedIn(true);
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {loggedIn ? (
        <div>
          <p>You are logged in!</p>
          {/* Add your authenticated content here */}
        </div>
      ) : (
        <div>
          <p>Please click the button to log in.</p>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
