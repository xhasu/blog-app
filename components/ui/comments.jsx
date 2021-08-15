import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { CommentsContext } from 'app/contexts/contexts'
import { fetcher } from 'app/services/dummyapi';
import Avatar from './avatar';

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

  const getDateFormated = (timestamp) => {
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
    return new Date(timestamp).toLocaleDateString('en-US', options);
  }

  return (
    <div comment-id={id} className="comment">
      <div className="comment-head">
        <Avatar src={picture} />
        <div className="owner-info">
          <div className="owner-name">{firstName} {lastName}</div>
          <div className="owner-date">{getDateFormated(publishDate)}</div>
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
    return (
      <div className="comments">
        <div className="comments-title">Loading...</div>
      </div>
    )
  }

  return (
    <div className="comments">
      <div className="comments-title">Comments</div>
      {data.data.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
      {data.data.length == 0 && <div className="comments-empty">No comments yet</div>}
    </div>
  )
}

export default Comments
