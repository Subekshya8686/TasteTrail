import React, { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import '../pages1/css/Recipes.css';

interface CommentProps {
    onCommentSubmit: (comment: string) => void;
    comments: Comment[];
}

interface Comment {
    id: number;
    username: string;
    description: string;
}

const Comment: React.FC<CommentProps> = ({ onCommentSubmit, comments }) => {
    const [comment, setComment] = useState<string>('');

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!comment.trim()) {
            window.alert('Please enter a comment before submitting.');
            return;
        }

        onCommentSubmit(comment);
        setComment('');
    };

    return (
        <div className="comment-section">
            <p>Leave a comment:</p>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    rows={4}
                    placeholder="Type your comment here..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                <button type="submit">Submit</button>
            </form>

            {/* Display Comments */}
            <div className="comments-section">
                <h3>Comments:</h3>
                {comments.map((comment) => (
                    <div key={comment.id} className="commentlist-card flex">
                        <span>
                            <FaCircleUser />
                        </span>
                        <div className="commentlist-info">
                            <label className="user-name">{comment.username}</label>
                            <p>{comment.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comment;
