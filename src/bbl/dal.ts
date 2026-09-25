export type StateType={
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


export const initialState: StateType ={
    chats: [
        {
            id: 1,
            name: "Алексей",
            avatar: "https://i.pravatar.cc/150?img=12",
            lastMessage: "Завтра увидимся!",
            unread: 2
        },
        {
            id: 2,
            name: "Максим",
            avatar: "https://i.pravatar.cc/150?img=13",
            lastMessage: "Окей, договорились",
            unread: 0
        },
        {
            id: 3,
            name: "Анна",
            avatar: "https://i.pravatar.cc/150?img=47",
            lastMessage: "Посмотри фото 😄",
            unread: 4
        },
        {
            id: 4,
            name: "Дмитрий",
            avatar: "https://i.pravatar.cc/150?img=33",
            lastMessage: "Когда будешь свободен?",
            unread: 1
        },
        {
            id: 5,
            name: "Мария",
            avatar: "https://i.pravatar.cc/150?img=44",
            lastMessage: "Спасибо!",
            unread: 0
        }
    ],
    messages: [
        {
            id: 1,
            chatId: 1,
            text: "Привет! Как дела?",
            timestamp: "12:35",
            isMine: false
        },
        {
            id: 2,
            chatId: 1,
            text: "Привет! Всё отлично, а у тебя?",
            timestamp: "12:36",
            isMine: true
        },
        {
            id: 3,
            chatId: 1,
            text: "Тоже хорошо 😄",
            timestamp: "12:37",
            isMine: false
        },
        {
            id: 4,
            chatId: 1,
            text: "Чем сегодня занимаешься?",
            timestamp: "12:38",
            isMine: false
        },
        {
            id: 5,
            chatId: 1,
            text: "Учусь программировать",
            timestamp: "12:39",
            isMine: true
        },
        {
            id: 6,
            chatId: 1,
            text: "Завтра увидимся!",
            timestamp: "12:40",
            isMine: false
        },
    
        {
            id: 7,
            chatId: 2,
            text: "Ты уже сделал проект?",
            timestamp: "11:20",
            isMine: false
        },
        {
            id: 8,
            chatId: 2,
            text: "Почти, осталось немного",
            timestamp: "11:23",
            isMine: true
        },
        {
            id: 9,
            chatId: 2,
            text: "Окей, договорились",
            timestamp: "11:25",
            isMine: false
        },
    
        {
            id: 10,
            chatId: 3,
            text: "Привет!",
            timestamp: "10:10",
            isMine: false
        },
        {
            id: 11,
            chatId: 3,
            text: "Привет, Анна!",
            timestamp: "10:11",
            isMine: true
        },
        {
            id: 12,
            chatId: 3,
            text: "Посмотри фото 😄",
            timestamp: "10:15",
            isMine: false
        },
    
        {
            id: 13,
            chatId: 4,
            text: "Когда будешь свободен?",
            timestamp: "09:40",
            isMine: false
        },
    
        {
            id: 14,
            chatId: 5,
            text: "Спасибо за помощь!",
            timestamp: "09:10",
            isMine: false
        },
        {
            id: 15,
            chatId: 5,
            text: "Не за что!",
            timestamp: "09:12",
            isMine: true
        },
        {
            id: 16,
            chatId: 5,
            text: "Спасибо!",
            timestamp: "09:13",
            isMine: false
        }
    ]
}