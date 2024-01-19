import { MdDelete } from 'react-icons/md';
import {FaCircleUser} from "react-icons/fa6";
import React from "react";

interface Comment {
    id: number;
    username: string;
    text: string;
}

interface CommentListProps {
    comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <div className="commentlist">
            <section className="commentlist">
                {comments.map((comment) => (
                    <div key={comment.id} className="commentlist-card flex">
            <span>
              <FaCircleUser/>
            </span>
                        <div className="commentlist-info">
                            <label className="user-name">{comment.username}</label>
                            <p>{comment.text}</p>
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

export default CommentList;
