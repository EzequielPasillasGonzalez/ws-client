import { Manager, Socket } from "socket.io-client";

export const connecToServe = (): Socket => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js");

  const socket = manager.socket("/");

  return socket;
};


