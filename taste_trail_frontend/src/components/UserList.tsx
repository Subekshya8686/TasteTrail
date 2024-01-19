// import { FaCircleUser} from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
// import Profiler from "./Profiler.tsx";

interface User {
    id: number;
    name: string;
}

interface UserListProps {
    users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div className="userlist">
            <section className="userlist">
                {users.map((user) => (
                    <div key={user.id} className="userlist-card flex">
            <span>
              {/*<Profiler userId={"123"}/>*/}
            </span>
                        <div className="userlist-info flex">
                            <label className="user-name">{user.name}</label>
                        </div>
                        <div className="edit-delete">
                            <button>
                                <MdDelete size="2rem" />
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default UserList;
