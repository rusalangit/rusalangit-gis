import { useState } from "react"

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <div>
            <div></div>
            <h1>Sign In</h1>
            <form className="signin" onSubmit={handleSubmit}>
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
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignIn
