import React, { useState, createContext, useContext, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import Cookies from "js-cookie";

const SocketContext = createContext<any>(null);

export function useSocket() {
  return useContext(SocketContext);
}

type Props = {
  id: string;
  children: React.ReactNode;
};

export function SocketProvider({ id, children }: Props) {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const token: any = Cookies.get("token");
    const newSocket = io("http://localhost:8080", {
      query: { id, token },
    });
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
