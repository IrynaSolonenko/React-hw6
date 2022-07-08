import React from 'react'
import ContactItem from "./ContactItem"
import SearchBar from "./UI/SearchBar/SearchBar"

const ContactsList = ({contacts, setCurrentContact, setVisible, handleDeleteContact, handleSearch}) => {
	return (
		<div className={'contacts-container'}>
			<SearchBar handleSearch={handleSearch}/>
			{contacts.length === 0 ?
				<div>
					No contacts found
				</div>
				:
				contacts.map(contact => (
						<ContactItem
							handleDeleteContact={handleDeleteContact}
							setCurrentContact={setCurrentContact}
							setVisible={setVisible}
							key={contact.phone}
							contact={contact}
						/>
					))
			}
		</div>
	)
}

export default ContactsList