import { useRef, useState } from 'react'
import PasswordIcon from '../../assets/svgs/PasswordIcon'
import UserIcon from '../../assets/svgs/UserIcon'
import './Index.css'
const URL_LOGIN = 'http://localhost/microservices/login.php';

const sendData = async (url, data) => {

    try {

        const res = await fetch (url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        } );

        if (!res.ok){
            console.log('error',error)
        }else{
            // console.log(res);
            const json = await res.json();
            // console.log(json)
            return json;
        }
   
    } catch (error) {
        console.log('error', error);
    }

};

const Index = (props) => {

  const [error,setError] = useState(null);  
  const [espera,setEspera] = useState(false);

  const refUser = useRef(null);
  const refPassword = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault()
    setEspera(true);
    const data = {
        'usuario': refUser.current.value,
        'clave': refPassword.current.value
    };
    const respJson = await sendData( URL_LOGIN , data);
    console.log('resp desde el evento',respJson)
    props.acceder(respJson.conectado);
    setError(respJson.error);
    setEspera(false);
  }
  
    return (
    <div className='login'>
        Login
        <form action="">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                   <UserIcon />
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    ref={refUser}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                <PasswordIcon />
                </span>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    ref={refPassword}
                />
            </div>
          {
            error && 
            <div className="alert alert-danger">
               {error}
            </div>
          }
            
            <button 
            className="btn btn-dark"
            disabled={espera}
            onClick={handleLogin}
            >Join</button>
        </form>
    </div>
  )
}

export default Index