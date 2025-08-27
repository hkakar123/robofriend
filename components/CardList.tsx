import React from 'react';
import Card from './Card';

type Robot = {
	id: number | string;
	name: string;
	email: string;
};

type CardListProps = {
	robots: Robot[];
};

const CardList: React.FC<CardListProps> = ({ robots = [] }) => {

	return (
		<div>
			{robots.map((user, i) => {
		return (<Card 
		key={i} 
		id={user.id} 
		name={user.name} 
		email={user.email}
		/>
		);
	})
		}
		</div> 		
		);
}




export default CardList; 