import React, { useState, useContext } from 'react'
import { ModalUserContext, ModalCommentsContext } from 'app/contexts/contexts'
import { CloseIcon } from './svgs'

export const ModalWrapper = ({children, actionClose}) => {
  return (
    <div className="modal">
      <div className="modal-box">
        {children}
        <span className="modal-close" onClick={actionClose}>
          <CloseIcon />
        </span>
      </div>
      <div className="modal-cover" onClick={actionClose}></div>
    </div>
  )
}

export const ModalUser = ({ children }) => {
  
  const [isOpen, setIsOpen] = useContext(ModalUserContext)

  return (
    <div>
      {isOpen && (
        <ModalWrapper actionClose={() => {setIsOpen(false)}}>
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
        <ModalWrapper actionClose={() => {setIsOpen(false)}}>
          {children}
        </ModalWrapper>
      )}
    </div>
  )
}

