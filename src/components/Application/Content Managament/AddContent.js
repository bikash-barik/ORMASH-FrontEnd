import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import ErrorMessage from "../../ErrorMessage";
import axios from "axios"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { APIURL } from "../../../Redux/APIURL";
const AddContent = ({ dispatch }) => {
  const history = useHistory();
  const params = useParams();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [content, setContent] = useState({
    global_link: "",
    primary_link: "",
    title: "",
    content:"",
    publish_status:""
  });
  const [textBeforeUpdate, setTextBeforeUpdate] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [globalLinks, setGlobalLinks] = useState([]);
  const [primaryLinks, setPrimaryLinks] = useState([]);
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  // const [text, setText] = useState(null)
  const Cancel = () => {
    history.push("/hub/ViewContent");
  };
  const addContent = async (e) => {
    e.preventDefault();
  try {
    if(content.content && content.global_link && content.primary_link  && content.title){
   
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        await axios.post(`${APIURL}/api/content`, content, config)
        setContent({
          global_link: "",
          primary_link: "",
          title: "",
          content: "",
          publish_status: ""
        })
        history.push("/hub/ViewContent");
      
     
    } else{
      setErrorMsg("Please fill all the fields")     
    }

  } catch (error) {
    console.log(error)
    const msg = error.response?.data?.message
    setErrorMsg(msg)
  }
  }
  const updateContent = async (e) => {
    e.preventDefault();
    try {
       console.log(content);
      if (content.content && content.global_link && content.primary_link && content.title) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        await axios.put(`${APIURL}/api/content/${params.id}`, content, config)
        setContent({
          global_link: "",
          primary_link: "",
          title: "",
          content: "",
          publish_status: ""
        })
        history.push("/hub/ViewContent");
      } else{
        setErrorMsg("Please don't leave any field empty")
      }
        
    } catch (error) {
      console.log(error)
      const msg = error.response?.data?.message
      setErrorMsg(msg)
    }
  }
  const changeHandler = (event) => {
    setContent({
      ...content,
      [event.target.name]: event.target.value
    });
    if (event.target.name === "global_link"){
         setContent({
          ...content,
          "primary_link":"",
           "global_link": event.target.value
         })  
         getPrimaryLink(content.global_link)
    }
   
  }
  useEffect(() => {
    let data = convertToRaw(editorState.getCurrentContent()).blocks?.map((item) => item.text.toString())
    if(data.length > 1){
         setContent({
      ...content,
      "content": data?.join(" ")
    })
    } else{
         setContent({
      ...content,
      "content": data?.toString()
    })
    }
  }, [editorState,setEditorState])
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 8000);
  }, [errorMsg])
  
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    if (params.id) {
      axios.get(`${APIURL}/api/content/${params.id}`, config)
        .then(res => {
          setContent(res.data.content);
          setTextBeforeUpdate(res.data.content.content)
        })
        .catch(err => {
          console.log(err)
        })
    }

  }, [params.id, userInfo.token])

  const getGlobalLink = async () => {
    try {
      const response = await axios.get(`${APIURL}/api/globallinks/`)
      // console.log(response);
      setGlobalLinks(response.data.globalLinks);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    getGlobalLink()
    if(content.global_link !== ""){
      getPrimaryLink()
    // if(primaryLinks.length === 0){
    //   setErrorMsg("Choose another Globallink as there no is Primarylinks available for your selected Globallink");
    // }
    }
 

  }, [content.global_link,primaryLinks])
  const getPrimaryLink = async (global_link) => {
    try {
          if(global_link){
            const response = await axios.get(`${APIURL}/api/primarylinks?globalLink=${global_link}`)
            if (response.data.primaryLinks.length === 0) {
              setPrimaryLinks([]);
              setErrorMsg("Choose another Globallink as there no is Primarylinks available for your selected Globallink");
             
            } else {
              setPrimaryLinks(response.data.primaryLinks);
            }
          } else{
            const response = await axios.get(`${APIURL}/api/primarylinks?globalLink=${content.global_link}`)
            if (response.data.primaryLinks.length === 0) {
              setPrimaryLinks([]);
              setErrorMsg("Choose another Globallink as there no is Primarylinks available for your selected Globallink");
             
            } else {
              setPrimaryLinks(response.data.primaryLinks);
            }
          }
       
        
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form action="">
        <div class="magazin-container">
          {params.id ? (<h1 className="magazin-heading">Update Content</h1>) :
           (<h1 className="magazin-heading">Add Content</h1>)}
         

          <hr />
          {errorMsg && <ErrorMessage variant="danger">{errorMsg}</ErrorMessage>}

          <form class="row g-3 mb-5 d-flex justify-content-between">
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Global Link
              </label>
              <select id="inputState" class="form-select p-1"
                name="global_link" value={content.global_link} onChange={e => changeHandler(e)}
              >
                <option selected>Choose...</option>
                {globalLinks.map((item,i)=>(
                  <option key={i}>{item.link_name}</option>
                ))}
              </select>
            </div>
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Select Primary Link
              </label>
              <select id="inputState" class="form-select p-1"
                name="primary_link" value={content.primary_link} onChange={e => changeHandler(e)}
              >
                <option selected>Choose...</option>
                {content.global_link && primaryLinks.length > 0 && primaryLinks.map((item,i)=>(
                  <option key={i}>{item.link_name}</option>
                ))

                }
                {!content.global_link && (
                  <option disabled> First choose Globallink </option>
                )}
                {content.global_link && primaryLinks.length === 0 && (
                 <option disabled>No Primarylinks  </option>
                )}
              </select>
            </div>
           
            <div class="col-md-5">
              <label for="inputEmail4" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Title"
                name="title"
                value={content.title}
                onChange={e => changeHandler(e)}
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Select Publish Status
              </label>
              <select id="inputState" class="form-select p-1"
                name="publish_status" value={content.publish_status} onChange={e => changeHandler(e)}
              >
                <option selected>Choose...</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
         
           
         
          </form>
     
          <Editor
            responsive
            placeholder="Enter your text here:"
            editorStyle={{ border: "10px solid #C0C0C0", height: "56.5vh" }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperStyle={{
              width: "100%",
              height: "60vh",
              borderTop: "3px solid black",
            }}

          />
        
          {params.id && textBeforeUpdate && (
            <textarea disabled value={textBeforeUpdate} className="mt-9 form-control" style={{ height: "7rem" }} />
          )}
          <div className={params.id ? "mt-3" : "mt-8"}>
            {params.id ? (<button type="submit" className="Submit-btn" onClick={e => updateContent(e)}>
              Update
            </button>) : (<button type="submit" className="Submit-btn" onClick={e => addContent(e)}>
              Submit
            </button>)}
            <button onClick={Cancel} type="submit" className="Cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddContent;
