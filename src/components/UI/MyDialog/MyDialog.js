import React, {useEffect, useState} from 'react'

const MyDialog = ({visible, setVisible, currentContact, handleUpdateContact}) => {

	const [updatedContact, setUpdatedContact] = useState({})

	const handleChangeContact = (e) => {
		setUpdatedContact({...updatedContact, [e.target.name]: e.target.value})
	}

	useEffect(() => {
		setUpdatedContact(currentContact)
	}, [currentContact])

	return (
		<div
			className={visible ? 'my-dialog my-dialog_visible' : 'my-dialog'}
			onClick={() => setVisible(false)}
		>
			<div
				className="dialog_content"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="dialog_header">
					<p>Edit contact: <strong>{updatedContact.name} {updatedContact.surname}</strong></p>
					<p
						onClick={() => setVisible(false)}
					>X</p>
				</div>
				<div className="dialog_body">
					<span></span>
					<div className="dialog_actions">
						<label htmlFor="name">First name</label>
						<input
							onChange={handleChangeContact}
							value={updatedContact.name}
							name={'name'}
							id={'name'}
							type="text"
						/>
						<label htmlFor="surname">Last name</label>
						<input
							onChange={handleChangeContact}
							value={updatedContact.surname}
							name={'surname'}
							id={'surname'}
							type="text"
						/>
						<label htmlFor="phone">Phone number</label>
						<input
							onChange={handleChangeContact}
							value={updatedContact.phone}
							name={'phone'}
							id={'phone'}
							type="text"
						/>
						<button onClick={() => handleUpdateContact(updatedContact)}>Save</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyDialog;