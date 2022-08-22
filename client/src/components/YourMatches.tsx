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
    <div className="your-matches">
      {user && matchedUsers ? (
        <div className="your-matches__background">
          <div>
            <div className="your-matches__text">
              <h1>
                Your matches
                {matchedUsers.length ? ` (${matchedUsers.length})` : ''}
              </h1>
            </div>
            <div className="your-matches__bubbles">
              {matchedUsers.length ? (
                matchedUsers &&
                matchedUsers.map((mockUser) =>
                  mockUser.dog && mockUser.dog.images ? (
                    <div className="your-matches__bubble" key={mockUser.userId}>
                      {/* Link needs to go to correct user profile, probably using url params */}
                      <Link to={'/matchingViewDetail'}>
                        <img
                          className="your-matches__profile"
                          src={mockUser.dog.images[0]}
                          alt="profile"
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
