import React from 'react'

const Avatar = ({src, type = ''}) => {
  return (
    <div className={`avatar avatar-${type}`}>
      <div className="avatar-media">
        <img src={src} alt="avatar" />
      </div>
    </div>
  )
}

export default Avatar
