'use client';

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone, UploadButton } from "@/lib/uploadthing";

import '@uploadthing/react/styles.css';

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: 'messageFile' | 'serverImage'
}

const FileUpload = ({
  onChange,
  value,
  endpoint
}: FileUploadProps) => {
  const fileType = value?.split('.').pop()

  if (value ) {
    return (
      <div className="relative h-40 w-40">
        <Image 
        fill
        src={value}
        alt="Upload"
        className="rounded-[0.3rem]"/>
        <button 
        onClick={() => onChange('')}
        className="bg-destructive/50 text-white p-1 rounded-[0.3rem] absolute top-0 right-0 shadow-sm"
        type="button">
          <X className="h-4 w-4"/>
        </button>
      </div>
    )
  }

  return (
    <UploadDropzone 
    endpoint={endpoint}
    onClientUploadComplete={(res) => {
      onChange(res?.[0].url)
    }}
    onUploadError={(error: Error) => {
      console.log(error);
      
    }}/>
  );
}

export default FileUpload