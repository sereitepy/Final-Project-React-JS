/* eslint-disable react/prop-types */
import Card from './Card'

export default function ContainerItems({ articles, bgColor, onClick }) {
  return (
    <div className='grid lg:grid-cols-6 grid-flow-row gap-4 md:grid-cols-4'>
      {articles.map((item, index) =>
        index < 1 ? (
          <div
            className='row-span-2 col-span-2 hover:shadow-lg cursor-pointer'
            key={item.id}
          >
            <Card size='big' item={item} bgColor={bgColor} onClick={onClick} />
          </div>
        ) : (
          <div className='hover:scale-110 cursor-pointer' key={item.id}>
            <Card onClick={onClick} item={item} />
          </div>
        )
      )}
    </div>
  )
}
