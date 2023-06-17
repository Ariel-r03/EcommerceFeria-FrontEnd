import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterContextProvider(props) {
  const [isFilter, setIsFilter] = useState(false);

  function modifyingIsFilter() {
    setIsFilter(!isFilter);
  }

  return (
    <FilterContext.Provider
      value={{
        isFilter: isFilter,
        modifyingIsFilter: modifyingIsFilter,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
