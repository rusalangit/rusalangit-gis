import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <div>
            <div></div>
            <h1>Sign Up</h1>
            <form className="signup" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        title="email"
                        type="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        title="password"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <input type="submit" disabled={isLoading} />
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default SignUp
