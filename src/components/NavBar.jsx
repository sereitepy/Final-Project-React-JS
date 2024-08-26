/* eslint-disable react/prop-types */
import { LucideChevronRight, LucideMenu } from 'lucide-react'
import NavItems from './NavItems'
export default function NavBar({
  navList,
  onNavClick,
  scrolled,
  page,
  setPage,
}) {
  return (
    <>
      <nav
        className={`${scrolled === 'up' ? 'sticky top-0 ' : 'top-auto'} 
             bg-amber-500 flex justify-center z-[1]`}
      >
        <div className='max-w-6xl h-16 flex flex-grow justify-between items-center text-white text-xl font-bold'>
          <div className='px-4 h-full flex items-center justify-center'>
            <img src='/logo.png' alt='no-logo' className='w-60' />
          </div>
          <div className='h-full hidden md:flex'>
            <NavItems page={page} setPage={setPage} />
          </div>
          <div className='h-full aspect-square flex justify-center items-center md:hidden'>
            <div
              className={`rounded-[4px] p-1 ${
                navList ? 'bg-red-700' : 'hover:bg-red-700'
              }`}
              onClick={onNavClick}
            >
              <LucideMenu />
            </div>
          </div>
        </div>
        {navList ? (
          <div className='lg:hidden fixed left-0 top-0 z-[1]'>
            <div
              className='h-screen w-screen bg-black opacity-60'
              onClick={e => {
                e.stopPropagation()
                onNavClick()
              }}
            ></div>
            <div className='fixed top-0 right-0 w-[20rem] h-screen bg-gray-100 text-2xl'>
              <div
                className={`absolute bottom-5 -left-7 aspect-square h-14 pl-4 rounded-full flex items-center bg-red-600 text-white`}
                onClick={onNavClick}
              >
                <LucideChevronRight />
              </div>
              <div className='flex flex-col divide-y-[1px]'>
                <NavItems
                  side={true}
                  page={page}
                  setPage={setPage}
                  onNavClick={onNavClick}
                />
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  )
}
