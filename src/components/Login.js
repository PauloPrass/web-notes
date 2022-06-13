import { useState } from 'react';
import Modal from './Modal';

function Login({ checkLogged }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    function loginUser() {
        const account = getAccount(email);

        if(!account) {
            alert("Ops! Verifique o usuário ou a senha.");
            return;
        }

        if(account) {
            if(account.password !== password) {
                alert("Ops! Verifique o usuário ou a senha.");
                return;
            }
            
            saveSession(email);
            checkLogged();
        }
    }

    function saveSession(data) {
        localStorage.setItem("session", data);
        sessionStorage.setItem("logged", data);
    }

    function getAccount(key) {
        const account = localStorage.getItem(key)
    
        if(account) {
            return JSON.parse(account);
        }
    
        return "";
    }

    return (
        <div className="login">
            <div className="container-login">
                <div className="wrap-login">
                    <div className="login-form">
                        <div className="login-form-title">
                            <span>Welcome to Web Notes</span>
                        </div>

                        <div className="wrap-input">
                            <input 
                                className={email !== "" ? "has-value input" : "input"}
                                type={"email"}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <span className="focus-input" data-placeholder="email" />
                        </div>

                        <div className="wrap-input">
                            <input 
                                className={password !== "" ? "has-value input" : "input"}
                                type={"password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <span className="focus-input" data-placeholder="password" />
                        </div>

                        <div className="container-login-form-btn">
                            <button onClick={() => loginUser()} className="login-form-btn">Login</button>
                        </div>

                        <div className="login-footer">
                            <span className="txt1">Não possui conta?</span>
                            <button className="txt2" onClick={() => setIsOpen(!isOpen)}>Criar conta</button>
                        </div>
                        {isOpen && <Modal setIsOpen={setIsOpen}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;