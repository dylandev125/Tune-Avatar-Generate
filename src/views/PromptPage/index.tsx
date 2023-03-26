import TextInput from "components/TextInput";
import { useState, useEffect } from "react";
import { API_DOMAIN } from "utils/url";
import List from "./List";
import { ToastContainer, toast } from "react-toastify";
import Mark from "assets/question_mark.png"

const PromptPage = () => {
  const [tuneList, setTuneList] = useState<any>([]);
  const [displayedList, setDisplayedList] = useState<Object[]>([]);
  const [promptList, setPromptList] = useState<Object[]>([]);
  const [promptText, setPromptText] = useState<string>("");
  const [tuneId, setTuneId] = useState<number>(0);
  const [tuneName, setTuneName] = useState<string>("");
  const [tuneToken, setTuneToken] = useState<string>("");

  useEffect(() => {
    (async () => {
      await fetch(API_DOMAIN + "/tunes", {
        method: "GET",
      })
        .then(async (res: any) => {
          let data = await res.json();
          for (let tune of data.data) {
            setTuneList((prev: any) => [...prev, tune]);
            setDisplayedList((prev: any) => [...prev, tune]);
          }
        })
        .catch((err) => {
          throw err;
        });
    })();
  }, []);

  const searchHandler = (event: any) => {
    let searcjQery = event.target.value.toLowerCase(),
      displayedList = tuneList.filter((el: any) => {
        let searchValue = el.title.toLowerCase();
        return searchValue.indexOf(searcjQery) !== -1;
      });
    setDisplayedList([]);
    for (let list of displayedList) {
      setDisplayedList((prev) => [...prev, list]);
    }
  };

  const onTuneClick = async (id: number, name:string, token:string) => {
    await fetch(API_DOMAIN + `/prompts/${id}`, {
      method: "GET",
    })
      .then(async (res: any) => {
        let resData = await res.json();
        setPromptList([]);
        for (let prompt of resData.data) {
          setPromptList((prev) => [...prev, prompt]);
        }
      })
      .catch((err) => {
        throw err;
      });
      setTuneId(id);
      setTuneName(name);
      setTuneToken(token);
  };

  const onPromptChange = (e: any) => {
    setPromptText(e.target.value);
  };

  const keyDownHandle = async (e: any) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      
      if(!promptText.toLowerCase().includes(tuneToken.toLowerCase() + " " + tuneName.toLowerCase()) || tuneId === 0) {
        toast.error("Make Prompt Text containing name and token", {
            autoClose: 2000,
        });
        setPromptText("");
        return;
      }

      if (promptText.split(' ').filter(function(n) { return n !== '' }).length < 4 ) {
        toast.error("Please add more than 4 words for prompt", {
          autoClose: 2000,
        });
        setPromptText("");
        return;
      }

      let formData = new FormData();

      formData.append("promptText", promptText);
      formData.append("id", tuneId.toString());

      await fetch(API_DOMAIN + "/prompts", {
        method: "POST",
        body: formData,
      })
      .then((res) => {
        toast.success("Created a new prompt, it's now being generated and will be finished in 5 min", {
          autoClose: 5000,
        });
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          autoClose: 2000,
        });
      });
      setPromptText("");

      const object: any = {
        text: promptText,
        images: []
      }

      setPromptList((prev: any) => [object, ...prev]);
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)]">
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
      <div className="pt-4 px-1 min-w-[400px] overflow-auto scrollbar">
        <TextInput
          className="search"
          onChange={(e) => searchHandler(e)}
          placeholder="Search Tune"
        />
        <ul className="list-none">
          {displayedList.map((el: any) => {
            return (
              <List
                key={el.id}
                title={el.name}
                image={el.orig_images[0]}
                id={el.title}
                onClick={() => onTuneClick(el.id, el.name, el.token)}
              />
            );
          })}
        </ul>
      </div>

      <div className="border-l px-4 py-2 border-[#CCC] flex flex-col justify-between w-full">
        <div className="h-full pb-4 overflow-auto scrollbar">
          {promptList.map((elem: any, key) => (
            <div className="my-10 flex flex-col items-center" key={key}>
              <div className="flex">
                {elem.images.length > 0 ? elem.images.map((img: any, imgKey: number) => (
                  <img
                    key={imgKey}
                    className="-ml-[20px] w-[80px] h-[80px] hover:scale-150 transition-all hover:z-10 duration-500"
                    alt=""
                    src={img}
                  />
                )) :
                <img alt="" src={Mark}/>
                }
              </div>
              <p className="w-[500px]">{elem.text}</p>
            </div>
          ))}
        </div>

        <textarea
          placeholder="Write the prompt you want to generate"
          className="px-[6px] pt-1 border border-[#685c5c] hover:border-[#4143db] w-full rounded h-[40px] transition-all outline-none focus:border-[#4143db]"
          onChange={onPromptChange}
          value={promptText}
          onKeyDown={keyDownHandle}
        />
      </div>
    </div>
  );
};

export default PromptPage;
