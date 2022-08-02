import React, { ReactNode } from 'react';

interface IAuth {
  authed: boolean;
  login(): Promise<void>;
  logout(): Promise<void>;
}

interface Props {
  children?: ReactNode;
}

const authContext = React.createContext<IAuth | null>(null);

export const useAuth = (): IAuth => {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login() {
      return new Promise<void>((res) => {
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise<void>((res) => {
        setAuthed(false);
        res();
      });
    },
  };
};

export function AuthProvider({ children }: Props) {
  const auth = useAuth();
  console.log(auth);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
