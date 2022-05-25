import styles from "../styles/Home.module.css";
import router from "next/router";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }
  return (
    <div className={styles.container}>
      {session ? (
        <p>You are logged in2:</p>
      ) : (
        <p>
          You are not logged in2:
          <Link href="/api/auth/signin/email">Link to signup</Link>
        </p>
      )}

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
    </div>
  );
}
