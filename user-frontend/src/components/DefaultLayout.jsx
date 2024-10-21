// src/components/DefaultLayout.jsx
import { Link, Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

export default function DefaultLayout(){
    const {user, token} = useStateContext()

    const onLogout = (ev) => {
        ev.preventDefault()
    }

    if(!token){
        return <Navigate to="/login" />
    }
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}