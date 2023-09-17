import React from "react";
import io from "socket.io-client";
import { SOCKET_URL } from "../config";

export const socket = io(import.meta.env.VITE_BACKEND_URL);
const SocketContext = React.createContext(socket);
export default SocketContext;