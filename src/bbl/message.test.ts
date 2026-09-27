import { CreateMessage, DeleteMessage, UpdateMessage } from "./messagesSlise";
import messagerReducer from "./messagesSlise";
import {expect, test} from 'vitest'
import { initialState } from './dal'
test('CreateMessage', ()=>{
    expect(messagerReducer(initialState, CreateMessage({chatId: 1, text: 'привет'})).messages.at(-1)?.text).toBe('привет')
    expect(messagerReducer(initialState, CreateMessage({chatId: 1, text: 'пока'})).chats.at(0)?.lastMessage).toBe('пока')
})
test('DeleteMessage', ()=>{
    expect(messagerReducer(initialState, DeleteMessage(13)).messages.length).toBe(initialState.messages.length -1)
    expect(messagerReducer(initialState, DeleteMessage(13)).chats[3].lastMessage).toBe('удалено')
})
test('UpdateMessage', ()=>{
    const action= UpdateMessage({Id: 2, text: 'изменил'})
    expect(messagerReducer(initialState, action).messages.at(1)?.text).toBe('изменил')
})