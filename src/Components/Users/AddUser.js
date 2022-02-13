import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

export default function AddUser(props) {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// const [enteredUserName, setEnteredUserName] = useState('');
	// const [enteredUserAge, setEnteredUserAge] = useState('');
	const [error, setError] = useState();
	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({ title: 'Invalid Input', message: 'Please enter valid name and age' });
			return;
		}
		if (+enteredAge < 1) {
			setError({ title: 'Invalid Age', message: 'Please enter valid age(> 0)' });
			return;
		}

		props.onAddUser(enteredName, enteredAge);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
		// setEnteredUserName('');
		// setEnteredUserAge('');
	};
	const ErrorHandler = () => {
		setError(null);
	};
	return (
		<Wrapper>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler} />}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="UserName">User: </label>
					<input
						id="userName"
						type="text"
						autoComplete="off"
						ref={nameInputRef}
						// required
					></input>

					<label htmlFor="age">Age(Years): </label>
					<input
						id="age"
						type="number"
						autoComplete="off"
						ref={ageInputRef}
						// required
					></input>

					<Button className={classes.button} type="submit">
						Add User
					</Button>
				</form>
			</Card>
		</Wrapper>
	);
}
