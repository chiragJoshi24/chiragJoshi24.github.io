import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const FirstPage = () => {
    return (
        <div className="bg-first-background flex w-full h-screen bg-cover bg-center">
            <div className="w-3/4 flex justify-center items-center bg-transparent">
                <div className="bg-transparent text-8xl font-black">
                    Hello! I am <br /> Chirag Joshi.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br />
                    I am {' '}
                    <TypeAnimation
                        sequence={[
                            'an Engineer', 2000,
                            'a Developer', 2000,
                            'a Musician', 2000
                        ]}
                        wrapper="span"
                        style={{
                            background: 'transparent',
                            color: '#00FCFC',
                            textShadow: '2px 2px 5px rgba(0, 255, 255, 0.6)'
                        }}
                        speed={10}
                        repeat={Infinity}
                    />

                </div>
            </div>
        </div>
    );
};

export default FirstPage;
