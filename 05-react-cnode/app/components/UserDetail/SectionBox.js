import React from 'react';
import { Link } from 'react-router';
import Time from '../Time';

const styles = {
  section: {
    padding: '15px',
    marginBottom: '20px',
    background: '#fff',
    borderRadius: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
  }
};

class SectionBox extends React.Component {

  render() {
    return(
      <div style={styles.section}>
        <div style={{ paddingBottom: '10px', borderBottom: '1px solid #f0f0f0' }}>
          <span>
            {this.props.sectionTitle}
          </span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default SectionBox;
