import React from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/YourMatches.css';
import { Link } from 'react-router-dom';

export default function YourMatches({
  user,
  matchedUsers,
}: {
  user: User | null;
  matchedUsers: User[] | null;
}) {
  if (!user) return <p>Loading...</p>;

  return (
    <div className='your-matches'>
      {user && matchedUsers ? (
        <div className='your-matches__background'>
          <div>
            <div className='your-matches__text'>
              <h2>
                Your matches
                {matchedUsers.length ? ` (${matchedUsers.length})` : ''}
              </h2>
            </div>
            <div className='your-matches__bubbles'>
              {matchedUsers.length ? (
                matchedUsers &&
                matchedUsers.map((matchedUser) =>
                  matchedUser.dog && matchedUser.dog.images ? (
                    <div
                      className='your-matches__bubble'
                      key={matchedUser.userId}
                    >
                      <Link to={`/matchingViewDetail/${matchedUser.userId}`}>
                        <img
                          className='your-matches__profile'
                          src={matchedUser.dog.images[0]}
                          alt='profile'
                        />
                      </Link>
                    </div>
                  ) : (
                    ''
                  )
                )
              ) : (
                <p>No matches yet</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}
