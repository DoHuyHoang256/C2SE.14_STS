import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleLogin and GoogleOAuthProvider components

function Login() {

  const onSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const onError = () => {
    console.log('Login Failed');
    // Handle login error here
  };

  return (
    <GoogleOAuthProvider clientId="1069924781685-hkivdnm3scflmikm1a48qd92hplljd5e.apps.googleusercontent.com"> {/* Replace <your_client_id> with your actual Google OAuth client ID */}
      <div className={styles.container}>
        <h1 className={styles.heading}>Log in Form</h1>
        <div className={styles.form_container}>
          <div className={styles.left}>
            <img className={styles.img} src="./images/login.jpg" alt="login" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.from_heading}>Members Log in</h2>
            <input type="text" className={styles.input} placeholder="Email" />
            <input type="text" className={styles.input} placeholder="Password" />
            <button className={styles.btn}>Log In</button>
            <p className={styles.text}>or</p>
            {/* GoogleLogin component for Google OAuth */}
            <GoogleLogin
              onSuccess={onSuccess}
              onError={onError}
              render={(renderProps) => (
                <button className={styles.google_btn} onClick={renderProps.onClick}>
                  <img src="./images/google.png" alt="google icon" />
                  <span>Sing in with Google</span>
                </button>
              )}
            />
            <p className={styles.text}>
              New Here ? <Link to="/signup">Sing Up</Link>
            </p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;