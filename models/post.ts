import {User} from "@/models";

export default interface Post {
    id: number,
    author: User,
    receiver: User,
    text: string,
}