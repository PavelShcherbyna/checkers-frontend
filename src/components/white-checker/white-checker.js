import React, {Component} from 'react';

import './white-checker.scss';

class WhiteChecker extends Component {
    render() {
        const { isActive } = this.props;
        const activeClass = isActive? 'active-checker' : '';

        return (
            <div id={'white-checker'} className={`white-checker ${activeClass}`}
            onClick={this.props.onCheckerClick}>

            </div>
        );
    }
}

export default WhiteChecker;