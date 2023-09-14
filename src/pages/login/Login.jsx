import FormLogin from '../../component/main/loginComponet/formLogin/FormLogin'
import FormRegister from '../../component/main/loginComponet/formRegister/FormRegister'
import LayoutMain from "../Layout/LayoutMain";
import './Login.css'

const Login = () => {
  return (
    <>
      <LayoutMain>
        <FormLogin />
      </LayoutMain>
    </>
  )
}

export default Login
