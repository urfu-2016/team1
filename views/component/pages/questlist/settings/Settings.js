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
                <ul className='questlist-settings__filter'>
                    <li>value 1</li>
                    <li>value 2</li>
                    <li>value 3</li>
                </ul>
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
            </div>
        );
    }
}

Settings.propTypes = {
    GetQuestsByFirstLetters: React.PropTypes.func.isRequired,
    GetAllQuests: React.PropTypes.func.isRequired
};
