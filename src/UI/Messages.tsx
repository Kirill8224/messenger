import { Card, Typography, Button, Input} from "@mui/material";
import { useDispatch } from "react-redux";
import type {MessagesType } from "../bbl/dal";
import { useState } from "react";
import { CreateMessage } from "../bbl/messagesSlise";

export const Messages = ({selectedChat, MessengerState, setSelectedChat}: MessagesType)=>{
    const dispatch= useDispatch()
    const [newMessage, setNewMessage]= useState<string>('')
    const Messages= MessengerState.messages.filter((message)=>message.chatId === selectedChat)
    return(<Card>
        <Button onClick={()=>{setSelectedChat(0)}} variant="contained">назад</Button>
        {Messages.map((message, index)=>(
            <Card sx={{m: 1}} key={index}>
                <Typography sx={message.isMine ? {backgroundColor: '#b8e5ff'} : {backgroundColor: 'white'}}>{message.timestamp}: {message.text}</Typography>
            </Card>
        ))}
        <Input onChange={(e)=>{setNewMessage(e.target.value)}} name="сообщение" placeholder="печатайте..." />
        <Button onClick={()=>{newMessage ? dispatch(CreateMessage({chatId: selectedChat, text: newMessage})) : alert('введите сообщение')}}>отправить</Button>
    </Card>)}