/* eslint-disable react/prop-types */

import { useContext } from 'react'
import { ArticleContext } from '../contexts/ArticleContext'
export default function Card({ size, item, onClick, bgColor }) {
  const { title, url } = item
  const setArticle = useContext(ArticleContext)

  return (
    <div
      className={`${
        bgColor ? `${bgColor} text-white` : null
      } flex flex-col overflow-hidden rounded-lg ${
        size === 'big' ? 'w-[20rem] shadow-lg' : 'w-[9.5rem] shadow-md'
      }`}
      onClick={() => {
        onClick('Article')
        setArticle(item)
      }}
    >
      <div
        className={`${
          size === "big" ? "h-[13rem]" : "h-[6rem]"
        } overflow-hidden flex items-center`}
      >
        <img src={url} alt="no" className="w-full" />
      </div>
      <div className={`break-words px-1 flex text-center justify-center`}>
        <h3
          className={
            size === 'big'
              ? 'h-[6.5rem] text-3xl font-bold p-4'
              : 'h-[3.25rem] p-1'
          }
        >
          {title}
        </h3>
      </div>
    </div>
  )
}
