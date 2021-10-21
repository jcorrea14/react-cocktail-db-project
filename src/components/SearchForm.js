import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  const handleChange = (e) => {
    const searchTerm = e.target.value
    setSearchTerm(searchTerm)
  }

  return (
    <form className='search-form'>
      <div className='form-control'>
        <label htmlFor='name'> search your favourite cocktail</label>
        <input type='text' name='name' id='name' onChange={handleChange} />
      </div>
    </form>
  )
}

export default SearchForm
