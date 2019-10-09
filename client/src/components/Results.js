import React from 'react';

const Result = ({ bg, title, color1, color2, children }) => {
    // Color check I stole from Josh Appel, Thanks Josh!
    const checkColor = () => {
        const darkText = ['warning', 'light'];

        if (bg) {
            if (darkText.includes(bg)) {
                return 'text-dark';
            } else {
                return 'text-light';
            }
        }

        return 'default';
    };


    console.log(color1);

    if (color2.length >= 2) {
        let color2Shortened = color2[0];
        console.log(color2Shortened);
    } else {
        let color2Shortened = color2;
        console.log(color2Shortened);

    }



    const textColor = checkColor();

    return (
        <div className={bg ? `card bg-${bg} mb-2` : 'card mb-2'}>
            <div className={textColor}>
                {title && <h5 className={'card-header text-center'}>{title}</h5>}
                <div className="card-body">{children}</div>
            </div>
        </div>
    );
};

export default Result;
