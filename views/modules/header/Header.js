import { Link } from 'react-router';
import { IndexLink } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__logo' role='banner'>
                    <IndexLink to='/'>que<span>st</span>ory</IndexLink>
                </div>
                <div className='header__registration'>
                    <span><Link to='signin'>Sign in</Link></span> |
                    <span><Link to='signup'>Sign up</Link></span>
                </div>
            </header>
        );
    }
}
