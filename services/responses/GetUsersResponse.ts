import {User} from "@/models";

export default interface GetUsersResponse {
    users: User[]
    length: number
}