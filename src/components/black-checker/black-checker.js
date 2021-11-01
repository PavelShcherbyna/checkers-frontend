import React, {Component} from 'react';

import "./black-checker.scss";

class BlackChecker extends Component {
    render() {
        const { isActive } = this.props;
        const activeClass = isActive? 'active-checker' : '';

        return (
            <div id={'black-checker'} className={`black-checker ${activeClass}`}
                 onClick={this.props.onCheckerClick}>

            </div>
        );
    }
}

export default BlackChecker;
