import React from 'react';

export const useAuth = () => {
  const [authed, setAuthed] = React.useState<boolean>(false);

  return {
    authed,
    login() {
      return new Promise<void>(res => {
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise<void>(res => {
        setAuthed(false);
        res();
      });
    },
  };
};

 