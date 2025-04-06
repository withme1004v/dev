import { Link } from "react-router-dom";

const dummyUsers = [
  { id: 1, name: "Korea" },
  { id: 2, name: "Seoul" },
]

const Users = () => {
  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        {dummyUsers.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;