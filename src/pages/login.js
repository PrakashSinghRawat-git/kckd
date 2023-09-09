import Login from '@/Components/Login';
import { useRouter } from 'next/router';
import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth, db } from '@/db/firebase';
const Login = () => {

  const router = useRouter()

  const handleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const { displayName, photoURL, uid } = result.user;
          
        console.log(result.user)
        // Store user's name and photo in Firestore
        await setDoc(doc(db, "users", uid), {
          displayName, photoURL, uid
        })

        router.push("/")

      } catch (error) {
        console.error('Error logging in:', error);
      }
    };


  return (
    <>
     <Login handleLogin={handleLogin}/>
    </>
  )
}

export default Login