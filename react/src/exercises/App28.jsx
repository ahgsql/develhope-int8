import DisplayLanguage from "./components/DisplayLanguage";
import LanguageProvider from "./context/LanguageProvider";

function App() {
  return (
    <>
      <LanguageProvider>
        <DisplayLanguage />
      </LanguageProvider>
    </>
  );
}

export default App;
