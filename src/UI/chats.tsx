import { useAppDispatch, useAppSelector } from "../bbl/hooks";
import { changeTheme } from "../bbl/messagesSlise";
import { Button} from "@mui/material";
import { ChatUI } from "./Chat";

export const Chats= ()=>{
    const MessengerState= useAppSelector((state)=>state.messager)
    const dispatch= useAppDispatch()
    const colorTheme= MessengerState.theme === 'black' ? 'white' : 'blue'
    return(
        <div style={{backgroundColor: MessengerState.theme}}>
        <Button sx={{color: colorTheme}} onClick={()=>{dispatch(changeTheme())}}>сменить тему на {MessengerState.theme === 'white' ? 'чёрнуюю' : 'белую'}</Button>
        {MessengerState.chats.map((chat)=>(
        <ChatUI key= {chat.id} ChatPrivate= {chat}/>))}
        </div>)
}
