import React from 'react'

const Avatar = ({src}) => {
  return (
    <div className="avatar">
      <div className="avatar-media">
        <img src={src} alt="avatar" />
      </div>
    </div>
  )
}

export default Avatar
