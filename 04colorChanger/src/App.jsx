import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")
  // const [text, setText] = useState({ setColor })


  return (
    <div style={{ backgroundColor: color }} className="w-full h-screen duration-200 text-center">
      {/* <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center leading-8 py-10">
        {color}
      </h3> */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div style={{ backgroundColor: "transparent" }} className="flex flex-wrap justify-center gap-4  px-3 py-2 rounded-xl">
          <button onClick={() => setColor('rgb(255, 49, 49)')} className=" bg-red-600 rounded-full px-3 py-2 text-xl hover:bg-red-400 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Red</button>
          <button onClick={() => setColor('rgb(2, 48, 32)')} className=" bg-green-900 rounded-full px-3 py-2 text-xl font-semibold hover:bg-green-400 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Green</button>
          <button onClick={() => setColor('rgb(15, 82, 186)')} className=" bg-blue-500 rounded-full px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-blue-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Blue</button>
          <button onClick={() => setColor('rgb(255, 215, 0)')} className=" bg-yellow-500 rounded-full px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-yellow-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Yellow</button>
          <button onClick={() => setColor('rgb(255, 140, 0)')} className=" bg-orange-500 rounded-full px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Orange</button>
          <button onClick={() => setColor('rgb(40, 40, 43)')} className=" bg-black rounded-full px-3 py-2 text-xl font-semibold text-white shadow-sm  focus-visible:outline hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 ">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
