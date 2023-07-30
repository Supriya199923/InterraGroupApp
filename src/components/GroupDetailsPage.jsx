import { useParams } from 'react-router-dom';

const GroupDetailsPage = () => {
  const { groupId } = useParams();

  // Fetch additional details about the group using 'groupId' (if needed)

  return (
    <div>
      <h1>Group Details Page</h1>
      <p>Group Name: {groupId}</p>
      {/* Display other details about the group */}
    </div>
  );
};

export default GroupDetailsPage;
