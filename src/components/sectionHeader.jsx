import React from 'react'

const SectionHeader = ({ sentence, highlight = "first", theme = "dark" }) => {
  const words = sentence.split(" ");
  
  // Logic to pick which word to highlight
  const highlightIndex = highlight === "first" ? 0 : words.length - 1;
  
  // Logic for base text color (white for dark bg, black for light bg)
  const baseTextColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <h2 className={`text-3xl font-bold ${baseTextColor} mb-6`}>
      {words.map((word, index) => {
        const isHighlighted = index === highlightIndex;
        return (
          <span 
            key={index} 
            className={isHighlighted ? "text-[#FF5722]" : ""}
          >
            {word}{index !== words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </h2>
  );
};

export default SectionHeader
