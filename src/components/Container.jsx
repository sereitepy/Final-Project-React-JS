/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react'
import articles from '../data/articles.json'
import ContainerItems from './ContainerItems'
import PrevNextBtn from './PrevNextBtn'
import { LucideChevronRight } from 'lucide-react'

export default function Container({ category, onClick, bgColor }) {
  const [range, setRange] = useState(9)

  const mappedArticles = useMemo(
    () => articles.filter(item => item.category_id === category.id),
    [category.id]
  )

  const totalArticles = mappedArticles.length

  const filteredArticles = mappedArticles.slice(range - 9, range)

  const handleNext = () => {
    setRange(prev => prev + 9)
  }
  const handlePrev = () => {
    setRange(prev => prev - 9)
  }

  return (
    <div className='max-w-6xl mx-auto sm:px-6 lg:px-8 py-12'>
      <div
        className={`${bgColor} flex gap-2 w-fit ml-14 mb-2 text-white hover:brightness-75 pl-4 pr-2 py-2 font-bold rounded-md shadow-md cursor-pointer`}
        onClick={() => onClick(category.name)}
      >
        {category.name} <LucideChevronRight />
      </div>
      <div className='flex items-center'>
        <div className='min-w-10 m-2'>
          {range > 9 && (
            <PrevNextBtn onClick={handlePrev} btn='prev' bgColor={bgColor} />
          )}
        </div>
        <ContainerItems
          onClick={onClick}
          articles={filteredArticles}
          bgColor={bgColor}
        />
        <div className='min-w-10 m-2'>
          {range < totalArticles && (
            <PrevNextBtn onClick={handleNext} btn='next' bgColor={bgColor} />
          )}
        </div>
      </div>
    </div>
  )
}
