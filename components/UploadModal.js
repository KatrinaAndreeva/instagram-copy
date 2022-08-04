import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import Modal from 'react-modal';
import { CameraIcon } from '@heroicons/react/outline';
import { useRef, useState } from 'react';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  function addImageToPost(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 l-[50%] translate-x-4 md:translate-x-[30%] lg:translate-x-[100%] border-2 bg-white rounded-md shadow-md mx-auto"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col items-center justify-center h-[100%]">
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt={selectedFile}
                className="w-full max-h-[250px] object-cover cursor-pointer"
              />
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className="p-2 text-red-500 bg-red-200 border-2 rounded-full cursor-pointer h-14"
              />
            )}

            <input
              onChange={addImageToPost}
              type="file"
              hidden
              ref={filePickerRef}
            />
            <input
              className="w-full m-4 text-center border-none rounded-md focus:ring-0"
              type="text"
              placeholder="Please enter your caption"
              maxLength="150"
            />
            <button
              disabled
              className="w-full p-2 text-white bg-red-600 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
