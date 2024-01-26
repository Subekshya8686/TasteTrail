import React, { useState } from 'react';
import '../pages1/css/Recipes.css';
import { FaCircleUser } from 'react-icons/fa6';
import '../pages1/css/AdminPanel.css'

interface RecipeRateCommentProps {
    onRate: (rating: number) => void;
    onComment: (comment: { userId: number; username: string; contentId: number; description: string }) => void;
}

interface Comment {
    id: number;
    username: string;
    description: string;
}

const Rate_comment: React.FC<RecipeRateCommentProps & { contentId: number }> = ({ onRate, onComment, contentId }) => {
    const [rating, setRating] = useState<number | null>(null);
    const [comment, setComment] = useState<string>('');
    const [comments, setComments] = useState<Comment[]>([]);
    // console.log('Recipe View Page - Content ID:', contentId);

    const handleRate = (value: number) => {
        setRating(value);
        onRate(value);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onComment({
            userId: 123, // Replace with the actual userId
            username: 'User', // Replace with the actual username
            contentId: 456, // Replace with the actual contentId
            description: comment,
        });

        // Simulate a unique id for the comment (replace with actual logic)
        const newComment: Comment = {
            id: comments.length + 1,
            username: 'User', // You might get the username from authentication
            description: comment,
        };

        // onComment(`${contentId}: ${newComment.text}`);
        setComments([...comments, newComment]);
        setComment('');
        window.alert('Your rate and review have been submitted successfully!');
    };

    return (
        <div className="recipe-rate-comment">
            <div className="rating-section">
                <p>Rate this recipe:</p>
                {[1, 2, 3, 4, 5].map((value) => (
                    <span key={value} onClick={() => handleRate(value)} className={value <= (rating || 0) ? 'active' : ''}>
                        ★
                    </span>
                ))}
            </div>

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
            </div>

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

export default Rate_comment;
