import React from "react";
import PropTypes from 'prop-types';

const Tab = ({ title, embed }) => (
    <div className="video-container">
    	 <iframe title={title} className="player" type="text/html" width="100%" height="400px"
            src={embed}
        frameBorder="0"/>
    </div>
);

Tab.propTypes = {
    title: PropTypes.string.isRequired,
    embed: PropTypes.string.isRequired
};

export default React.memo(Tab);
