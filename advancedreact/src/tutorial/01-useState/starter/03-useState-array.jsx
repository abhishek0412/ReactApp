import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const addPerson = () => {
    const newPerson = { id: new Date().getTime().toString(), name: "John" };
    setPeople((prevPeople) => [...prevPeople, newPerson]);
  };

  const clearAllPeople = () => {
    setPeople([]);
  };

  const removePerson = (id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  return (
    <>
      <h2>useState array example</h2>

      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => removePerson(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={addPerson}>
        Add Person
      </button>
      <button
        className="btn"
        onClick={clearAllPeople}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
