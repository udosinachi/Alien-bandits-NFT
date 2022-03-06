import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import Story from './components/story/Story'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Slider />
      <About />
      <Story />
    </div>
  )
}

export default App
