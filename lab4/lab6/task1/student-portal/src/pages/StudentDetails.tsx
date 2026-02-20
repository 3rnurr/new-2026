import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  return (
    <>
      <h2>Student details</h2>
      <p>Student ID: {id}</p>
    </>
  );
}

export default StudentDetails;