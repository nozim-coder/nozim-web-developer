import React from "react";

const MyButon = ({children, ...props}) => {
  return (
    <div>
      <button {...props}>
          {children}
      </button>
    </div>
  );
};

export default MyButon;
