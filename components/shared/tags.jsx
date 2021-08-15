import React from 'react'
import { shuffle } from 'lodash'

const Tags = ({tags, trending = false, setFilter}) => {

  const tagList = trending ? shuffle(tags).slice(0,10) : tags;
  
  return (
    <nav className="tags">
      {trending && <div className="tags-title">Trending</div>}
      <ul>
        {tagList.sort().map(tag => (
          <li key={tag} onClick={() => {setFilter(tag)}}>
            <span>#{tag}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Tags
