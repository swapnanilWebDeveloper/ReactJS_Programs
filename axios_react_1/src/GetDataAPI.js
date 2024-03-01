import React, { useEffect, useState } from 'react'
import { getPosts, createPost, updatePost, deletePost } from "./LocalAPI"

function GetDataAPI() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: "", body: "" });

    // GET Request
    useEffect(() => {
        getPosts()
            .then((response) => {
                setPosts(response.data);
                console.log(response);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error fetching post " + error);
            })
    }, [])

    // Update Post
    const handleUpdatePost = (postId, updateData) => {
        updatePost(postId, updateData)
            .then((response) => {
                const updatedPosts = posts.map((post) =>
                    post.id === postId ? response.data : post
                );
                setPosts(updatedPosts);
                console.log(updatedPosts);
            })
            .catch((error) => {
                console.log("Updating data error : " + error);
            })
    }

    // Delete Post
    const handleDeletePost = (postId) => {
        deletePost(postId)
            .then(() => {
                const updatedPosts = posts.filter((post) => post.id !== postId)
                setPosts(updatedPosts);
            })
            .catch((error) => {
                console.log("Error deleting post : " + error);
            })
    }

    // create Post
    const handleCreatePost = () => {
        createPost(newPost)
            .then((response) => {
                console.log(response)
                console.log(response.data)
                setPosts([...posts, response.data]);
                setNewPost({ title: "", body: "", })
            })
            .catch((error) => {
                console.log("Error creating the post..." + error);
            })
    }

    return (
        <div>
            <h4>get data api method is executing.....</h4>
            <h3>Posts ...</h3>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>
                            <h4>{post.id}</h4>
                            <h4>{post.title}</h4>
                            <h4>{post.body}</h4>
                            <button onClick={() => handleUpdatePost(post.id, {
                                title: "Updated title",
                                body: "Updated body",
                            })}>update</button>
                            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>

            <hr />
            <br /><br />

            <h3>Create new post</h3>

            <input type="text"
                placeholder="title sponsership TATA IPL"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <input type="text"
                placeholder="body"
                value={newPost.body}
                onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            />
            <button onClick={handleCreatePost} >create</button>
        </div>
    )
}

export default GetDataAPI
