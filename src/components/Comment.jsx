import { useState } from 'react'

const Comment = () => {
  const [comments, setComments] = useState([
    { username: 'papaya', time: '10min ago', text: 'I love this movie!' },
  ])

  const [newComment, setNewComment] = useState('')

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        username: 'paprika',
        time: 'Just now',
        text: newComment,
      }

      setComments([newCommentObj, ...comments])
      setNewComment('')
    }
  }

  return (
    <div className='max-w-6xl mx-auto mt-8 mb-20'>
      {' '}
      {/* Added mb-20 for bottom margin */}
      <h2 className='text-5xl font-semibold mb-4'>Comments</h2>
      <div className='p-6 bg-white rounded-lg shadow-md mb-6'>
        <textarea
          className='w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows='3'
          placeholder='Write your comment...'
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        ></textarea>
        <button
          className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200'
          onClick={handleCommentSubmit}
        >
          Comment
        </button>
      </div>
      <div className='space-y-4'>
        {comments.map((comment, index) => (
          <div key={index} className='p-6 bg-white rounded-lg shadow-md'>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-semibold'>{comment.username}</span>
              <span className='text-gray-500 text-sm'>{comment.time}</span>
            </div>
            <p className='text-gray-700 mb-4'>{comment.text}</p>
            <div className='flex space-x-4 text-sm'>
              <button className='text-green-500 hover:text-green-600'>
                Like
              </button>
              <button className='text-red-500 hover:text-red-600'>
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comment
