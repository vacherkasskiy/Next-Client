import React from "react";
import {useFetchUserPostsQuery} from "@/services/PostsService";
import {UserPosts} from "@/components/ProfilePage";

interface UserPostsContainerProps {
    userId: number,
}

export default function UserPostsContainer({userId}: UserPostsContainerProps): React.ReactNode {
    const {data: posts, isLoading, error} = useFetchUserPostsQuery(userId)

    return (
        <>
            {posts && <UserPosts posts={posts} />}
        </>
    )
}