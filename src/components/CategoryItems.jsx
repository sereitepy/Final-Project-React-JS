/* eslint-disable react/prop-types */
import Card from "./Card.jsx";
import ListItem from "./ListItem.jsx";
export default function CatagoryItems({ articles, display, onClick }) {
  return (
    <>
      {display === "list" ? (
        <div className="flex flex-col gap-4 mx-14">
          {articles.map((item) => (
            <ListItem onClick={onClick} key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mx-14 grid lg:grid-cols-3 grid-flow-row gap-4 md:grid-cols-2">
          {articles.map((item) => (
            <Card onClick={onClick} size="big" key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
