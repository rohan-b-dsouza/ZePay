import Balance from "../components/Balance"
import Topbar from "../components/Topbar"
import { Users } from "../components/Users"

export default function DashBoard() {
    return (
        <div className="bg-[#F0F2F5] h-screen">
            <Topbar user={'Rohan'} initials={'R'}></Topbar>
            <Balance balance={'25000'}></Balance>
            <Users></Users>
        </div>
    )
}