import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { UserRegister } from "@/services/AuthService";
import { v4 } from "uuid";
const RegisterPageStyled = styled.div`
  .form {
    margin: auto;
    margin-top: 5em;
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 450px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    .form-title {
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 600;
      text-align: center;
      color: #000;
      margin-bottom: 2em;
    }
    .input-container {
      position: relative;
      display: grid;
      gap: 1em;
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
      .fullName_feild {
        gap: 1em;
        display: flex;
      }
      span {
        display: grid;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        padding-left: 1rem;
        padding-right: 1rem;
        place-content: center;
        svg {
          color: #9ca3af;
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  .input-container input,
  .form button {
    outline: none;
    border: 1px solid #e5e7eb;
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
    margin-top: 1em;
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
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userId = v4();
    const dataUser = { email: data.email, password: data.password, user_id: userId };
    const dataProfile = {
      fullName: data.first_name + " " + data.last_name,
      profile_id: v4(),
      user_id: userId,
    };
    UserRegister(dataUser, dataProfile);
  };
  return (
    <RegisterPageStyled>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        <p className="form-title">Sign up to your account</p>
        <div className="input-container">
          <div className="fullName_feild">
            <input
              className="firt_name"
              {...register("first_name", { required: true })}
              placeholder="Enter firt name"
            />
            <input
              className="last_name"
              {...register("last_name", { required: true })}
              placeholder="Enter last name"
            />
          </div>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Enter email"
          />
          {errors.email?.type === "required" && <p>Email is required</p>}
          {errors.email?.type === "pattern" && <p>Email is pattern</p>}
          <input
            {...register("password", { required: true })}
            placeholder="Enter password"
            type="password"
          />
          <input
            {...register("confirm-password", { required: true })}
            placeholder="Enter confirm password"
            type="password"
          />
        </div>
        <button onClick={handleSubmit(onSubmit)} className="submit" type="submit">
          Sign up
        </button>
        <p className="signup-link">
          <Link href={"/login"}>Sign in</Link>
        </p>
      </form>
    </RegisterPageStyled>
  );
}
RegisterPage.Layout = "div";
