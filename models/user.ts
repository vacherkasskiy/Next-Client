export default interface User {
    id: number
    name: string
    username: string
    email: string
    website: string | undefined
    city: string | undefined
    image: string | undefined
    status: string | undefined
    createdAt: Date
    updatedAt: Date
}