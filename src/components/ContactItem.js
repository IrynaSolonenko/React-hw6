import React from 'react'

const ContactItem = ({contact, setCurrentContact, setVisible, handleDeleteContact}) => {
	return (
		<div className={'contact_item'}>
			<span></span>
			<div className={'contact_info'}>
				<div>{contact.name} {contact.surname}</div>
				<p>{contact.phone}</p>
			</div>
			<div className={'contact_actions'}>
				<button onClick={() => {
					setCurrentContact(contact)
					setVisible(true)
				}}>✍️</button>
				<button onClick={() => handleDeleteContact(contact.id)}>🗑</button>
			</div>
		</div>
	)
}

export default ContactItem