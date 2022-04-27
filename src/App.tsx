import { FC, useState, ChangeEvent, useContext } from "react"
import { Header } from "./parts/header";
import { Footer } from "./parts/footer";
import { SansSerif } from "./components/sans-serif";
import { Serif } from "./components/serif";
import { MonoSpace } from "./components/monospace";
import { Cursive } from "./components/cursive";
import { Fantasy } from "./components/fantasy";
import { TextsContext } from "./Provider/TextContextsProvider";

export const App: FC = () => {

  const [inputValue, setInputValue] = useState<string>("");
  const {text, setText} = useContext(TextsContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const onClickSubmit = () => {
    setText(inputValue);
  }

  return(
    <>
      <Header />
      <input type='text' value={inputValue} onChange={handleChange}/>
      <input type='submit' onClick={onClickSubmit} />
      <SansSerif />
      <Serif />
      <MonoSpace />
      <Cursive />
      <Fantasy />
      <Footer />
    </>
  )
}