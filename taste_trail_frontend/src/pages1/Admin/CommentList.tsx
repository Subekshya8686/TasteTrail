import React from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { MdDelete } from 'react-icons/md';
import { FaCircleUser } from "react-icons/fa6";

interface Comment {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
}

const CommentList: React.FC = () => {
    // Fetch comments using React Query
    const { data: comments, refetch } = useQuery<Comment[]>("COMMENTS", async () => {
        const response = await axios.get("http://localhost:8080/comments");
        return response.data;
    });

    // Mutation for deleting a comment
    const deleteComment = useMutation(
        (id: number) => axios.delete(`http://localhost:8080/comments/${id}`),
        {
            onSuccess: () => {
                // Refetch comments after a successful deletion
                refetch();
            },
        }
    );

    return (
        <div className="commentlist">
            <section className="commentlist">
                {comments?.map((comment) => (
                    <div key={comment.id} className="commentlist-card flex">
                        <span>
                            <FaCircleUser />
                        </span>
                        <div className="commentlist-info">
                            <label className="user-name">{comment.firstName} {comment.lastName}</label>
                            <p>{comment.description}</p>
                        </div>
                        <div className="edit-delete">
                            <button onClick={() => deleteComment.mutate(comment.id)}>
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
