import React from 'react'
import {useParams} from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'
function EditUser() {
    let params=useParams();
    // const[SearchParams,setSearchParams]= useSearchParams();
    // console.log(SearchParams.get)
    console.log(params)
  return (
    <div>EditUser</div>
  )
}   

export default EditUser