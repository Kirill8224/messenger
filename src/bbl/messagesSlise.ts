import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './dal'
import type { StateType } from './dal'
type CreateMessageType= {
    chatId: number,
    text: string,
}
const messagerReducer= createSlice({
    name: "messagerReducer",
    initialState,
    reducers: {
        CreateMessage: (state: StateType, payload: PayloadAction<CreateMessageType>)=>{
            state.messages.push({
                id: Date.now(),
                chatId: payload.payload.chatId,
                text: payload.payload.text,
                timestamp: String(new Date()),
                isMine: false
            })
            const chatLastMessage= state.chats.find((chat)=>chat.id === payload.payload.chatId)
            if(chatLastMessage){
                chatLastMessage.lastMessage= payload.payload.text
            }
        }
    }
})
export const {CreateMessage}= messagerReducer.actions
export default messagerReducer.reducer