import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

export default class ActTextCheck extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    listResponse: PropTypes.array.isRequired,
  };

  state = {
    userResponse: [],
  };

  fctChecked = (indexChecked, responseChecked) => {
    const object = this.refs.checkContainer;
    for (let i = 0; i < (object.childElementCount - 1) / 2; i += 1) {
      if (i === indexChecked - 1) {
        this.setState({ userResponse: responseChecked });
      } else {
        const checkrefered = this.refs[`elementCheck${i}`];
        checkrefered.unCheck();
      }
    }
  };

  render() {
    const inputs = [];
    const { listResponse, text } = this.props;
    for (let i = 0; i < listResponse.length; i += 1) {
      inputs.push(listResponse[i].rep);
    }

    return (
      <div id="container reponse" ref="checkContainer">
        <div>
          {text}
        </div>
        {inputs.map((response, index) => (
          <CheckBox
            ref={`elementCheck${index}`}
            key={index}
            id={index}
            response={response}
            fctChecked={this.fctChecked}
          />
        ))}
      </div>
    );
  }
}
