import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./route";

function App() {
  return (
    <div className="App max-w-[1400px] mx-auto font-poppins text-gray-600">
      {/* <Header /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
