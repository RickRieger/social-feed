import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import './Post.css'
function Post() {
  return (
    <Form className = "post-form" >
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Name
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="name" placeholder="Name" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Post
    </Form.Label>
    <Col sm={8}>
      <Form.Control as="textarea" type="Post" placeholder="Post" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 2, offset:8 }}>
      <Button id="button" type="submit">Create</Button>
    </Col>
  </Form.Group>
</Form>
  )
}

export default Post