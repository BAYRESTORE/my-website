import { useRef, useEffect, useState } from 'react'

export default function CameraComponent() {
  const videoRef = useRef(null)
  const [filter, setFilter] = useState('none')

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        videoRef.current.srcObject = stream
      } catch (err) {
        console.error("Kamera tidak dapat diakses:", err)
      }
    }
    startCamera()
  }, [])

  const takePhoto = () => {
    const canvas = document.createElement('canvas')
    const video = videoRef.current
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')
    ctx.filter = filter
    ctx.drawImage(video, 0, 0)
    const dataUrl = canvas.toDataURL('image/png')
    const newTab = window.open()
    newTab.document.write(`<img src="${dataUrl}" />`)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <video ref={videoRef} autoPlay playsInline className="w-full max-w-md rounded-lg" style={{ filter }} />
      <div className="flex space-x-2
