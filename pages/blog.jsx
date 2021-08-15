import React from 'react'
import Header from 'components/shared/header'
import Tags from 'components/shared/tags'
import Posts from 'components/blog/posts'

import { getPosts } from 'app/services/dummyapi'
import { UserProvider, CommentsProvider } from 'app/contexts/contexts'

const BlogPage = ({data}) => {

  return (
    <div>
      <Header />
      <Tags />
      <UserProvider>
        <CommentsProvider>
          <Posts posts={data} />
        </CommentsProvider>
      </UserProvider>
    </div>
  )
}

export default BlogPage


export const getServerSideProps = async (context) => {

  const response = await getPosts();

  return {
    props: {
      title: 'Blog',
      data: response.data,
    }
  }
}