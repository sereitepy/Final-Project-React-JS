import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

/* eslint-disable react/prop-types */
export default function PrevNextBtn({ onClick, btn, bgColor }) {
  return (
    <button
      className={`${bgColor} p-2 rounded-full text-white hover:brightness-75 transition-colors shadow-md`}
      onClick={onClick}
      id={btn}
    >
      {btn === "next" ? <LucideChevronRight /> : <LucideChevronLeft />}
    </button>
  );
}
