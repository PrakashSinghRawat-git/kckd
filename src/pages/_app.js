import { auth } from '@/db/firebase';
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, []);
  return <Component {...pageProps} />
}
