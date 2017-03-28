import banner from '../../../../source/img/main_banner.jpg';

export default class Banner extends React.Component {
    render() {
        return (
            <div className='banner'>
                <img src={banner} alt='banner'/>
                <span>Просто создай себе настроение!</span>
            </div>
        );
    }
}
