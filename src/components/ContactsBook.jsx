import React, {useState} from 'react'
import MyHeader from "./MyHeader"
import ContactsList from "./ContactsList"
import MyDialog from "./UI/MyDialog/MyDialog"

const ContactsBook = () => {

	const [contacts, setContacts] = useState([
		{
			id: 1,
			name: 'Lidia',
			surname: 'Nikitina',
			phone: '+38 (123) 123 45 67'
		},
		{
			id: 2,
			name: 'Maria',
			surname: 'Orlova',
			phone: '+38 (123) 123 45 67'
		},
		{
			id: 3,
			name: 'Iryna',
			surname: 'Petrich',
			phone: '+38 (123) 123 45 67'
		},
		{
			id: 4,
			name: 'Olga',
			surname: 'Baritska',
			phone: '+38 (123) 123 45 67'
		},
		{
			id: 4,
			name: 'Olga',
			surname: 'Marirchko',
			phone: '+38 (123) 123 45 67'
		},
		{
			id: 4,
			name: 'Svetlana',
			surname: 'Prihodko',
			phone: '+38 (123) 123 45 67'
		},
		{
			id: 4,
			name: 'Alex',
			surname: 'Manson',
			phone: '+38 (123) 123 45 67'
		}
	])

	const [currentContact, setCurrentContact] = useState({})
	const [searchedContacts, setSearchedContacts] = useState(contacts)
	const [visible, setVisible] = useState(false)

	const handleUpdateContact = (contact) => {
		setContacts(contacts.map(item => item.id === contact.id ? contact : item))
		setVisible(false)
	}

	const handleDeleteContact = (id) => {
		setSearchedContacts(searchedContacts.filter(item => item.id !== id))
	}

	const handleSearch = (query) => {
		setSearchedContacts(contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()) | contact.surname.toLowerCase().includes(query.toLowerCase()) | contact.phone.toLowerCase().includes(query.toLowerCase())))
	}

	return (
		<div className={'container'}>
			<MyHeader/>
			<ContactsList
				contacts={searchedContacts}
				handleSearch={handleSearch}
				setCurrentContact={setCurrentContact}
				handleDeleteContact={handleDeleteContact}
				setVisible={setVisible}
			/>
			<span>
				<a href="https://github.com/IrynaSolonenko">My GitHub account</a>
			</span>

			<MyDialog
				visible={visible}
				setVisible={setVisible}
				handleUpdateContact={handleUpdateContact}
				currentContact={currentContact}
			/>
		</div>
	)
}

export default ContactsBook