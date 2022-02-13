import React, { Fragment, useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
	const [userList, setUserList] = useState([]);
	const addUserHandler = (uName, uAge) => {
		setUserList((prevUserList) => {
			return [...prevUserList, { name: uName, age: uAge, id: Math.random.toString() }];
		});
	};
	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={userList} />
		</Fragment>
	);
}

export default App;
