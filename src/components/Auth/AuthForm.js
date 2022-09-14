import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const nav = useNavigate();
  const emailInputRef = useRef();
  const pwInputRef = useRef();
  const pwChkInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    emailInputRef.current.value = "";
    pwInputRef.current.value = "";
    pwChkInputRef.current.value = "";
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPw = pwInputRef.current.value;
    if (!isLogin) {
      const enteredPwChk = pwChkInputRef.current.value;
      if (enteredPw !== enteredPwChk) {
        alert("비밀번호가 일치하지 않습니다");
        pwInputRef.current.value = "";
        pwChkInputRef.current.value = "";
        return;
      }
    }

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPw,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "인증 실패";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        nav.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "로그인" : "회원가입"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            required
            ref={emailInputRef}
            placeholder="이메일 아이디"
          />
        </div>
        <div className={classes.control}>
          <input
            type="password"
            id="password"
            required
            ref={pwInputRef}
            placeholder="비밀번호"
          />
        </div>
        {!isLogin && (
          <div className={classes.control}>
            <input
              type="password"
              id="passwordChk"
              required
              ref={pwChkInputRef}
              placeholder="비밀번호 확인"
            />
          </div>
        )}
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? "로그인" : "회원가입"}</button>}
          {isLoading && <p>요청중입니다...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "회원가입" : "로그인"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
