import React from 'react';
import { autobind } from 'core-decorators';

import search from '../../../../source/img/search.svg';

export default class Settings extends React.Component {
    @autobind
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        let inputData;
        const { GetQuestsByFirstLetters, GetAllQuests } = this.props;

        return (
            <div className='questlist-settings'>
                <div className='questlist-settings__wrap'>
                    <form className='questlist-settings__search' onSubmit={this.handleSubmit}>
                        <div>
                            <input
                              ref={(input) => {
                                  inputData = input;
                              }}
                              onChange={() => {
                                  if (inputData.value) {
                                      GetQuestsByFirstLetters([], inputData.value);
                                  } else {
                                      GetAllQuests([]);
                                  }
                              }}
                              className='questionlist-search__input'
                              type='text'
                            />
                            <button className='questionlist-search__button' type='submit'>
                                <span>
                                    <img src={search} alt='search'/>
                                </span>
                            </button>
                        </div>
                    </form>
                    <ul className='questlist-settings__filter'>
                        <li>value 1</li>
                        <li>value 2</li>
                        <li>value 3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {
    GetQuestsByFirstLetters: PropTypes.func.isRequired,
    GetAllQuests: PropTypes.func.isRequired
};
