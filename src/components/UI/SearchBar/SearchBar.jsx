import React, {useEffect, useState} from 'react'

const SearchBar = ({handleSearch}) => {

	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		handleSearch(searchQuery)
	}, [searchQuery])

	return (
		<input
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			className={'search'}
			placeholder={'Search'}
		/>
	)
}

export default SearchBar