import { Card, Typography, Button, Input} from "@mui/material";
import { useDispatch } from "react-redux";
import type {MessagesType } from "../bbl/dal";
import { useState } from "react";
import { CreateMessage, DeleteMessage} from "../bbl/messagesSlise";
import { UpdateMessageUI } from "./UpdateMessageUI";


export const Messages = ({selectedChat, MessengerState, setSelectedChat}: MessagesType)=>{
    const dispatch= useDispatch()
    const [newMessage, setNewMessage]= useState<string>('')
    const Messages= MessengerState.messages.filter((message)=>message.chatId === selectedChat)
    return(<Card>
        <Button onClick={()=>{setSelectedChat(0)}} variant="contained">назад</Button>
        {Messages.map((message, index)=>(
            <Card key={index} sx={message.isMine ? {m: 1, backgroundColor: '#b8e5ff'} : {m: 1, backgroundColor: 'white'}}>
                <Typography>{message.timestamp}: {message.text}</Typography>
                <Button color="error" onClick={()=>{dispatch(DeleteMessage(message.id))}}>удалить</Button>
                <UpdateMessageUI message= {message}/>
            </Card>
        ))}
        <Input onChange={(e)=>{setNewMessage(e.target.value)}} name="сообщение" placeholder="печатайте..." />
        <Button onClick={()=>{newMessage ? dispatch(CreateMessage({chatId: selectedChat, text: newMessage})) : alert('введите сообщение')}}>отправить</Button>
    </Card>)}

