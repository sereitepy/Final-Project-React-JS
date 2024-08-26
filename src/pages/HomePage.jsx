/* eslint-disable react/prop-types */
import Container from "../components/Container";
import categories from "../data/categories.json";
import { CategoryColors } from "../utils/CategoryColors";

export default function HomePage({ onClick }) {
  return (
    <>
      {categories.map((item, index) => (
        <Container
          key={item.id}
          bgColor={CategoryColors[index]}
          category={item}
          onClick={onClick}
        />
      ))}
    </>
  );
}
