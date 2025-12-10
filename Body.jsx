import React from 'react'

export const Body = ({list,handleCheck,handleDelete}) => {
  return (
    <div>
        <input type='text' placeholder='New Student'/>
        <button >Add</button>
        <br></br>
        <input type='text' id='search' placeholder='Search'/>
        
                <ul>
        {
           list.map((ls)=>
            <li key={ls.id}>
                  <input type="checkbox" checked={ls.fee} 
                                         onChange={()=>handleCheck(ls.id)} />
                  <label>{ls.sname}</label>
                  <button onClick={()=>handleDelete(ls.id)}>Delete</button>
            </li>
          )
        }
        </ul>
    </div>
  )
}