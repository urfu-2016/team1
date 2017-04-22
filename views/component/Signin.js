import React from 'react'

export default class Signin extends React.Component {
    render() {
        return (
            <div className='login-form'>
                <form className='login-form_form' action='/auth' method='post'>
                    <span className='login-form_form__text'>Логин</span>
                    <a href='/api/auth/vk'>Войти через Вконтакте</a>
                </form>
            </div>
        )
    }
}
