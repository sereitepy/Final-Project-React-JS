/* eslint-disable react/prop-types */
import CatagoryItems from "../components/CategoryItems";
import categories from "../data/categories.json";
import articles from "../data/articles.json";
import {
  LucideChevronLeft,
  LucideLayoutGrid,
  LucideLayoutList,
} from "lucide-react";
import { useMemo, useState } from "react";
import { CategoryColors } from "../utils/CategoryColors";

export default function CategoryPage({ page, onClick }) {
  const [display, setDisplay] = useState("list");
  const category = categories.find((item) => item.name === page);
  const bgColor = CategoryColors[categories.indexOf(category)];
  const mappedArticles = useMemo(
    () => articles.filter((item) => item.category_id === category.id),
    [category.id]
  );

  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between mx-14">
          <button
            className={`${bgColor} flex gap-2 w-fit mb-2 text-white hover:brightness-75 pr-4 pl-2 py-2 font-bold rounded-md shadow-md`}
            onClick={() => {
              onClick("Home");
            }}
          >
            <LucideChevronLeft /> {category.name}
          </button>

          <div>
            <button
              className={`${
                display === "list"
                  ? "bg-slate-100 shadow-sm"
                  : "bg-slate-50 shadow-md hover:brightness-90"
              } p-2 border rounded-l-md`}
              onClick={() => setDisplay("list")}
            >
              <LucideLayoutList />
            </button>
            <button
              className={`${
                display === "grid"
                  ? "bg-slate-100 shadow-sm"
                  : "bg-slate-50 shadow-md hover:brightness-90"
              } p-2 border rounded-r-md`}
              onClick={() => setDisplay("grid")}
            >
              <LucideLayoutGrid />
            </button>
          </div>
        </div>
        <CatagoryItems
          onClick={onClick}
          display={display}
          articles={mappedArticles}
        />
      </div>
    </>
  );
}
