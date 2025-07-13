"use client"

import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, GithubAuthProvider } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);    // User create houa shuru hoise tai loading start //
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const singInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  }

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
  }

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateUserProfile,
    singInWithGithub
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);   // User load hoise tai ar loading dorkar nai
      console.log("State Captured and current User", currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser?.email }
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log("Login token", res.data);
            setLoading(false);
          })
      }
      else {      // Logout korle token remove houar kaaj ekhane //
        axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
          .then(res => {
            console.log("Logout done and removed the token", res.data);
            setLoading(false);
          })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;