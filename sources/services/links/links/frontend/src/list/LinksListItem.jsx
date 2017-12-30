import React from 'react';
import LinksListItemSlice from './LinksListItemSlice.jsx'

export default class LinkListItem extends React.Component {
    render() {
        return (
            <div className="list-group">
                <div className="list-group-item">
                    {this.props.link.itemSlices.map(itemSlice => <LinksListItemSlice key={itemSlice.key} slice={itemSlice} />)}
                </div>
            </div>
        )
    }
}