import React, { Component } from 'react';
import CheckboxController from './CheckboxController.jsx';
import SubmitButton from './SubmitButton.jsx';

import ModalWindow from './ModalWindow.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      answer: null
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.checkboxCallback = this.checkboxCallback.bind(this);
  }

  submitHandler() {
    if (this.state.answer == null) {
      return;
    }
    console.log("Opening modal");
    this.setState({ modalOpen: true });
  }


  closeModal() {
    this.setState({ modalOpen: false });
  }

  checkboxCallback(answer) {
    this.setState({ answer: answer });
  }

  render() {
    return (
      <div className="root">
        <div className="text">
          <h1>Raven, be my movie partner in crime</h1>
        </div>

        <CheckboxController callback={this.checkboxCallback} />

        <SubmitButton clickHandler={this.submitHandler} />
        <ModalWindow modalType={this.state.answer} isOpen={this.state.modalOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}