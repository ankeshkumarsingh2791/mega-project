import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config.js"
import Container from '../components/Container/Container.jsx'

import PostCard from '../components/PostCard.jsx'

const AllPost = () => {

    const [posts, setPosts] = useState([])
    useEffect (() => {})
    appwriteService.getPost([]).then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })

   
  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
        </Container>
</div>
  )
}

export default AllPost