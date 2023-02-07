import React from "react";
import { Row, Col, Typography, Button } from "antd";
import firebase, { auth } from "../../firebase/config.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from "firebase/auth";
import { addDocument } from "../../firebase/services.js";

const { Title } = Typography;
const fbProvide = new firebase.auth.FacebookAuthProvider();
export default function Login() {
  const handleFBLogin = () => {
    // const provider = new FacebookAuthProvider();
    auth.signInWithPopup(fbProvide);
  };
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const { isNewUser, providerId } = getAdditionalUserInfo(result);
    const { user } = result;
    console.log("is new", isNewUser);
    if (isNewUser) {
      addDocument("user", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: providerId,
      });
    }
  };
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }}>Fun Chat</Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={handleLoginWithGoogle}
          >
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFBLogin}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
