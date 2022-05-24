import styles from "../styles/Home.module.css";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      {session && (
        <p>
          {session.user.email}{" "}
          <button
            className="underline"
            onClick={() => {
              signOut();
              router.push("/");
            }}
          >
            logout
          </button>
        </p>
      )}
      <a href="/api/auth/signin">Link to signup</a>
    </div>
  );
}
