
export const Friends = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <img
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};