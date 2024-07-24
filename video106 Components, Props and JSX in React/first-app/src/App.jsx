// import './App.css'
import Navbar from "./component/navbar"
import Footer from "./component/footer"
import Card from "./component/Card"
function App() {
  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title = "caed 1" description = "Card 1 description "/>
        <Card title = "caed 2" description = "Card 2 description "/>
        <Card title = "caed 3" description = "Card 3 description "/>
        <Card title = "caed 4" description = "Card 4 description "/>
        <Card title = "caed 5" description = "Card 5 description "/>
        <Card title = "caed 6" description = "Card 6 description "/>
        <Card title = "caed 7" description = "Card 7 description "/>
      </div>
      <Footer/>
    </>
  )
}

export default App
