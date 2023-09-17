import React from "react";
import io from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL);
const SocketContext = React.createContext(socket);
export default SocketContext;