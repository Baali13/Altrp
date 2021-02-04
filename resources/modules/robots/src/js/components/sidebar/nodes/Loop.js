import * as React from "react";
import { Handle } from 'react-flow-renderer';

export default class Loop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nodeClasses = "react-flow__node-default";
    if (this.props.selected) nodeClasses += " selected";
    
    console.log(this.props);
    
    return (
      <div className={nodeClasses}>
        <Handle type="target" position="top" />
        <div><h3>{this.props?.data?.label}</h3></div>
        <div>{this.props?.type}</div>
        <Handle
          type="source"
          position="left"
          id="yes"
          style={{ top: '70%', borderRadius: 0 }}
        />
        <Handle
          type="source"
          position="right"
          id="no"
          style={{ top: '70%', borderRadius: 0 }}
        />
      </div>
    );
  }
}