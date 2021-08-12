import { Container } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const ForgotPassword = () => {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const { resetPassword } = useAuth()
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <>
            <div className="App">
                <Container className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Password Reset</h2>
                                {error && <Alert variant="dander">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Button disabled={loading} className="w-100 mt-3" type="submit">Reset Password</Button>
                                </Form>
                                <div className="w-100 text-center mt-3">
                                    <Link to="/login">Log In</Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            Need an account? <Link to="signup">Sign Up</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default ForgotPassword;