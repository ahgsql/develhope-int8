import DisplayLanguage2 from "./components/DisplayLanguage2";
import LanguageProvider from "./context/LanguageProvider";

function App() {
  return (
    <>
      <LanguageProvider>
        <DisplayLanguage2 />
      </LanguageProvider>
    </>
  );
}

export default App;
