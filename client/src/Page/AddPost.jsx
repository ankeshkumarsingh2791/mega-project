
import React from 'react'
import  PostForm  from '../components/Post-form/PostForm'
import Container from '../components/Container/Container.jsx'


function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
