import { Modal } from 'flowbite-react'
import React from 'react'
type ModalRootProps = {
  children: React.ReactNode
  open: boolean
  onClose(): void
}

export function ModalRoot({ children, open, onClose }: ModalRootProps) {
  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Editar</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}
