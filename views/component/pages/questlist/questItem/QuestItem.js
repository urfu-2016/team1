import React from 'react';
import { Link } from 'react-router';

import plug from '../../../../source/img/plug.jpg';

export default class QuestItem extends React.Component {
    render() {
        return (
            <div className='quest-item'>
                <div className='quest-item__row'>
                    <Link to='/question' className='quest-item__item'>
                            <div>
                                <img src={plug} alt='plug'/>
                                <div className='quest-item__item-info'>
                                    <h2>Question Title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est nam rerum? Adipisci culpa ipsum placeat voluptatum. Alias architecto consectetur consequatur dolore eveniet illum, libero molestias nostrum, obcaecati quam recusandae, suscipit voluptatum. Beatae culpa esse ipsam maxime provident quae rem?</p>
                                </div>
                            </div>
                    </Link>

                    <Link to='/question' className='quest-item__item'>
                        <div >
                            <div>
                                <img src={plug} alt='plug'/>
                                <div className='quest-item__item-info'>
                                    <h2>Question Title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est nam rerum? Adipisci culpa ipsum placeat voluptatum. Alias architecto consectetur consequatur dolore eveniet illum, libero molestias nostrum, obcaecati quam recusandae, suscipit voluptatum. Beatae culpa esse ipsam maxime provident quae rem?</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        );
    }
}
