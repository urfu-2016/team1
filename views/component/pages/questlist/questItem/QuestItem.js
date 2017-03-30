import React from 'react';
import { Link } from 'react-router';

import plug from '../../../../source/img/plug.jpg';

export default class QuestItem extends React.Component {
    render() {
        return (
            <div className='questitem'>
                <div className='questitem__row'>
                    <Link to='/question' className='questitem__item quest'>
                        <div style={{backgroundImage: 'url('+plug+')'}}>
                            <div className='quest__info'>
                                <h2 className='quest__info_title'>Quest Title</h2>
                                <p className='quest__info_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est nam rerum? Adipisci culpa ipsum placeat voluptatum. Alias architecto consectetur consequatur dolore eveniet illum, libero molestias nostrum, obcaecati quam recusandae, suscipit voluptatum. Beatae culpa esse ipsam maxime provident quae rem?</p>
                            </div>
                        </div>
                    </Link>

                    <Link to='/question' className='questitem__item quest'>
                        <div style={{backgroundImage: 'url('+plug+')'}}>
                            <div className='quest__info'>
                                <h2 className='quest__info_title'>Quest Title</h2>
                                <p className='quest__info_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est nam rerum? Adipisci culpa ipsum placeat voluptatum. Alias architecto consectetur consequatur dolore eveniet illum, libero molestias nostrum, obcaecati quam recusandae, suscipit voluptatum. Beatae culpa esse ipsam maxime provident quae rem?</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='questitem__row'>
                    <Link to='/question' className='questitem__item quest'>
                        <div style={{backgroundImage: 'url('+plug+')'}}>
                            <div className='quest__info'>
                                <h2 className='quest__info_title'>Quest Title</h2>
                                <p className='quest__info_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est nam rerum? Adipisci culpa ipsum placeat voluptatum. Alias architecto consectetur consequatur dolore eveniet illum, libero molestias nostrum, obcaecati quam recusandae, suscipit voluptatum. Beatae culpa esse ipsam maxime provident quae rem?</p>
                            </div>
                        </div>
                    </Link>

                    <Link to='/question' className='questitem__item quest'>
                        <div style={{backgroundImage: 'url('+plug+')'}}>
                            <div className='quest__info'>
                                <h2 className='quest__info_title'>Quest Title</h2>
                                <p className='quest__info_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est nam rerum? Adipisci culpa ipsum placeat voluptatum. Alias architecto consectetur consequatur dolore eveniet illum, libero molestias nostrum, obcaecati quam recusandae, suscipit voluptatum. Beatae culpa esse ipsam maxime provident quae rem?</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
