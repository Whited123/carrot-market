import { useState } from "react";

export default function Forms() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) {
        const {
            currentTarget: { value },
        } = event;
        setUsername(value);
    };
    return (
        <form>
            <input value={username} type="text" placeholder="ID" />
            <input value={email} type="email" placeholder="Email" />
            <input value={password} type="password" placeholder="Password" />
        </form>
    );
}