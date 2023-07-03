import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'




const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const navigate = useNavigate()


    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    
    const handleSubmit = async (e) => {
        // e.preventDefault()
        if(username === "admin" && password === "admin"){

           await localStorage.setItem("submit", JSON.stringify(true));
            navigate('/')

        }

    }



    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    // const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    return ( 
        < div className='submit'>
            <section className="public">
            <header>
                <h1 style={{color:'#fff'}}> Login</h1>
            </header>
            <main className="login">
                <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="username" style={{color:'#fff'}}>Username:</label>
                    <input
                        className="form__input"
                        type="text"
                        id="username"
                        ref={userRef}
                        value={username}
                        onChange={handleUserInput}
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="password" style={{color:'#fff'}}>Password:</label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        onChange={handlePwdInput}
                        value={password}
                        required
                    />
                    <button className="form__submit-button">Sign In</button>
                    </form>
                    </main>
                    </section>

        </div>
     )
}
 
export default Login;