import React from 'react';
import ReactDOM from 'react-dom/client';


const login = () => {
  return (
    <div className="scr_login">
        <p>
            личный кабинет
        </p>
        <input placeholder="электронная почта"/>
        <input placeholder="пароль"/>
        <div className="navigation" style={{flexDirection: 'row'}}>
            <button>
                <p>
                    войти
                </p>
            </button>
            <p>
                или вам нужна
            </p>
            <button>
                <p>
                    регистрация
                </p>
            </button>
            <p>
                ?
            </p>
        </div>
    </div>
  );
}

export default App;