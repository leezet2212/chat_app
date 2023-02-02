import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
import firebase, { auth } from '../../firebase/config.js';

const { Title } = Typography;

const fbProvide = new firebase.auth.FacebookAuthProvider()
export default function Login() {
    const handleFBLogin = () => {
        auth.signInWithPopup(fbProvide)
    }
    return (
        <div>
            <Row justify='center' style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }}>Fun Chat</Title>
                    <Button style={{ width: '100%', marginBottom: 5 }}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={handleFBLogin}>
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
