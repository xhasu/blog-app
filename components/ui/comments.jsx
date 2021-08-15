import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { CommentsContext } from 'app/contexts/contexts'
import { fetcher } from 'app/services/dummyapi';

const Comment = (props) => {

  const {
    id = '',
    message = '',
    owner: {
      id: ownerId = '',
      title = '',
      firstName = '',
      lastName = '',
      picture = '',
    } = {},
    postId = '',
    publishDate = '',
  } = props;

  return (
    <div comment-id={id} className="comment">
      <div className="comment-head">
        <div className="comment-owner">
          <div className="owner-name">{firstName} {lastName}</div>
        </div>
      </div>
      <div className="comment-content">
        <div className="comment-text">
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

const Comments = () => {

  const [post, setPost] = useContext(CommentsContext);
  const { data, error } = useSWR('/post/' + post.id + '/comment', fetcher);

  if (error) {
    return <div>Error</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data.data.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  )
}

export default Comments
