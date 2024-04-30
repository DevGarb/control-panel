"use client";

import React from "react";
import signUp from "../../firebase/auth/signUp";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { TypeAnimation } from "react-type-animation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/signIn");
  };
  return (
    <div className="bg-gray-700">
      <div className="flex min-h-screen items-center justify-center">
        <div className="min-h-1/2 bg-gray-900  border border-gray-900 rounded-2xl">
          <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
            <TypeAnimation
              sequence={[
                "",
                1100,
                "Olá,...",
                1400,
                "...",
                1200,
                "Seja Bem Vindo !",
                2000,
              ]}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
              speed={20}
            />
            <h1 className="text-sky-950 mb-8">Faça seu Cadastro!</h1>

            <form
              onSubmit={handleForm}
              className="w-full p-10 bg-gray-900 rounded-md border border-gray-700 focus:border-blue-700"
            >
              <label htmlFor="email" className={styles.formLabel}>
                <p>Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  id="email"
                  className={styles.formInput}
                  placeholder="example@mail.com"
                />
              </label>

              <label htmlFor="password" className={styles.formLabel}>
                <p>Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  name="password"
                  id="password"
                  className={styles.formInput}
                  placeholder="password"
                />
              </label>

              <div className="mb-4 mt-8">
                <button
                  type="submit"
                  className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700"
                >
                  Cadastrar
                </button>
              </div>

              <div className="flex">
                <p>tem cadastro? faça o:</p>
                <button
                  type="button"
                  className="font-semibold text-sky-700 pl-3"
                  onClick={() => router.push("/signIn")}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
