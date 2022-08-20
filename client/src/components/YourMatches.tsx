import React from 'react';
import { User } from '../../../globalUtils/Types';
import '../Css/components/YourMatches.css';
import { users } from '../assets/dataUser';

export default function YourMatches({
  user,
  matchedUsers,
}: {
  user: User | null;
  matchedUsers: User[] | null;
}) {
  const mockMatchedUsers = users.filter(
    (mockUser) => mockUser.userId !== user?.userId
  );
  // console.log(mockMatchedUsers);

  return (
    <div className="your-matches">
      {user && mockMatchedUsers ? (
        <div className="your-matches__background">
          <div>
            <div className="your-matches__text">
              <p>Your matches ({mockMatchedUsers.length})</p>
            </div>
            <div className="your-matches__bubbles">
              {mockMatchedUsers.length ? (
                mockMatchedUsers.map((matchedUser) =>
                  matchedUser.dog.images!.map((image) => (
                    <div key={image}>
                      <img src={image} />
                    </div>
                  ))
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
