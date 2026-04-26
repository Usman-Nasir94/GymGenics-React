import React from 'react'

const SectionHeader = ({ children, theme = "dark" }) => {
  return (
    <h2 className={`text-3xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
      {children}
    </h2>
  );
};

export default SectionHeader
