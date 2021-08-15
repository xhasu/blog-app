import React, { useState } from 'react'
import { ModalUserProvider, ModalCommentsProvider } from 'app/contexts/contexts'
import { ModalUser, ModalComments } from 'components/shared/modals'
import Card from 'components/ui/card'
import User from 'components/ui/user'
import Comments from 'components/ui/comments'

const Posts = ({ posts }) => {

  const { data } = posts;

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
            {data.map((post, index) => {
              return <Card key={index} post={post} setComments={setComments} />
            })}
          </section>

        </ModalCommentsProvider>
      </ModalUserProvider>
    </div>
  )
}

export default Posts
