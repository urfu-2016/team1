import React from 'react'

export default class Signin extends React.Component {
    render() {
        return (
            <div className='login-form'>
                <form className='login-form_form' action='/auth' method='post'>
                    <div className='input-wrapper'>
                        <div>
                            <span className='login-form_form__text'>Логин</span>
                            <input type='text' name='username'/>
                        </div>
                        <div>
                            <span className='login-form_form__text'>Пароль</span>
                            <input type='text' name='password'/>
                        </div>
                    </div>
                    <h2>Либо войдите используя соцсети</h2>
                    <div className='soc-auth'>
                        <a className='soc-auth_vk' href='/api/auth/vk'/>
                        <a className='soc-auth_fb' href='/api/auth/fb'/>
                    </div>
                </form>
            </div>
        )
    }
}
