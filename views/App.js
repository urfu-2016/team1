import Header from './component/header/Header';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element
};
