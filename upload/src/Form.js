// Complete the Form Component and export it
import {name, email} from './HomePage';

function handleSubmit(e){
  e.preventDefault();

}

export const Form = () => (
  <>
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login Page</h3>
        <input type='text' value={name} placeholder="YourName"/>
        <br/><br/>
        <input type='email' value={email} placeholder="xyz@pqr com" />
        <br/><br/>
        <button>Login</button>
        </form>
    </div>
  </>
);
