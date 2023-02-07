import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import { auth } from '../../firebase/config.js';

export const AuthContext = React.createContext()
export default function AuthProvider({children}) {
    const [user, setUser] = useState({});
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unSub = auth.onAuthStateChanged((user)=>{
            console.log('user login',{user});
            if(user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL })
                setIsLoading(false)
                navigate('/')
                return;
            } 
            setIsLoading(false)
            navigate('/login')
        })
        return () => {
            unSub()
        };
    }, [navigate]);
  return (
    <AuthContext.Provider value={{user}}>
        {isLoading ? <Spin/> : children}
    </AuthContext.Provider>
  )
}
