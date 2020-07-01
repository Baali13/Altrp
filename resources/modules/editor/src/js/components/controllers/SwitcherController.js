import React, {Component} from "react";
import {connect} from "react-redux";
import controllerDecorate from "../../decorators/controller";

class SwitcherController extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    let value = this.props.currentElement.getSettings(this.props.controlId);

    if(value === null && this.props.default){
      value = this.props.default ;
    }
    value = value || false;
    this.state = {
      value,
      show: true
    };
    controllerDecorate(this);
  }
  toggle(){
    this._changeValue(!this.state.value);
  }
  getDefaultValue(){
    return false;
  }

  render(){
    /**
     * ПРоверка show
     * @type {string}
     */
    if(this.state.show === false) {
      return '';
    }
      let switcherClasses=`control-switcher control-switcher_${ this.state.value ? 'on' : 'off' }`;
      return <div className="controller-container controller-container_switcher">
        <div className="controller-container__label">
          {this.props.label}
        </div>
        <div className={switcherClasses} onClick={this.toggle}>
          <div className="control-switcher__on-text">ON</div>
          <div className="control-switcher__caret"/>
          <div className="control-switcher__off-text">OFF</div>
        </div>
      </div>
  }
}

function mapStateToProps(state) {
  return{
    currentElement:state.currentElement.currentElement,
  };
}
export default connect(mapStateToProps)(SwitcherController);
