import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { login } from "@/services/AuthService";
const LoginPageStyled = styled.div`
  .form {
    margin: auto;
    margin-top: 10em;
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 350px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    .form-title {
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 600;
      text-align: center;
      color: #000;
    }
    .input-container {
      position: relative;
      input {
        background-color: #fff;
        padding: 1rem;
        padding-right: 3rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        width: 100%;
        border-radius: 0.5rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      }
    }
  }

  .input-container input,
  .form button {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;
  }

  .submit {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-color: #4f46e5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }
  .signup-link {
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    b {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export default function LoginPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    login(data);
  };
  return (
    <LoginPageStyled>
      <form className="form">
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            placeholder="Enter email"
            type="email"
          />
        </div>
        <div className="input-container">
          <input
            {...register("password", { required: true })}
            placeholder="Enter password"
            type="password"
          />
        </div>
        <button onClick={handleSubmit(onSubmit)} className="submit" type="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account?
          <Link href={"/register"}>Sign up</Link>
        </p>
      </form>
    </LoginPageStyled>
  );
}
LoginPage.Layout = "div";
