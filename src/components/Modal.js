import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

function Modal({ setIsOpen }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function createUser() {
        if(email.length < 5) {
            alert("preencha com email válido");
            return;
        }
    
        if(password.length < 4) {
            alert("preencha a senha com no mínimo 4 dígitos.");
            return;
        }
    
        saveAccount({
            login: email,
            password: password,
            notes: []
        });
        
        setIsOpen(false);
        alert("conta criada com sucesso.");
    }

    function saveAccount(data) {
        localStorage.setItem(data.login, JSON.stringify(data));
    }
    
    return (
    <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h2 className="heading">Create your account</h2>
                </div>
                <button className="closeBtn"onClick={() => setIsOpen(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
                <div className="wrap-create-login">
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
                        <button className="login-form-btn" onClick={() => createUser()}>Criar Conta</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Modal;