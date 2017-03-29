import search from '../../../../source/img/search.svg';

export default class Settings extends React.Component {
    render() {
        return (
            <div className='questlist-settings'>
                <ul className='questlist-settings__filter'>
                    <li>value 1</li>
                    <li>value 2</li>
                    <li>value 3</li>
                </ul>
                <form className='questlist-settings__search' onSubmit={(event) => {
                    event.preventDefault();
                    console.log('press');
                }}>
                    <div>
                        <input className='questionlist-search__input' type='text'/>
                        <button className='questionlist-search__button' type='submit'>
                            <span>
                                <img src={search} alt='search'/>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
