import React from 'react';
import Item from "../Item";

export default function ResultListComponent({ items }) {
    return (
        <div className="container">
            <div className="grid-container">
                {
                    items && items.map((tab, i) => {
                        return (<Item key={i} data={tab}/>)
                    })
                }
                {
                    (items.length === 0) &&
                    <div className="divCenter">
                        <p>Haven't found anything!</p>
                    </div>
                }
            </div>
        </div>
    );
}
