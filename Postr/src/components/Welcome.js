import React,{Component} from 'react';
import { login, logout, onSubmit } from '../utils';
import '../global.css'

 class Welcome extends Component{
    render(){
        return(
            <main>
        <h1>Welcome to Postr</h1>
        <p>
          Go ahead and click the button below to try it out:
        </p>
        <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
          <button onClick={login}>Sign in</button>
        </p>
      </main>
        );   
    }
}
export default Welcome;