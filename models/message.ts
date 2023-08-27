import {User} from "@/models/index";

export default interface Message {
    id: number,
    author: User,
    receiver: User,
    text: string,
}