import { useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";

/* eslint-disable react/prop-types */
export default function ListItem({ item, onClick }) {
  const { title, url, created_date } = item;
  const setArticle = useContext(ArticleContext);

  return (
    <>
      <div
        onClick={() => {
          onClick("Article");
          setArticle(item);
        }}
        className="flex rounded-lg bg-gray-100 shadow-lg overflow-hidden"
      >
        <div className="rounded-lg overflow-hidden w-fit">
          <img src={url} alt="no image" />
        </div>
        <div className="px-4 flex flex-col gap-2 break-words w-[60%]">
          <p className="text-5xl font-bold">{title}</p>
          <p className="text-2xl font-semibold pl-1">
            publish date:{created_date}
          </p>
        </div>
      </div>
    </>
  );
}
