import { sayHi } from "@ts_mono/shared/logger"

function App() {
  sayHi()
  /* intellisense only works if the tsconfig.json in the same level as tsconfig */
  return (<h1>test</h1>)
}

export default App
