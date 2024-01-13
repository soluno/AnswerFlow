import { useFormContext } from "@/app/context/FormContext";
import Image from "next/image";
import React, { useState } from "react";
type props = { handleNext: () => void };

function StepE({ handleNext }: props) {
  const { formData, setFiles, setUrls } = useFormContext();
  const [Url, setUrl] = useState("");
  const [fileTypeSelected, setFileTypeSelected] = useState("Add Data Source");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <form className="flex flex-1 flex-col justify-between min-h-screen items-start w-full px-20 py-20">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[40px] font-bold">Connect Data Sources</h1>
          <div className="px-10 py-4 rounded-[10px] bg-[#333333] relative w-[280px]">
            <div
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className="flex justify-between items-center gap-16 cursor-pointer"
            >
              <p>{fileTypeSelected}</p>
              <Image
                src={"/rightarrow.png"}
                width={8}
                height={8}
                alt="rightarrow png"
                className={` transition-all ${toggle && "rotate-90"}`}
              />
            </div>

            <div
              className={`flex justify-start flex-col gap-4 px-10 py-4 rounded-[10px] bg-[#333333] absolute top-[70px] w-[stretch] left-0 ${
                toggle && " invisible"
              }`}
            >
              <p
                className="cursor-pointer"
                onClick={() => {
                  setFileTypeSelected("Documents");
                  setToggle((prev) => !prev);
                }}
              >
                Documents
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  setFileTypeSelected("Database");
                  setToggle((prev) => !prev);
                }}
              >
                Database
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  setFileTypeSelected("Links");
                  setToggle((prev) => !prev);
                }}
              >
                Links
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  setFileTypeSelected("Zapier");
                  setToggle((prev) => !prev);
                }}
              >
                Zapier
              </p>
            </div>
          </div>
        </div>
        {(fileTypeSelected == "Documents" ||
          fileTypeSelected == "Add Data Source") && (
          <div className="flex flex-col gap-10 w-full">
            <label
              htmlFor="file"
              className="bg-[#0B0B0B] rounded-[10px] px-8 py-4 outline-none w-[90%] h-[450px] flex flex-col gap-6 justify-center items-center cursor-pointer"
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-[24px] text-[#606060] font-bold">
                  Drag & Drop any Documents
                </h1>
                <p className="text-[16px] text-[#606060]">
                  (Supports doc, docx, xls, xlsx, pdf, ppt, pptx)
                </p>
              </div>
              <div className="btn sec">{` ${
                formData.files.length > 0
                  ? "Add more files.."
                  : "Choose files.."
              }`}</div>
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => {
                if (e.target.files) {
                  const filesArray = Array.from(e.target.files as FileList);
                  setFiles([...formData.files, ...filesArray]);
                }
              }}
              multiple
              required
              placeholder="Select an option"
            />
          </div>
        )}
        {fileTypeSelected == "Links" && (
          <div className="flex flex-col gap-4 w-[70%]">
            <label htmlFor="links" className="text-[20px] font-medium">
              Enter a Link
            </label>
            <input
              type="text"
              id="links"
              value={Url}
              required
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full bg-[#0B0B0B] py-4 px-10 outline-none rounded-[10px] text-[20px]"
            />
            <p className="text-[#9D9D9D]">
              AnswerFlow AI will import content from this link to your
              Knowledge-base
            </p>
          </div>
        )}
        <div className="flex justify-between w-full items-center  gap-4">
          {fileTypeSelected == "Links" && (
            <button
              disabled={formData.openAiApiKey == ""}
              className={`btn sec flex !justify-around ${
                Url == "" && " opacity-50 cursor-not-allowed"
              }`}
              onClick={(e) => {
                if (Url) {
                  e.preventDefault();
                  setUrls(Url);
                  setUrl("");
                }
              }}
            >
              <p>Add to Data Source</p>
              <Image
                src={"/rightarrow.png"}
                width={8}
                height={8}
                alt="rightarrow png"
              />
            </button>
          )}
          <button
            disabled={formData.openAiApiKey == ""}
            className={`btn sec flex !justify-around ${
              formData.urls.length == 0 &&
              formData.files.length == 0 &&
              " opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (formData.files.length > 0 || formData.urls.length > 0) {
                e.preventDefault();
                handleNext();
              }
            }}
          >
            <p>Finish Setup</p>
          </button>
        </div>
      </form>
      <div className="min-h-screen min-w-[33%] bg-[#0B0B0B] py-30 flex flex-col justify-center items-start gap-20">
        <h2 className="px-20 text-[#707070] text-[32px] font-bold">
          Setup Progress
        </h2>
        <div className="flex flex-col justify-center items-start gap-10 ">
          <div className="flex flex-col justify-start items-start gap-6 px-20">
            <p className="text-[#9D9D9D] uppercase ">1. basic settings</p>
            {formData.botName ? (
              <p className="text-[18px] h-[31px]">{formData.botName}</p>
            ) : (
              <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
            )}
          </div>
          <br />
          <div className="flex flex-col justify-start items-start gap-6 px-20">
            <p className="text-[#9D9D9D] uppercase">2. Data sources</p>
            {formData.files.length > 0 || formData.urls.length > 0 ? (
              <div className="flex flex-col gap-2">
                {formData.files.map((file) => (
                  <div key={file.name} className="flex gap-1">
                    {file.type == "application/pdf" && (
                      <Image src={"/"} width={16} height={16} alt="" />
                    )}
                    {/* {file.type == "application/pdf" && (
                      <Image src={"/"} width={16} height={16} alt="" />
                    )}
                    {file.type == "application/pdf" && (
                      <Image src={"/"} width={16} height={16} alt="" />
                    )} */}
                    {file.name}
                  </div>
                ))}
                {formData.urls.map((url) => (
                  <div key={url} className="flex gap-1">
                    <Image src={"/"} width={16} height={16} alt="" />
                    {url}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
                <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
                <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
              </div>
            )}
          </div>
          <br />
          <div className="flex flex-col justify-start items-start gap-6 px-20">
            <p className="text-[#9D9D9D] uppercase">3. create bot</p>
            <div className="flex flex-col gap-2">
              {formData.files.length > 0 || formData.urls.length > 0 ? (
                <p>Sales Analysis Bot is ready to go Live! 🚀</p>
              ) : (
                <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
              )}
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default StepE;
