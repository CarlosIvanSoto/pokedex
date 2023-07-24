'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import Col from './Col'
import { useRouter } from 'next/navigation'

const ModalCol = ({children}:{children: React.ReactNode}) => {
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
    <Col>
			<button ref={wrapper} type="button" className="btn-close" onClick={onClose}></button>
			{children}
    </Col>
  )
}

export default ModalCol