'use client'

import React from "react";
import signUp from "../../firebase/auth/signUp";
import { useRouter } from 'next/navigation';
import styles from './page.module.css';



function Page() {
    const [email, setEmail] = React.useState('')
    const [nick, setNick] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password, nick);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/signIn")
    }
    return (
        <div className={styles.container}>
            <section className={styles.formContainer}>
                <h1 className={styles.title}>Cadastrar</h1>
                <form onSubmit={handleForm} className={styles.form}>
                    <label htmlFor="nick" className={styles.formLabel}>
                        <p>{nick}</p>
                        <input onChange={(e) => setNick(e.target.value)} required type="nick" name="nick" id="nick" className={styles.formInput} placeholder="example" />
                    </label>

                    <label htmlFor="email" className={styles.formLabel}>
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" className={styles.formInput} placeholder="example@mail.com" />
                    </label>

                    <label htmlFor="password" className={styles.formLabel}>
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" className={styles.formInput} placeholder="password" />
                    </label>
                    <button type="submit" className={styles.formButton}>Cadastrar</button>
                    <button type="button" className={styles.formButton} onClick={() => router.push("/signIn")}>Login</button>
                </form>
            </section>
        </div>
    );
}

export default Page;