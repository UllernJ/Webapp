import { useState } from 'react';

function LoginValidator() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    function handleUsername(e) {
        setUsername(e.target.value);
        handleSubmit();
    }
    function handlePassword(e) {
        setPassword(e.target.value);
        password.length <= 6 ? setWarningMessage('Please use a password longer than 6 characters.') : setWarningMessage('');
        handleSubmit();
    }
    function handleSubmit() {
        password.length >= 6 && username.length >= 6 ? setDisabled(false) : setDisabled(true);
    }

    return(
        <div id="loginForm">
        <label for="Username"><b>Username </b></label>
        <input id="Username" value={username} onChange={handleUsername} name="user" type="text"></input>
        <br></br>
        <label for="password"><b>Password </b></label>
        <input id="password" value={password} onChange={handlePassword} name="password" type="text"></input>
        <br></br>
        <button id="button" disabled={disabled} type="submit">Login</button>
        <p id="warning">{warningMessage}</p>
        </div>
    )
}

export default LoginValidator;