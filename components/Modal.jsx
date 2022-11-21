import Image from "next/image";
import { Fragment, useRef, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/24/outline";

import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  const addImageToPost = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0]; // get selected file!
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    // Once browser is done reading the file, what is returned is a read event,
    // store the `result` in our component-level state.
    reader.onload = (readerEvent) => setSelectedFile(readerEvent.target.result);
  };
  const uploadPost = async (e) => {
    if (loading) return; // if executed already then exit uploading
    // Uploading to firebase section!
    setLoading(true);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto "
        onClose={() => setOpen(false)}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen sm:block text-center pt-4 px-4 pb-20 sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-lg sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="mt-5 text-center sm:mt-5">
                {selectedFile ? (
                  <Image
                    onClick={() => setSelectedFile(null)}
                    src={selectedFile}
                    width={500}
                    height={500}
                    alt="post"
                    className="object-cover w-full cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full cursor-pointer"
                  >
                    <CameraIcon
                      className="w-6 h-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div className="mt-5 sm:mt-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-900"
                  >
                    Upload a photo
                  </Dialog.Title>
                  <div>
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>

                  <div className="mt-2">
                    <input
                      type="text"
                      ref={captionRef}
                      className="w-full text-center border-none focus:ring-0"
                      placeholder="Please enter a caption..."
                    />
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    disabled={!selectedFile}
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                  >
                    Upload Post
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
