import { Link } from "react-router-dom";

const students = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Maria" },
  { id: 3, name: "John" },
];

function Students() {
  return (
    <>
      <h2>Students</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link to={`/students/${s.id}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Students;