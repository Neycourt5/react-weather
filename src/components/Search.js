import React, { useState } from 'react'


const Search = ({ setCity, setIsLoading }) => {
    const [search, setSearch] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(search)
        setCity(search)
        setSearch('')
        setIsLoading(true)
    }

    return (
        <section>
            <form
                onSubmit={onSubmit}
                className='search'
            >
                <input
                    type="text"
                    placeholder='Search city'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
