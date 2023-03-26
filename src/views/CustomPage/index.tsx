import { useState } from 'react';

import Check from './assets/check.png'
import Play from './assets/play.png'
import Logo from './assets/logo.png'
import Google from './assets/google.png'
import './index.css'

const CustomPage = () => {
    const [ signinOption, setSigninOption ] = useState<number>(1);

    return (
        <div className='container'>
            <div className='guide-container'>
                <h1 className='header-text'>Sign in your users in 3 easy steps</h1>

                <div className='signin-experience'>
                    <div className='title-experience'>
                        <img alt='' src={Check}/>
                        <h2 className='caption-sm'>Customize your sign-in experience</h2>
                    </div>
                    <div className='radio-group'>
                        <label className={`radio-text ${signinOption === 1 ? "radio-checked" : ""}`} htmlFor="option1"
                        >
                            <input
                                type="radio"
                                name="option"
                                id="option1"
                                value="option1"
                                onClick={() => setSigninOption(1)}
                                defaultChecked
                                />
                            Try it out
                        </label>

                        <label className={`radio-text ${signinOption === 2 ? "radio-checked" : ""}`} htmlFor="option2"
                        >
                            <input
                                type="radio"
                                name="option"
                                id="option2"
                                value="option2"
                                onClick={() => setSigninOption(2)}
                            />
                            Add your sign-in to a sample app
                        </label>
                    </div>
                </div>

                <h2 className='caption-med'>It's ready! Try it out</h2>
                <p className='text-normal'>Use this button to try out the sign-up experience and create your first user. Your sign-up page will open in a new tab.</p>

                <button className='btn-run'>
                    <img alt='' src={Play}/>
                    Run it now
                </button>

                <div className='title-experience'>
                    <img alt='' src={Check}/>
                    <h2 className='caption-mid'>Well done! Your sign-up experience is all set!</h2>
                </div>

                <div className='title-nextstep'>
                    <h2 className='caption-med'>Next steps are optional</h2>
                    <p className='text-normal'>Continue if you'd like to try out your sign-up experience with a sample app. Or exit the guide now to start exploring the portal (you can always come back)</p>
                </div>
            </div>

            <div className='preview-container'>
                <h2 className='caption-med'>Preview of your sign-in page:</h2>

                <div className='preview-wrapper'>
                    <div className='signin-preview'>
                        <img src={Logo} alt=''/>

                        <div className='blank-rect1'/>
                        <p className='text-thin'>Email Address:</p>
                        <div className='blank-rect2'/>
                        <div className='blank-rect3'>
                            <div className='blank-rect4'/>
                        </div>

                        <img className='google-icon' src={Google} alt=''/>
                    </div>
                </div>
            </div>

            <div className='btn-group'>
                <button className='btn-common btn-previous'>Previous</button>
                <button className='btn-common btn-continue'>Continue</button>
                <a href='/#' className='exit-guide'>Exit guide</a>
            </div>
            
        </div>
    )
}

export default CustomPage;