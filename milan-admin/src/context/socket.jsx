import React from "react";
import io from "socket.io-client";

export const socket = io(SOCKET_URL);
const SocketContext = React.createContext(socket);
export default SocketContext;