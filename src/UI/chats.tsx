import { useSelector } from "react-redux";
import type { RootState } from "../bbl/store";
//import { useState } from "react";
import { ChatUI } from "./Chat";

export const Chats= ()=>{
    const MessengerState= useSelector((state: RootState)=>state.messager)
    return(
        MessengerState.chats.map((chat)=>(
        <ChatUI key= {chat.id} ChatPrivate= {chat}/>)))
}
