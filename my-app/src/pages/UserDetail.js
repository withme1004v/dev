import { useParams } from "react-router-dom";

const UserDetail = () => {
   const { id } = useParams();
    
     return <h3>Details for User ID: {id}</h3>;
};

export default UserDetail;