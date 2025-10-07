import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name);
    // if no value, do nothing
    if (!name) return;
    // if value, setup new user and add to current users
    const fakeId = Date.now();
    console.log(fakeId);
    // const newUser = { id: fakeId, name: name };
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    // set back to empty
    setName("");
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label
            htmlFor="name"
            className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>users</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              onClick={() => removeUser(user.id)}
              className="btn">
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
