"use client";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle";
import Hero1 from "../components/Hero/Hero";
import CardDrip from "../components/Card/CardDrip";
import Heading from "@/components/Heading/Heading";
import Section from "../components/Featuresection/featureSection"

function Page() {
  const { userAuth, logout } = useAuthContext();
  const router = useRouter();

  // Redirecionar para a página de login se o usuário não estiver autenticado
  if (!userAuth) {
    router.push("/signIn");
    return null; // Evitar renderização da página enquanto redireciona
  }

  console.log(userAuth);

  if (userAuth == null) {
    router.push("/signIn");
  }

  const email = userAuth.email;

  return (
    <>
      {userAuth && (
        <section className="">
          <div className={styles.navbar}>
            <div className="md:justify-center">
              <Heading />
            </div>

            <div className="flex gap-4 pr-52 md:pr-0">
              <div>
                <p className={styles.title}>
                  Você está logado como:
                  {email}
                </p>
              </div>
              <div className="flex gap-4">
                <ModeToggle />
                <Button onClick={() => logout()}>Sair</Button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-center pb-28">
              <Hero1 />
            </div>

            <div>
              <Section />
            </div>

            <div className="flex justify-center gap-7 flex-wrap">
              <div className="flex mb-20 mt-10 gap-10 justify-center flex-wrap">
                <CardDrip />
              </div>
              <div className="flex mb-20 mt-10 gap-10 justify-center flex-wrap">
                <CardDrip />
              </div>
              <div className="flex mb-20 mt-10 gap-10 justify-center flex-wrap">
                <CardDrip />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Page;
