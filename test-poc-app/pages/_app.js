import React from "react";
import { UserProvider, useFetchUser } from '../utils/user';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const { user, loading } = useFetchUser();
    const props = {
      ...pageProps,
      user,
    }
    return (
      <UserProvider value={{ user, loading }}>
            <Component {...props} />
      </UserProvider>
  )
}

export default MyApp
