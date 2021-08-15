import React, { useState } from 'react'
import Header from 'components/shared/header'
import Tags from 'components/shared/tags'
import Posts from 'components/blog/posts'

import { getPosts, getTags } from 'app/services/dummyapi'
import { UserProvider, CommentsProvider } from 'app/contexts/contexts'

const BlogPage = ({ posts, tags }) => {

  const [filter, setFilter] = useState(false);

  // filter posts by tag
  const filterPosts = (posts, filter) => {
    if (filter) {
      return posts.filter(post => post.tags.indexOf(filter) > -1)
    }
    return posts
  };

  // get unique tags from posts
  const getUniqueTags = (posts) => {
    return posts.reduce((acc, post) => {
      return acc.concat(post.tags)
    }, [])
    .filter((tag, index, arr) => arr.indexOf(tag) === index)
  };

  const uniqueTags = getUniqueTags(posts.data);
  const resultPosts = filterPosts(posts.data, filter);

  return (
    <div>
      <Header />
      <Tags tags={uniqueTags} trending={true} setFilter={setFilter} />
      <UserProvider>
        <CommentsProvider>
          <Posts posts={resultPosts} />
        </CommentsProvider>
      </UserProvider>
    </div>
  )
}

export default BlogPage


export const getServerSideProps = async (context) => {

  const posts = await getPosts();
  const tags = await getTags();

  return {
    props: {
      title: 'Blog',
      posts: posts.data,
      tags: tags.data
    }
  }
}