import { useEffect } from "react"

export default function WindowEvent() {
  useEffect(() => {
    const doubleClick = () => {
      alert('mouse pressed!')
    }

    //add event listener to window that triggers an alert when the user double clicks
    window.addEventListener('dblclick', doubleClick)

    //remove event listener when component is unmounted
    return () => {
      window.removeEventListener('dblclick', doubleClick)
    }
  }, [])

  return (
    <h2>Window event active</h2>
  )
}
