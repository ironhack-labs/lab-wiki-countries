import React from 'react'

export default function SearchBar({searchCountries}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Search..." onChange={searchCountries}/>
    </form>
  )
}
