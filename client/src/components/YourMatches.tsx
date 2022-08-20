import React from 'react';
import { User } from '../../../globalUtils/Types';

export default function YourMatches({
  user,
  matchedUsers,
}: {
  user: User | null;
  matchedUsers: User[] | null;
}) {
  return (
    <>
      {user && matchedUsers ? (
        <div className="your-matches">
          <div className="your-matches__text">
            <p>Your matches ({matchedUsers.length})</p>
          </div>
          <div className="your-matches__bubbles"></div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}
