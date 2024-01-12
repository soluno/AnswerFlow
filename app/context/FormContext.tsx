"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormProviderProps {
  children: ReactNode;
}

interface formData {
  botName: string;
  botPurpose: string;
  toneOfVoice: string;
  openAiApiKey: string;
  files: File[];
  urls: string[];
}
interface FormContextProps {
  formData: {
    botName: string;
    botPurpose: string;
    toneOfVoice: string;
    openAiApiKey: string;
    files: File[];
    urls: string[];
  };
  setBotName: (botName: string) => void;
  setBotPurpose: (botPurpose: string) => void;
  setToneOfVoice: (openAiApiKey: string) => void;
  setOpenAiApiKey: (name: string) => void;
  setFiles: (files: File[]) => void;
  setUrls: (urls: string) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<formData>({
    botName: "",
    botPurpose: "",
    toneOfVoice: "",
    openAiApiKey: "",
    files: [],
    urls: [],
  });

  const setBotName = (botName: string) => {
    setFormData((prev) => ({ ...prev, botName }));
  };
  const setBotPurpose = (botPurpose: string) => {
    setFormData((prev) => ({ ...prev, botPurpose }));
  };
  const setToneOfVoice = (toneOfVoice: string) => {
    setFormData((prev) => ({ ...prev, toneOfVoice }));
  };
  const setOpenAiApiKey = (openAiApiKey: string) => {
    setFormData((prev) => ({ ...prev, openAiApiKey }));
  };

  const setFiles = (files: File[]) => {
    setFormData((prev) => ({ ...prev, files: files }));
  };

  const setUrls = (url: string) => {
    setFormData((prev) => ({ ...prev, urls: [...prev.urls, url] }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setBotName,
        setBotPurpose,
        setToneOfVoice,
        setOpenAiApiKey,
        setFiles,
        setUrls,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
