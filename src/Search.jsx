import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Search = () => {
    const {search,setsearch}= useContext(DataContext)
  return (
    <div>
        <input type="text" value={search}  placeholder='Search Here'
                         onChange={(e)=>setsearch(e.target.value)} 
      />
    </div>
  )
}

export default Search