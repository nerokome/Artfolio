'use client'

import React, { useRef, useState } from 'react'
import {
  UploadCloud,
  Lock,
  Search,
  ImageIcon,
  Settings,
} from 'lucide-react'

export default function Page() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [progress, setProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [filesCount, setFilesCount] = useState(0)

  const handleUpload = (files: FileList) => {
    if (!files.length) return

    const xhr = new XMLHttpRequest()
    const formData = new FormData()

    Array.from(files).forEach((file) => {
      formData.append('files', file)
    })

    setFilesCount(files.length)
    setProgress(0)
    setIsUploading(true)

    xhr.open('POST', '/api/upload', true)

    //  THIS is the only place progress should update
    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable) return

      const percent = Math.round(
        (event.loaded / event.total) * 100
      )

      setProgress(percent)
    }

    xhr.onload = () => {
      setIsUploading(false)
      if (xhr.status !== 200) {
        console.error('Upload failed')
      }
    }

    xhr.onerror = () => {
      setIsUploading(false)
      console.error('Network error')
    }

    xhr.send(formData)
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 ">

      
      <div className="xl:col-span-2 bg-neutral-900 rounded-xl p-6 shadow-lg ">
        <h2 className="text-white text-lg font-semibold mb-4">
          Upload Your Creations
        </h2>

        <div
          className="border-2 border-dashed border-neutral-700 rounded-xl p-10
          flex flex-col items-center justify-center text-center
          hover:border-cyan-400 transition cursor-pointer"
          onClick={() => inputRef.current?.click()}
        >
          <UploadCloud size={48} className="text-neutral-500 mb-4" />

          <p className="text-white font-medium">
            Drag & Drop your files
          </p>
          <p className="text-sm text-neutral-400 mt-1">
            PNG, JPG, WEBP up to 20MB
          </p>

          <button
            type="button"
            className="mt-6 px-6 py-2 rounded-lg
            bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
          >
            Browse Files
          </button>

          <input
            ref={inputRef}
            type="file"
            multiple
            hidden
            onChange={(e) => {
              if (e.target.files) {
                handleUpload(e.target.files)
              }
            }}
          />
        </div>
      </div>

      
      <div className="bg-neutral-900 rounded-xl p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-white text-lg font-semibold mb-6">
            Processing Options
          </h2>

          <Option icon={<Lock size={18} />} title="Automatically apply watermark" />
          <Option icon={<Search size={18} />} title="Generate SEO metadata" />
          <Option icon={<ImageIcon size={18} />} title="Create SEO thumbnails" />
          
        </div>

        
        {isUploading && (
          <div className="mt-6">
            <p className="text-sm text-neutral-400 mb-2">
              Uploading {filesCount} file{filesCount > 1 ? 's' : ''} — {progress}%
            </p>

            <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
              <div
                className="h-2 bg-cyan-400 transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Option({
  icon,
  title,
  disabled = false,
}: {
  icon: React.ReactNode
  title: string
  disabled?: boolean
}) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg mb-3
      ${disabled ? 'opacity-50' : 'hover:bg-neutral-800'} transition`}
    >
      <div className="flex items-center gap-3 text-neutral-300">
        {icon}
        <span className="text-sm">{title}</span>
      </div>

      <div
        className={`w-10 h-5 rounded-full relative
        ${disabled ? 'bg-neutral-700' : 'bg-cyan-400'}`}
      >
        <div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full" />
      </div>
    </div>
  )
}
