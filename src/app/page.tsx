'use client'
import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";
import styles from './page.module.css';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle";
import { Carousel1 } from "@/components/carrousel/Carousel1";
import Hero1 from "../components/Hero/Hero"
import CardDrip from "../components/Card/CardDrip"
import Heading from "@/components/Heading/Heading";

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
        <section className={styles.container}>
          <div className={styles.navbar}>
            <div className="">
              <Heading />
            </div>
            <div>
              <p className={styles.title}>Você está logado como:
                <div>
                  "{email}"
                </div></p>
            </div>
            <div>
              <ModeToggle />
            </div>
            <div>
              <Button onClick={() => logout()}>Sair</Button>
            </div>
          </div>


          <div>
            <Hero1 />
          </div>


          <div className="flex mb-20 mt-10 gap-10 justify-center flex-wrap">
            <CardDrip />
          </div>



          {/* <div>
            <Carousel1 />
          </div>  */}
        </section>
      )}
    </>
  );
}

export default Page;