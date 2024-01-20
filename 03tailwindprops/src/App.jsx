import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-transparent	subpixel-antialiased decoration-black text-orange-600  p-5 rounded'>Tailwind Css</h1>
      <Card username={"Veg Thali"} btnText={"Buy Now"} srcs={"https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?w=1800&t=st=1705574265~exp=1705574865~hmac=6405d7829a183b933d711eec1ad9d2f65ee9119f9194893e093bb4bc64ebfcda"} />
      <Card username={'Mix Thali'} srcs={"https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=1800&t=st=1705574355~exp=1705574955~hmac=4f9e1b9dda88f55a8194ba7226bdadc6aa6485052fadc89a98088df01804911a"} />
      <Card />
    </>
  )
}

export default App
