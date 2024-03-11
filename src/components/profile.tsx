'use client'
import React from 'react';
import { useSession } from 'next-auth/react';

interface Props {
}

const Profile: React.FC<Props> = ({ }) => {
	const session = useSession()

	if(session.data?.user) {
		return <div>{JSON.stringify(session.data.user)}</div>
	}

	return (
		<div>
			from client: user is not logged in
		</div>
	);
};

export default Profile;