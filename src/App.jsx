import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"

export default function App() {
  return (
    <div className="flex flex-col content-center w-[95%] max-w-[400px]">
      <Header/>
      <Main/>
    </div>
  )
}