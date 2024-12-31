
'use client'; 
import Navbar from '../components/navbar';

import { useState } from 'react';

const Comments = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the comment submission (e.g., send to server or log to console)
    console.log('Comment submitted:', comment);
    setComment(''); // Clear the input field after submission
  };

  return (
    <div className="mt-8">
      <div className="mb-5">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          rows={4}
          className="w-full p-1 border border-gray-300 rounded-md"
          placeholder="Leave a comment..."
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-yellow-500"
      >
        Submit
      </button>
    </div>
  );
};

export default Comments;
