'use client'
import { useRouter } from 'next/navigation'
import React, { MouseEventHandler, useCallback, useEffect, useRef } from 'react'

const Modal = ({children}:{children: React.ReactNode}) => {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (onDismiss) onDismiss()
    },
    [onDismiss]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])
  
  return (
    <div className='container'>
      <div ref={overlay} className='modal-backdrop fade show'></div>
      <div ref={wrapper} className="modal fade show" tabIndex={-1} style={{display: 'block'}} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={onClick}></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal