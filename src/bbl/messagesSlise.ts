import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './data'
import type { State } from './types'
import type { Chat } from './types'
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
        CreateMessage: (state: State, action: PayloadAction<CreateMessageType>)=>{
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
        DeleteMessage: (state: State, action: PayloadAction<number>)=>{
            const mesDel= state.messages.find((mes)=>mes.id === action.payload)
            state.messages = state.messages.filter((mes)=>mes.id != action.payload)
            let chatDel
            if(mesDel){
                chatDel= state.chats.find((chat)=> chat.lastMessage === mesDel.text && chat.id === mesDel.chatId)
            }
            if(chatDel){
                chatDel.lastMessage = 'удалено'}
        },
        UpdateMessage: (State: State, action: PayloadAction<UpdateMessageType>)=>{
            const messageUpdate= State.messages.find((message)=>message.id === action.payload.Id)
            let chat: Chat | undefined
            if(messageUpdate){
                chat= State.chats.find((chat)=> chat.id === messageUpdate.chatId)
            }
            if(messageUpdate && chat){
                if(chat.id === messageUpdate.chatId && chat.lastMessage === messageUpdate.text){
                    chat.lastMessage= action.payload.text
                }
            }
            if(messageUpdate){
                messageUpdate.text= action.payload.text
            }
            
        },
        changeTheme: (state: State)=>{
            console.log(state.theme)
            if(state.theme === 'white'){
                 state.theme = 'black'
            }
            else{
                state.theme = 'white'
            }
        }
    }
})
export const {CreateMessage, DeleteMessage, UpdateMessage, changeTheme}= messagerReducer.actions
export default messagerReducer.reducer