import React, {createContext, useEffect, useState} from 'react';

export type ChatContextContent = {
  status?: {
    label: string;
    date: Date;
  };
  setStatus?: (val: any) => void;
  uploadImages?: Array<{path: string; blob: Blob}>;
  setUploadImages?: (val: any) => void;
};
const defaultContxtValues: ChatContextContent = {
  status: {label: '', date: new Date()},
  uploadImages: [],
};
export const ChatContext =
  createContext<ChatContextContent>(defaultContxtValues);

export const ChatContextProvider = (props: any) => {
  // Context values
  const [status, setStatus] = useState({label: '', date: new Date()});
  const [uploadImages, setUploadImages] = useState([]);

  return (
    <ChatContext.Provider
      value={{
        status,
        setStatus,
        uploadImages,
        setUploadImages,
      }}>
      {props.children}
    </ChatContext.Provider>
  );
};
