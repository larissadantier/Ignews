import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLogged = true;
  return isUserLogged ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Larissa Dantier
      <FiX color="#737380" />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  );
}
