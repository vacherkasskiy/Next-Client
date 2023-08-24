import {User} from "@/models";

export default interface Post {
    author: User,
    receiver: User,
    text: string,
}