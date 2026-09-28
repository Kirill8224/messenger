import type { Chat } from "../bbl/dal"
import {  useSelector } from "react-redux";
import type { RootState } from "../bbl/store";
import { Card, Typography, Avatar, Button } from "@mui/material";
import { useState } from "react";
type Chatuitupe= {
    ChatPrivate: Chat
}
export const ChatUI= (ChatPrivate: Chatuitupe)=>{
    const [selectedChat, setSelectedChat]= useState<number>(0)
    const MessengerState= useSelector((state: RootState)=>state.messager)
    if(selectedChat != 0){
        const Messages= MessengerState.messages.filter((message)=>message.chatId === selectedChat)
        return(<Card>
            <Button onClick={()=>{setSelectedChat(0)}} variant="contained">назад</Button>
            {Messages.map((message)=>(
                <Card sx={{m: 1}}>
                    <Typography sx={message.isMine ? {backgroundColor: '#b8e5ff'} : {backgroundColor: 'white'}}>{message.text}</Typography>
                </Card>
            ))}
        </Card>)
    }
    return(
        <Card key= {ChatPrivate.ChatPrivate.id} sx={{m: 1}}>
            <Typography variant="h3">{ChatPrivate.ChatPrivate.name}</Typography>
            <Avatar alt="аватарка" src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3HZcl3QtGiRcHw38m1_t0I9VXGpuhJekcTsNo3KjFGT1pm4AU2fsrLy0&s=10'></Avatar>
            <Typography variant="h5">последнее сообщение: {ChatPrivate.ChatPrivate.lastMessage}</Typography>
            <Button color="success" onClick={()=>{setSelectedChat(ChatPrivate.ChatPrivate.id)}} variant="contained">открыть</Button>
        </Card>)}