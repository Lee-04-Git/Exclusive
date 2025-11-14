import React from 'react';
import Modal from "react-modal";

export default class ModalWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      accepted: false,
      declined: false
    }
    this.acceptTerms = this.acceptTerms.bind(this);
    this.declineTerms = this.declineTerms.bind(this);
    this.requstCloseModal = this.requstCloseModal.bind(this);
  }

  acceptTerms() {
    this.setState({
      accepted: true,
      declined: false
    });
  }

  declineTerms() {
    this.setState({
      declined: true,
      accepted: false
    });
  }

  requstCloseModal() {
    this.props.closeModal();
    this.setState({
      accepted: false,
      declined: false
    });
  }

  getText() {
    if (this.props.modalType == "terms" && this.state.accepted == false && this.state.declined == false) {
      return (
        <div className="modalContent">
          <h1 style={{ fontSize: 'clamp(20px, 4vw, 32px)', marginBottom: '20px', color: '#ce4a4a' }}>Terms and Conditions</h1>
          <div style={{ fontSize: 'clamp(12px, 2vw, 16px)', lineHeight: '1.6', marginBottom: '30px', maxHeight: '50vh', overflowY: 'auto' }}>
            <p>
              1. By participating in upcoming Film Fridays, both parties agree to enjoy each other's company, including moments of awkwardness that are considered "cute" <br /><br />
              2. Both parties agree to perform small acts of kindness and teasing to make the other smile <br /><br />
              3. User acknowledges that maybe one day they will get to try the other's pancakes <br /><br />
              4. Both parties accept that failure to guess the word "official" despite obvious hints may result in playful laughter and teasing <br /><br />
              5. Participation includes engaging in COD Mobile sessions at mutually agreed times, with the intent to repeat when convenient <br /><br />
              6. Parties acknowledge that pretending to be annoyed may occur, but blushing and secret enjoyment is permitted and expected <br /><br />
              7. Both parties agree to laugh at awkward moments and appreciate the little quirks that define the other <br /><br />
              8. Upcoming Film Fridays shall include the creation of fun, playful, and memorable moments together <br /><br />
              9. Parties accept that both are relationship rookies and agree to be open, affectionate, and patient with each other <br /><br />
              10. By continuing this agreement, both parties commit to building a playful, loving, and exclusive connection through movies, games, inside jokes, and shared experiences <br /><br />
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div className="acceptButton" onClick={this.acceptTerms}>
              <h1>Accept</h1>
            </div>
            <div className="acceptButton" onClick={this.declineTerms}>
              <h1>Decline</h1>
            </div>
          </div>
        </div>
      );
    } else if (this.props.modalType == "declined" || this.state.declined == true) {
      return (
        <div className="smallText">
          <p>
            Fine. No love for you then.
          </p>
        </div>
      );
    } else if (this.state.accepted == true) {
      return (
        <div className="smallText">
          <p>
            Your request has been noted, and submitted for processing.<br /><br />
            We will get back to you within 5-10 business days.<br /><br />
          </p>
        </div>
      );
    }
  }

  render() {
    const modalStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1000
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '90vw',
        maxHeight: '90vh',
        width: '600px',
        padding: '30px',
        borderRadius: '15px',
        border: '3px solid #ce4a4a'
      }
    };

    return (
      <div>
        <Modal
          onRequestClose={this.requstCloseModal}
          contentLabel={"Terms and Conditions"}
          isOpen={this.props.isOpen}
          style={modalStyles}
        >
          <button className="closeModalButton" onClick={this.requstCloseModal}>Close</button>
          {this.getText()}
        </Modal>
      </div>
    );
  }
}
