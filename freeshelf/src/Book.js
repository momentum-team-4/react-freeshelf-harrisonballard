import React, { ImageBackground, View, useState } from 'react'

export default function Book (props) {
  const { book } = props

  const [expanded, setExpanded] = useState(false)

  return (
    <div className='Book'>
      <View>
        <ImageBackground source={{ uri: book.coverImageURL }}>
          <h2>{book.title}</h2>
          <div>Author: {book.author}</div>
          <p>{book.shortDescription}</p>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Hide more info' : 'Show more info'}
          </button>
          {expanded && (
            <div>
              <div>URL: <a href={book.url}>{book.url}</a></div>
              {book.publicationDate && <div>Publication date: {book.publicationDate}</div>}
              {book.publisher && <div>Publisher: {book.publisher}</div>}
              <p>More about this book: {book.detailedDescription}</p>
            </div>
          )}
        </ImageBackground>
      </View>
    </div>
  )
}