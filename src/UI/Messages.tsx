import { Card, Typography, Button } from "@mui/material";
import type {MessagesType } from "../bbl/dal";

export const Messages = ({selectedChat, MessengerState, setSelectedChat}: MessagesType)=>{
    const Messages= MessengerState.messages.filter((message)=>message.chatId === selectedChat)
    return(<Card>
        <Button onClick={()=>{setSelectedChat(0)}} variant="contained">назад</Button>
        {Messages.map((message, index)=>(
            <Card sx={{m: 1}} key={index}>
                <Typography sx={message.isMine ? {backgroundColor: '#b8e5ff'} : {backgroundColor: 'white'}}>{message.text}</Typography>
            </Card>
        ))}
    </Card>)}