import { RouterProvider } from "react-router-dom"
import { router } from "./Pages/Routes/Routes"



function App() {


  return (
    <>
    <div style={{padding: "2rem"}} className="mx-auto">
    <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  )
}

export default App
