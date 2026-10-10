export type State={
    theme: 'white' | 'black',
    chats: Chat[],
    messages: Message[]
}
export type Chat= {
    id: number,
    name: string,
    avatar: string,
    lastMessage: string,
    unread: number
}
export type Message= {
    id: number,
    chatId: number,
    text: string,
    timestamp: string,
    isMine: boolean
}

export type Chatuitupe= {
    ChatPrivate: Chat
}
export type MessagesType= {
    selectedChat: number, 
    setSelectedChat: (id: number) => void
}