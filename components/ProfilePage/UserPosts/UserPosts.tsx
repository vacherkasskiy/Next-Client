import React from "react";
import {Post} from "@/models";
import {UserPost} from "@/components/ProfilePage";

interface UserPostsProps {
    posts: Post[]
}

export default function UserPosts({posts}: UserPostsProps): React.ReactNode {
    return (
        posts.map((post, index) =>
            <UserPost
                key={index}
                image={post.author.image}
                name={post.author.name}
                text={post.text}
            />
        )
    )
}