import React, { useContext } from 'react'
import Avatar from 'components/ui/avatar'
import { ModalUserContext, ModalCommentsContext, UserContext, CommentsContext } from 'app/contexts/contexts'
import { HeartIcon } from 'components/shared/svgs';

const Card = ({ post }) => {

  const {
    id = '',
    image = '',
    likes = 0,
    tags = [],
    text = '',
    publishDate = '',
    owner = {},
  } = post;

  const [showComments, setShowComments] = useContext(ModalCommentsContext);
  const [comments, setComments] = useContext(CommentsContext);

  const getDateFormated = (timestamp) => {
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
    return new Date(timestamp).toLocaleDateString('en-US', options);
  }

  const handleShowComments = () => {
    setComments(post);
    setShowComments(true);
  }

  return (
    <div post-id={id} className="card">

      <CardHead data={owner} />

      <div className="card-media">
        <img src={image} alt="" />
      </div>

      <div className="card-body">
        <div className="card-actions">
          <HeartIcon /> <span>{likes}</span> <br />
          Liked by X <strong>and X others</strong>
        </div>
        <div className="card-text">
          <p>{text}</p>
        </div>
        <div className="card-tags">
          {tags.map((tag, i) => <span key={i}>#{tag} </span>)}
        </div>
      </div>

      <div className="card-date">
        <span>{getDateFormated(publishDate)}</span>
      </div>

      <div className="card-footer">
        <span className="link" onClick={handleShowComments}>Show comments</span>
      </div>

    </div>
  )
}

export default Card

export const CardHead = ({data}) => {

  const {
    id = "",
    title = "",
    firstName = "",
    lastName = "",
    picture = "",
  } = data;

  const [user, setUser] = useContext(UserContext);
  const [showModalUser, setShowModalUser] = useContext(ModalUserContext);

  const handleClick = (event) => {
    setUser(data);
    setShowModalUser(prev => true);
  }

  const getName = () => {
    return `${title}. ${firstName} ${lastName}`;
  }

  return (
    <div data-id={id} className="card-head" onClick={handleClick}>
      <Avatar src={picture} />
      <span>
        {getName()} <br />
        <small>View profile</small>
      </span>
    </div>
  )
}