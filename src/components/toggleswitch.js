import PropTypes from 'prop-types';
import classnames from 'classnames';
import isString from 'lodash/isString';
import React, { Component } from 'react';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';
import '../css/index.css';

class ToggleSwitch extends Component {
    state = {enabled: this.enabledFromProps()}
    isEnabled = () => this.state.enabled
    enabledFromProps(){
        let {enabled} = this.props;
        return isBoolean(enabled) && enabled;
    }

    toggleSwitch = evt => {
        evt.persist();
        evt.preventDefault();
    
        const { onClick, onStateChanged } = this.props;
    
        this.setState({ enabled: !this.state.enabled }, () => {
          const state = this.state;
    
          // Augument the event object with SWITCH_STATE
          const switchEvent = Object.assign(evt, { SWITCH_STATE: state });
    
          // Execute the callback functions
          isFunction(onClick) && onClick(switchEvent);
          isFunction(onStateChanged) && onStateChanged(state);
        });
    }
        render() {
            const { enabled } = this.state;
        
            // Isolate special props and store the remaining as restProps
            const { enabled: _enabled, theme, onClick, className, onStateChanged, ...restProps } = this.props;
        
            // Use default as a fallback theme if valid theme is not passed
            const switchTheme = (theme && isString(theme)) ? theme : 'default';
        
            const switchClasses = classnames(
              `switch switch--${switchTheme}`,
              className
            )
        
            const togglerClasses = classnames(
              'switch-toggle',
              `switch-toggle--${enabled ? 'on' : 'off'}`
            )
        
            return (
              <div className={switchClasses} onClick={this.toggleSwitch} {...restProps}>
                <div className={togglerClasses}></div>
              </div>
            )
          }
    
}

ToggleSwitch.propTypes = {
    //style and color for switch
    theme: PropTypes.string,
    //dets state of switch when rendered
    enabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
    ]),
    //function that gets called when start of toggle switches
    //maininly changing which markers are being filtered
    onStateChanged: PropTypes.func
}

export default ToggleSwitch;