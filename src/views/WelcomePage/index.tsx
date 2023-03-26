import { useState } from "react";
import Button from "components/Button";
import TextInput from "components/TextInput";
import { API_DOMAIN } from "utils/url";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const WelcomePage = () => {
  const [images, setImages] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [isFile, setIsFile] = useState<boolean>(true);
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const onFileChange = (files: File[]) => {
    for (let file of files) {
      setImages((prev) => [...prev, file]);
      setFileNames((prev) => [...prev, file.name]);
    }
  };

  const onCreateTune = async () => {
    if (images.length < 4) {
      setIsFile(false);
      toast.error("Import more than 4 image", {
        autoClose: 2000,
      });
      return;
    }

    if (name === "" || title === "") {
      toast.error("Fill the required fields", {
        autoClose: 2000,
      });
      return;
    }

    let formData = new FormData();

    for (let image of images) {
      formData.append("userPhotos", image, image.name);
    }
    formData.append("fileName", fileNames.toString());
    formData.append("name", name);
    formData.append("title", title);

    setCreateLoading(true);

    await fetch(API_DOMAIN + "/tune", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        setCreateLoading(true);
        toast.success("Created a new tune", {
          autoClose: 2000,
        });
      })
      .catch((err) => {
        toast.error("Something went wrong");
        setCreateLoading(true);
      });
    setCreateLoading(false);

    setIsFile(true);
  };

  return (
    <div className="grow bg-contain bg-no-repeat ">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      
      <div className="flex flex-col mt-[100px] max-w-[360px] min-h-[400px] p-10 mx-auto shadow-2xl">
        <label className="text-sm mt-5">Select from 4 to 20 images *</label>
        <label
          className={`border  hover:border-[#b0bfce] cursor-pointer transition-all rounded-md ${
            isFile ? "border-[#DEE2E6]" : "border-[#b6394e]"
          }`}
        >
          <input
            className="w-full"
            type="file"
            multiple
            onChange={(e: any) => onFileChange(e.target.files)}
          ></input>
        </label>

        <div className="flex flex-col justify-between gap-y-2 mt-10">
          <TextInput
            title="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextInput
            title="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <Button
          className="bg-[#009688] text-white hover:!bg-[#009687b0] text-lg mt-auto"
          onClick={onCreateTune}
        >
          {createLoading ? (
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          ) : (
            "Create a new tune"
          )}
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;