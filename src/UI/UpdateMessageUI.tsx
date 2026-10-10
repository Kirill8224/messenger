import { Card, Button, Input} from "@mui/material";
import { useAppDispatch } from "../bbl/hooks";
import { useState } from "react";
import {  UpdateMessage } from "../bbl/messagesSlise";
import type { Message } from "../bbl/types";
type MessageProps= {
    message: Message
}
export const UpdateMessageUI= (props: MessageProps)=>{
    const dispatch= useAppDispatch()
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