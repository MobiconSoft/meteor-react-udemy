import * as React from 'react';

interface TitleBarProps {
    title: string;
    subtitle?: string;
}

export default class TitleBar extends React.Component<TitleBarProps, any> {

    renderSubtitle() {
        if (this.props.subtitle) {
            return <div className="title-bar__subtitle">{this.props.subtitle}</div>
        }
    }

    render() {
        return (
            <div className="title-bar">
                <h1 className="wrapper">{this.props.title}</h1>
                {/* {this.renderSubtitle()} */}
            </div>
        )
    }
}