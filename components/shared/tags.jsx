import React from 'react'
import { shuffle } from 'lodash'

const Tags = ({tags, trending = false, setFilter}) => {

  const tagList = trending ? shuffle(tags).slice(0,10) : tags;

  const handleTagClick = (tag) => {
    if( tag == 'all' ) {
      setFilter(null);
    }else {
      setFilter(tag);
    }
  }
  
  return (
    <nav className="tags">
      {trending && <div className="tags-title">Trending</div>}
      <ul>
        <li onClick={() => {handleTagClick('all')}}>
          <span>#all</span>
        </li>
        {tagList.sort().map((tag, index) => (
          <li key={index} onClick={() => {handleTagClick(tag)}}>
            <span>#{tag}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Tags
