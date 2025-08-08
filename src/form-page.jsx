import React, {useState} from "react";
import { Navigate, useNavigate } from 'react-router-dom'


export function FormDiv () {
    
    const [ personName, setPersonName ] = useState('')
    const [ userName, setUserName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ number, setNumber ] = useState()
    const [ password, setPassword ] = useState('')

    function handleChange(setstate) {
        return (e) => setstate(e.target.value)
    }

    // SIGN UP HANDLER FUNTION

    const dataArr = []

    function handleSignUpClick() {
        dataArr.push({
            personName: personName,
            userName: userName,
            email: email,
            number: number,
            password: password,
        })
        console.log(dataArr)
        return alert("REGESTERED SUCCESSFULLY")
    }


    const navigate = useNavigate()
    
    function handleSignInClick(e) {
    e.preventDefault()
    navigate("/signin")
    }

    // RETURN CODE

    return (
        <div className="bg-div">    

        <h1 className="heading1">SIGN UP</h1>

        {/* Glass Div */}
        <div className="glass-div">
            
        <form>

            <div className="person-name">
                <label htmlFor="person-name">NAME : </label><br/>
                <input className="textfield" type="text" name="person-name" value={personName} onChange={handleChange(setPersonName)} pattern="^[a-zA-Z]{1,30}$" ></input><br/>
            </div>

            <div className="username">
                <label htmlFor="username">USERNAME : </label><br/>
                <input className="textfield" type="text" name="username" value={userName} onChange={handleChange(setUserName)} pattern="^[a-zA-Z0-9_]{4,16}$" ></input><br/>
            </div>

            <div className="email">
                <label htmlFor="email">EMAIL ID : </label><br/>
                <input className="textfield" type="email" name="email" value={email} onChange={handleChange(setEmail)} ></input><br/>
            </div>

            <div className="mobile-number">
                <label htmlFor="mobile-number">MOBILE NUMBER : </label><br/>
                <input className="textfield" type="number" name="mobile-number" value={number} onChange={handleChange(setNumber)} pattern="^\d{10}$" ></input><br/>
            </div>

            <div className="password">
                <label htmlFor="password">PASSWORD : </label><br/>
                <input className="textfield" type="password" name="user" value={password} onChange={handleChange(setPassword)} ></input><br/><br/>
            </div>

            <div className="buttons">
                <button className="signin-button" onClick={handleSignInClick} name="signin">SIGN IN</button>
                <button className="signup-button" onClick={handleSignUpClick} type="submit" name="submit">SIGN UP</button>
            </div>

    

        </form>
        
        </div>
        
        </div>
    )
}




