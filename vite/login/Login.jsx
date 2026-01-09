import './login.scss'
import { Form } from "react-router";

export default function Login() {
    return (
      <div id="formLogin">
      <Form method="POST">
          <input type="text" name="username" placeholder="User Name" />
          <input type="password" name="password" placeholder='Password' />
          <button type="submit">Login React</button>
    </Form>
      </div>
    
  )
}