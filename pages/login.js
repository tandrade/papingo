import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';

export default function Login({ providers }) {
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    return (
      <div>
        <h1>Create Next App</h1>
        <div>
             <h2> Signed in as {session.user.email} <br /></h2> 
              <div>
              <button onClick={() => {
                  signOut()
              }}>
                 Sign out
             </button>
              </div>
        </div>
      </div>

    )
  }

  return (
    <div>
      <button onClick={() => signIn('google')}>Sign in with gooogle</button>
    </div>
  );
}
