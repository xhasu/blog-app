import React, { useState } from 'react'
import { ModalUserProvider, ModalCommentsProvider } from 'app/contexts/contexts'
import { ModalUser, ModalComments } from 'components/shared/modals'
import Card from 'components/ui/card'
import User from 'components/ui/user'
import Comments from 'components/ui/comments'

const Posts = ({ posts }) => {

  const [comments, setComments] = useState(false);

  return (
    <div className="Posts posts">
      <ModalUserProvider>
        <ModalCommentsProvider>
        
          <ModalUser>
            <User />
          </ModalUser>

          <ModalComments>
            <Comments />
          </ModalComments>
          
          <section className="section posts-content">
            {posts.map((post, index) => {
              return <Card key={index} post={post} setComments={setComments} />
            })}
          </section>
          {posts.length === 0 && (
            <div className="posts-empty">
              <h2>Ups! No posts found</h2>
              <h4>Try again later</h4>
            </div>
          )}

        </ModalCommentsProvider>
      </ModalUserProvider>
    </div>
  )
}

export default Posts
