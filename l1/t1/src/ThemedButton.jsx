import React from 'react';
import { ThemeContext } from './themes-context.js';

class ThemedButton extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <button
          style={{
            background: this.context.background,
            color: this.context.fontColor,
          }}
          {...this.props}
          className="btn"
        />
      </div>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
