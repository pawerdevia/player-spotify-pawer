import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import '../assets/styles/RegisterPage.css'

const RegisterPage = () => {

    const { reset, register, handleSubmit } = useForm()
    const { registerUser } = useAuth()

    const submit = data => {
        registerUser(data)
        reset({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div className="container__register">
            <img src="/images/img-register.png" alt="img__register" className="img__register" />
            <article className='container__form-register'>
                <h2 className="text__form">Login</h2>
                <form onSubmit={handleSubmit(submit)} className='form__register'>
                    <div className="containers__inputs-register">
                        <label className="texts__inputs" htmlFor="email">Email</label>
                        <input className="inputs__form" {...register('email')} type="email" id="email" />
                    </div>
                    <div className="containers__inputs-register">
                        <label className="texts__inputs" htmlFor="name">name</label>
                        <input className="inputs__form" {...register('name')} type="text" id="name" />
                    </div>
                    <div className="containers__inputs-register">
                        <label className="texts__inputs" htmlFor="password">Password</label>
                        <input className="inputs__form" {...register('password')} type="password" id="password" />
                    </div>
                    <div className="container__btn-submit">
                        <button className="btn__form-submit">Submit</button>
                    </div>
                </form>
                <p className="link__login">Are you registered? <Link to='/auth/login' className="link__login-click">Go to Login</Link></p>
            </article>
        </div>
    )
}

export default RegisterPage