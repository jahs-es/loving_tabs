import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class Item extends PureComponent {
    render() {
        const { id, title, artist } = this.props.data;
        return (
            <div className="grid-item">
                <div className="grid-item-link">
                    <div className="div-padding">
                        <a href={`http://www.songsterr.com/a/wa/song?id=${id}`} rel="noopener noreferrer"
                           target='_blank'>{title}</a>
                    </div>
                    <div className="div-padding">
                        <a className="detail-title" href={`http://www.songsterr.com/a/wa/artist?id=${artist.id}`} rel="noopener noreferrer"
                           target='_blank'>{artist.name}</a>
                    </div>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    data: PropTypes.object.isRequired
};

export default Item;


