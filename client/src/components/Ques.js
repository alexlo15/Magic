import React from 'react';


const Ques = (props) => {

    return (
        <h2 className="question">{props.content}</h2>
    );
}
Ques.propTypes = {
    content: React.PropTypes.string.isRequired
};
export default Ques;