import { CreateMessage } from "./messagesSlise";
import messagerReducer from "./messagesSlise";
import {expect, test} from 'vitest'
import { initialState } from './dal'
test('CreateMessage', ()=>{
    expect(messagerReducer(initialState, CreateMessage({chatId: 1, text: 'привет'})).messages.at(-1).text).toBe('привет')
    expect(messagerReducer(initialState, CreateMessage({chatId: 1, text: 'пока'})).chats.at(0).lastMessage).toBe('пока')
})