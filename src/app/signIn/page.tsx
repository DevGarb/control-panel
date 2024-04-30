'use client'

import { useState, FormEvent } from "react";
import { FirebaseError } from "firebase/app";
import signIn from "../../firebase/auth/signIn";
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { TypeAnimation } from 'react-type-animation';

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event: FormEvent) => {
        event.preventDefault()
        try {
            const { result, error } = await signIn(email, password);

            if (error) {
                const firebaseError = error as FirebaseError;
                if (firebaseError.message) {
                    console.log(firebaseError.message);
                    throw new Error(firebaseError.message);
                } else {
                    console.log('Unknown Error:', firebaseError);
                    throw new Error('Unknown Error');
                }
            }

            console.log(result)
            return router.push("/");
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return (
        <div className="bg-gray-700" >
            <div className="flex min-h-screen items-center justify-center">
                <div className="min-h-1/2 bg-gray-900  border border-gray-900 rounded-2xl">
                    <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">

                        <TypeAnimation
                            sequence={[
                                '',
                                1100,
                                'Olá,...',
                                1400,
                                '... :-D', //  Continuing previous Text
                                1200,
                                'Seja Bem Vindo !',
                                2000,
                            ]}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                            speed={20}
                        />
                        <h1 className="text-sky-950 mb-8">Faça Login com sua conta cadastrada!</h1>

                        <form onSubmit={handleForm} className="w-full p-10 bg-gray-900 rounded-md  border border-gray-700 focus:border-blue-700">

                            <label htmlFor="email" className={styles.formLabel}>
                                <p>Email:</p>
                                <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" className={styles.formInput} placeholder="example@mail.com" />
                            </label>

                            <label htmlFor="password" className={styles.formLabel}>
                                <p>Password:</p>
                                <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" className={styles.formInput} placeholder="password" />
                            </label>
                            <div className="mb-4 mt-8">
                                <button type="submit" className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700">Login</button>
                            </div>
                            <div>
                                <p>ainda não tem uma conta?</p>
                                <button type="button" className="font-semibold text-sky-700" onClick={() => router.push("/signUp")}>Cadastre-se</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;