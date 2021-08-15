import { createContext, useEffect, useState } from 'react';

export const CommentsContext = createContext([]);
export const ProfileContext = createContext([]);
export const UserContext = createContext([]);
export const ModalUserContext = createContext([]);
export const ModalCommentsContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  return (
    <CommentsContext.Provider value={[comments, setComments]}>
      {children}
    </CommentsContext.Provider>
  );
};

export const ModalUserProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalUserContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </ModalUserContext.Provider>
  )
}

export const ModalCommentsProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalCommentsContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </ModalCommentsContext.Provider>
  )
}