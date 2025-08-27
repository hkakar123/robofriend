import React from 'react';
import Link from 'next/link';

type CardProps = {
  id: number | string;
  name: string;
  email: string;
};

const Card: React.FC<CardProps> = ({ name, email, id }) => {
  return (
    <Link
      href={`/robots/${id}`}
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
    >
      <img
        alt="robots"
        src={`https://robohash.org/${id}?200x200`}
        width={268}
        height={268}
        style={{ objectFit: 'cover' }}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </Link>
  );
};

export default Card;
