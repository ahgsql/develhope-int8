import React, { useMemo, memo } from "react";

const FilteredList = memo(({ list }) => {
  const filteredList = useMemo(() => {
    console.log("Filter..");
    return list.filter((item) => item.age > 18);
  }, [list]);
  console.log("Memo Test");

  return (
    <div>
      <h2>Filtered List:</h2>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FilteredList;
