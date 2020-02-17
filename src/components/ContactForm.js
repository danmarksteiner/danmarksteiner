import './ContactForm.scss';
import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }
  currentYear = new Date().getFullYear();
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <section className="contact-form">
        <div className="contact-container">
          <h2>Contact</h2>
          <p>For work enquries please complete the form below.</p>
          <form
            id="contact-form"
            method="POST"
            name="contact"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <input
              type="hidden"
              name="contact"
              value="the-name-of-the-html-form"
            />
            <div className="form-group">
              <div className="field-wrap">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                  required
                />
              </div>
              <div className="field-wrap">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="field-wrap">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </div>
            </div>
            <div className="form-group"></div>
            <div className="form-group form-group-submit">
              <div className="field-wrap">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-footer">
          {/* <span>&copy; DanMarksteiner {this.currentYear}</span> */}
        </div>
      </section>
    );
  }
}

export default ContactForm;
