import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';



const title = 'Login'
const socialTttle = 'Login with Social Media'
const btnText = 'Login Now'
const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const { signUpWithGoogle, login } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/'

    const formHandler = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email)
        console.log(password)

        login(email, password).then((result) => {
            const user = result.user;
            console.log(user)
            alert('Login successfully.')
            navigate(from, { replace: true })
        }).catch(err => {
            const errorMsg = err.messsage
            setErrorMessage("Invalid username or password.")

        })

    }
    const registryHandler = () => {
        signUpWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(err => {
                const errorMsg = err.messsage
                console.log(errorMessage)
                setErrorMessage('Please provide valid email and password.')
            })
    }

    return (
        <div className='vh-100 section-bg'  >

            <div className='login-section padding-tb '>
                <div className="container">
                    <div className="account-wrapper ">
                        <h3 className="title">{title}</h3>
                        <form action="" className='account-form' onSubmit={formHandler}>
                            <div className="form-group">
                                <input type="text" name='email' id='email' placeholder='Email Address*' required />
                            </div>
                            <div className="form-group">
                                <input type="password" autoComplete={'true'} name='password' id='password' placeholder='Password here*' required />
                            </div>

                            {/* showing error message  */}
                            <div>
                                {
                                    errorMessage && (
                                        <div className="error-message text-danger mb-1">
                                            {errorMessage}
                                        </div>
                                    )
                                }
                            </div>


                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name='remember' id='remember' />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to={'/forgetpass'}>Forget Password? </Link>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type='submit' className='d-block lab-btn'>
                                    <span>{btnText}</span>
                                </button>
                            </div>


                        </form>


                        {/* account bottom */}
                        <div className="account-bottom">
                            <span className='d-block cate pt-10'>
                                Don't Hanve an Account? <Link to={'/sign-up'}>Sign up</Link>
                            </span>
                            <span className='or'>
                                <span>or</span>
                            </span>
                            {/* //social icons  */}
                            <h5 className="subtitle">{socialTttle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <button onClick={registryHandler} className='github'><i className='icofont-github'></i></button>
                                </li>
                                <li>
                                    <Link to={''} className='facebook'><i className='icofont-facebook'></i></Link>
                                </li>
                                <li>
                                    <Link to={''} className='twitter'><i className='icofont-twitter'></i></Link>
                                </li>
                                <li>
                                    <Link to={''} className='linkedin'><i className='icofont-linkedin'></i></Link>
                                </li>
                                <li>
                                    <Link to={''} className='instagram'><i className='icofont-instagram'></i></Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;

