import React, { useRef, useEffect } from "react";

export default function CarDetails({
  initial = { model: "Insignia", year: 2016, color: "#ffffff" },
}) {
  const formRef = useRef(null);
  let { model, year, color } = initial;
  useEffect(() => {
    formRef.current.reset();
  }, [initial]);

  return (
    <form ref={formRef}>
      <input type="text" name="model" defaultValue={model} />
      <input type="text" name="year" defaultValue={year} />
      <input type="color" name="color" defaultValue={color} />
    </form>
  );
}
