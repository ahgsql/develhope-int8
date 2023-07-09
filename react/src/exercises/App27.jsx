import Todolist from "./components/Todolist5";

function App() {
  return (
    <>
      <Todolist
        render={(items, deleteItem) => {
          return (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button
                    className="smallbtn"
                    onClick={deleteItem}
                    data-item={item}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          );
        }}
      />
    </>
  );
}

export default App;
