import React, {useContext} from 'react'
import Heading from "../../assets/Heading.png"
import { LoginComp } from './LoginComp'
import { RegisterComp } from './RegisterComp'
import { AuthContext } from '../../context/UseContext'

export const NavComp = () => {
    const {user, logout} = useContext(AuthContext)

    return <nav className="container navbar sticky-top navbar-light bg-light">
        <div className="container-fluid">
            <div className="navbar-brand">
                <img src={Heading} alt="coders" height="75" className="rounded-3"/>
            </div>
            <div className="d-flex">
                <div className="col">
                    {user? (
                        <>
                            <div className="btn btn-outline-success mx-2 disabled">{user.email}</div>
                            <div className="btn btn-outline-secondary mx-2" onClick={logout}>Logout</div>
                        </>
                        ) :
                        (
                        <>
                            <LoginComp/>
                            <RegisterComp/>
                        </>)
                    }
                </div>
            </div>
        </div>
    </nav>
}
