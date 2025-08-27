import React, { PropsWithChildren } from 'react';

const Scroll: React.FC<PropsWithChildren<{}>> = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
		);
};


export default Scroll;