import { Button } from "./components/ui/button"
function App() {
  const handleClick = () => {
    alert("this is click handler");
  }

  return (
    <>
      <h1 className=" text-4xl text-red-600">Hello wrold</h1>
      <Button onClick={handleClick}>Click me</Button>
    </>
  )
}

export default App
