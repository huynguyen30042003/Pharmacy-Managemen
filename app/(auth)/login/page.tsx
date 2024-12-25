import React from "react";
import style from "./styles.module.scss";
import Image from "next/image";
import Input from "@/components/path/input/Input";

const page = () => {
  return (
    <div className={style.login_form}>
      <div className={style.container}>
        <Image
          src="/icon-logo2.svg"
          alt="colorfilter icon"
          width={37}
          height={37}
          priority
        />
        <h1>Welcome Back</h1>
        <h2>Please enter your email and password to log in.</h2>
        <div className={style.form}>
          <Input type="email" valueLabel="Email" />
          <Input type="password" valueLabel="Password" />
          <h2>Forgot Password?</h2>
          <div className={style.button}>
            <span>Continue</span>
            <Image
              src="/arrow-right.svg"
              alt="arrow-right icon"
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
        <h3>Don’t have an account?<a href="">Sign in</a></h3>
      </div>
    </div>
  );
};

export default page;
