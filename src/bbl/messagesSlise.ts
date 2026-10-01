import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './dal'
import type { StateType } from './dal'
type CreateMessageType= {
    chatId: number,
    text: string,
}
type UpdateMessageType= {
    Id: number,
    text: string,
}
const messagerReducer= createSlice({
    name: "messagerReducer",
    initialState,
    reducers: {
        CreateMessage: (state: StateType, action: PayloadAction<CreateMessageType>)=>{
            state.messages.push({
                id: Date.now(),
                chatId: action.payload.chatId,
                text: action.payload.text,
                timestamp: new Date().toLocaleTimeString(),
                isMine: true
            })
            const chatLastMessage= state.chats.find((chat)=>chat.id === action.payload.chatId)
            if(chatLastMessage){
                chatLastMessage.lastMessage= action.payload.text
            }
        },
        DeleteMessage: (state: StateType, action: PayloadAction<number>)=>{
            const mesDel= state.messages.find((mes)=>mes.id === action.payload)
            state.messages = state.messages.filter((mes)=>mes.id != action.payload)
            const chatDel= state.chats.find((chat)=> chat.lastMessage === mesDel.text && chat.id === mesDel.chatId)
            if(chatDel){
                chatDel.lastMessage = 'удалено'}
        },
        UpdateMessage: (State: StateType, action: PayloadAction<UpdateMessageType>)=>{
            const messageUpdate= State.messages.find((message)=>message.id === action.payload.Id)
            const Chat= State.chats.find((chat)=> chat.id === messageUpdate.chatId)
            if(Chat.id === messageUpdate.chatId && Chat.lastMessage === messageUpdate.text){
                Chat.lastMessage= action.payload.text
            }
            if(messageUpdate){
                messageUpdate.text= action.payload.text
            }
            
        }
    }
})
export const {CreateMessage, DeleteMessage, UpdateMessage}= messagerReducer.actions
export default messagerReducer.reducer