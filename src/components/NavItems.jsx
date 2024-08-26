/* eslint-disable react/prop-types */
import categories from '../data/categories.json';
export default function NavItems({ page, setPage, onNavClick, side }) {
  const handleClick = (x) => {
    setPage(x);
    onNavClick && onNavClick();
  };

  return (
    <>
      <div
        onClick={() => handleClick('Home')}
        className={`${
          side ? 'w-full px-4' : 'w-[8rem] justify-center'
        } min-h-16 flex items-center hover:text-white ${
          page === 'Home' ? 'bg-red-700 text-white' : 'hover:bg-red-700'
        }`}>
        Home
      </div>
      {categories.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item.name)}
          className={`${
            side ? 'w-full px-4' : 'w-[8rem] justify-center'
          } min-h-16 flex items-center hover:text-white ${
            page === item.name ? 'bg-red-700 text-white' : 'hover:bg-red-700'
          }`}>
          {item.name}
        </div>
      ))}
    </>
  );
}
