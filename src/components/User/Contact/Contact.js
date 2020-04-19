import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import './Contact.css';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            contactName: '',
            contactAddress: '',
            contactMessage: ''
        }
    }

    onNameChange = (event) => {
        this.setState({
            contactName: event.target.value
        })
    }
    
    onAddressChange = (event) => {
        this.setState({
            contactAddress: event.target.value
        })
    }
    
    onMessageChange = (event) => {
        this.setState({
            contactMessage: event.target.value
        })
    }

    onSubmit = () => {
        fetch('https://app-d077afa0-d0a4-4d67-8720-1d7a756510d8.cleverapps.io/send-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.contactName,
                address: this.state.contactAddress,
                message: this.state.contactMessage
            })
        })
        .then(resp => {
            if(resp.status === 400) {
                document.getElementById('contactTrue').classList.remove('contact-displayed');
                document.getElementById('contactFalse').classList.add('contact-displayed');
            } else if(resp.status === 200) {
                document.getElementById('contactFalse').classList.remove('contact-displayed');
                document.getElementById('contactTrue').classList.add('contact-displayed');
            }
        })
    }

    render() {
        return(
            <Container className="contact-section" id="contactScroll">
                <h2>Contact me</h2>
                <Form className="contact-form">
                    <Form.Row className="toprow-contact">
                        <Col>
                            <Form.Control id="contactName" placeholder="Name" onChange={this.onNameChange} />
                        </Col>
                        <Col>
                            <Form.Control id="contactAddress" type="email" placeholder="Email address" onChange={this.onAddressChange} />
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="contactForm.contactMessage" id="contactMessage">
                        <Form.Control as="textarea" rows="5" placeholder="Your message" onChange={this.onMessageChange} />
                    </Form.Group>
                    <a className="btn-form" onClick={this.onSubmit}>
                        Send email
                    </a>
                    <div className="error-contact" id="contactFalse">Error sending email, please try again :(</div>
                    <div className="success-contact" id="contactTrue">Email sent successfully, thanks :)</div>
                </Form>
            </Container>
        )
    }
}

export default Contact;
