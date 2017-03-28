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
                                <svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                    <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
