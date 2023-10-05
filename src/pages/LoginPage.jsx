import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import '../assets/styles/LoginPage.css'

const LoginPage = () => {

    const { reset, register, handleSubmit } = useForm()
    const { loginUser } = useAuth()

    const submit = data => {
        loginUser(data)
        reset({
            email: '',
            password: ''
        })
    }

    return (
        <div className="container__login">
            <img src="/images/img-login.png" alt="img_login" className="img__login" />
            <article className="container__form">
                <h2 className="text__form">Login</h2>
                <form onSubmit={handleSubmit(submit)} className='form__login'>
                    <div className="containers__inputs-login">
                        <label className="texts__inputs" htmlFor="email">Email</label>
                        <input className="inputs__form" {...register('email')} type="email" id="email" />
                    </div>
                    <div className="containers__inputs-login">
                        <label className="texts__inputs" htmlFor="password">Password</label>
                        <input className="inputs__form" {...register('password')} type="password" id="password" />
                    </div>
                    <div className="container__btn-submit">
                        <button className="btn__form-submit">Submit</button>
                    </div>
                </form>
                <p className="link__register">Do you have an account <Link to='/auth/register' className="link__register-click">Go to register</Link></p>
            </article>
        </div>
    )
}

export default LoginPage