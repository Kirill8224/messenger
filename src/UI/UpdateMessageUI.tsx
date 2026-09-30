import { Card, Button, Input} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {  UpdateMessage } from "../bbl/messagesSlise";
import type { Message } from "../bbl/dal";
type MessageProps= {
    message: Message
}
export const UpdateMessageUI= (props: MessageProps)=>{
    const dispatch= useDispatch()
    const [editMessage, setEditMessage]= useState<boolean>(false)
    const [editMessageText, setEeditMessageText]= useState<string>('')
    const handClick= ()=>{
        setEditMessage(false)
        dispatch(UpdateMessage({Id: props.message.id, text: editMessageText}))
    }
    if(editMessage){
        return(<Card sx={{backgroundColor: '#b8e5ff'}}>
            <Input onChange={(e)=>{setEeditMessageText(e.target.value)}} name="сообщение" placeholder="печатайте..." />
            {props.message.isMine ? <Button onClick={()=>{editMessageText ? handClick() : setEditMessage(false)}}>отправить</Button> : ''}
        </Card>)
    }
    return(<Card sx={{backgroundColor: '#b8e5ff'}}>
        {props.message.isMine && !editMessage ? <Button onClick={()=>setEditMessage(true)}>изменить</Button> : ''}
    </Card>)
}