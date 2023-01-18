// import { Habit } from './component/Habit'

import { Header } from "./component/Header";


export function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
      </div>
    </div>
  )
}

