export default interface EditProfileRequest {
    image?: string
    name: string,
    username: string,
    email: string,
    city?: string,
    website?: string
}