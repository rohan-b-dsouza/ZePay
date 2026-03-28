import { useState, useEffect } from "react"
import Balance from "../components/Balance"
import Topbar from "../components/Topbar"
import { Users } from "../components/Users"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function DashBoard() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [balance, setBalance] = useState(0);
    const [usersList, setUsersList] = useState([]);
    const [filter, setFilter] = useState("");
    useEffect(()=> {

        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const fetchData = async()=> {
            try {
                const [meRes, balanceRes] = await Promise.all([
                    axios.get('http://localhost:3000/api/v1/user/me', config),
                    axios.get('http://localhost:3000/api/v1/user/account/balance', config),
                ]);
                setFirstName(meRes.data.firstName);
                setBalance(balanceRes.data.balance);
                setUsersList(searchRes.data.users);
            }
            catch(err) {
                const status = err.response?.status;
                if (err.response?.status == 401 || err.response?.status == 404) {
                    localStorage.removeItem("token");
                    navigate('/signin');
                    return;
                }
            }
        }
        fetchData();
    }, []);
    useEffect(()=> {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const fetchUsersList = async()=> {
            try {
                const searchRes = await axios.get(`http://localhost:3000/api/v1/user/search?filter=${filter}`, config);
                setUsersList(searchRes.data.users);
            }
            catch(err) {
                const status = err.response?.status;
                if (err.response?.status == 401 || err.response?.status == 404) {
                    localStorage.removeItem("token");
                    navigate('/signin');
                    return;
                }
            }
        }
        fetchUsersList();

    }, [filter]);
    return (
        <div className="bg-[#F0F2F5] h-screen">
            <Topbar firstName={firstName} initials={firstName[0]}></Topbar>
            <Balance balance={balance / 100}></Balance>
            <Users usersList={usersList} setFilter={setFilter}></Users>
        </div>
    )
}