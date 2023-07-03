import { Outlet } from "react-router-dom"
import Drwer from "./Drwer"


const AppLayout = () => {
  return (
    <>
    <div >
    <Drwer />

    <Outlet />

    </div>
    </>
  )
}

export default AppLayout