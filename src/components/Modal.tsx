'use client'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useRef } from 'react'

const Modal = ({children}:{children: React.ReactNode}) => {
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClose = useCallback(
    (e) => {
      if (e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, wrapper]
  )

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onDismiss()
  },
  [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])
  
  return (
    <>
      <div className='modal-backdrop fade show' />
      <div className="modal fade show" tabIndex={-1} style={{display: 'block'}} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button ref={wrapper} type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal