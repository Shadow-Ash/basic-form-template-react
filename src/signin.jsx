export default function Signin() {

  
  
  return (
    <div>
    
    <h1 className="heading1">SIGN IN</h1>


    <div className="glass-div">
            
        <form>

          <div className="username">
                <label htmlFor="username">USERNAME : </label><br/>
                <input className="textfield" type="text" name="username" pattern="^[a-zA-Z0-9_]{4,16}$" ></input><br/>
          </div>

          <div className="password">
                <label htmlFor="password">PASSWORD : </label><br/>
                <input className="textfield" type="password" name="user" ></input><br/><br/>
          </div>

          <div className="buttons">
                <button className="signin-button" name="signin">SIGN IN</button>
                <button className="signup-button" type="submit" name="submit">SIGN UP</button>
          </div>

        </form>
        
    </div>
    
    </div>
  )
}
