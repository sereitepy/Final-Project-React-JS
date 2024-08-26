import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import { useRef, useState } from 'react'
import ArticlePage from './pages/ArticlePage'
import { ArticleContext } from './contexts/ArticleContext'
import NavBar from './components/NavBar'

function App() {
  const [page, setPage] = useState('Home')
  const [prevPage, setPrevPage] = useState(page)
  const [displayArticle, setDisplayArticle] = useState()
  const [scrolled, setScrolled] = useState('up')
  const [navList, setNavList] = useState(false);
  const onNavClick = () => { setNavList(!navList) }

  const handlePageChange = destination => {
    setPrevPage(page)
    setPage(destination)
  }

  const handleArticle = article => {
    setDisplayArticle(article)
  }

  const prevScroll = useRef(window.scrollY)

  const handleScroll = () => {
    const currentScroll = window.scrollY
    currentScroll > prevScroll.current ? setScrolled('down') : setScrolled('up')
    setTimeout(() => (prevScroll.current = window.scrollY), 200)
  }

  window.addEventListener('scroll', handleScroll)


  return (
    <div className={`${navList?"h-screen overflow-y-hidden":null} bg-slate-100`}>
      <NavBar scrolled={scrolled} page={page} navList={navList} onNavClick={onNavClick} setPage={handlePageChange} />
      {page === 'Home' ? (
        <ArticleContext.Provider value={handleArticle}>
          <HomePage onClick={handlePageChange} />
        </ArticleContext.Provider>
      ) : page === 'Article' ? (
        <ArticlePage
          displayArticle={displayArticle}
          prevPage={prevPage}
          onClick={handlePageChange}
        />
      ) : (
        <ArticleContext.Provider value={handleArticle}>
          <CategoryPage page={page} onClick={handlePageChange} />
        </ArticleContext.Provider>
      )}
    </div>
  )
}

export default App
