import React, { useState, useContext } from 'react'
import { ModalUserContext, ModalCommentsContext } from 'app/contexts/contexts'

export const ModalWrapper = ({children}) => {
  return (
    <div className="modal">
      <div className="modal-box">
        {children}
      </div>
    </div>
  )
}

export const ModalUser = ({ children }) => {
  
  const [isOpen, setIsOpen] = useContext(ModalUserContext)

  return (
    <div>
      {isOpen && (
        <ModalWrapper>
          {children}
        </ModalWrapper>
      )}
    </div>
  )
}


export const ModalComments = ({ children }) => {
  
  const [isOpen, setIsOpen] = useContext(ModalCommentsContext)

  return (
    <div>
      {isOpen && (
        <ModalWrapper>
          {children}
        </ModalWrapper>
      )}
    </div>
  )
}

