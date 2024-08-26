import { LucideChevronLeft } from 'lucide-react'
import Comment from '../components/Comment'

/* eslint-disable react/prop-types */
export default function ArticlePage({ displayArticle, onClick, prevPage }) {
  const { title, description, url, created_date, category_id } = displayArticle

  return (
    <>
      <div className='flex flex-col max-w-6xl mx-auto sm:px-6 lg:px-8 py-12'>
        <button
          className={`bg-${category_id} flex gap-2 w-fit ml-14 mb-2 bg-amber-500 text-white hover:brightness-75 pl-2 pr-4 py-2 font-bold rounded-md shadow-md`}
          onClick={() => onClick(prevPage)}
        >
          <LucideChevronLeft /> Back
        </button>

        <div className='flex mx-14 mt-10 bg-white shadow-xl rounded-lg'>
          <img
            src={url}
            alt='no image'
            className='rounded-md shadow-md bg-contain'
          />
          <div className='px-4 p-24 pl-30 '>
            <div className='text-5xl font-bold pb-7 '>{title}</div>
            <div>This article was publish on: {created_date}</div>
            <br />
            <div className='text-lg break-words'>{description}</div>
          </div>
        </div>
      </div>

      <Comment />
    </>
  )
}
