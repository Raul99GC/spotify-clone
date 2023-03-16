import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeResolutionState } from '../../store/slices/isMobile.slice'

export const IsMobile = () => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    dispatch(changeResolutionState(mediaQuery.matches))

    const handler = (event) => {
      dispatch(changeResolutionState(event.matches))
    }
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <>
    </>
  )
}
