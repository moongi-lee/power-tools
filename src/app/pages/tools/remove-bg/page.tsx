'use client'
import { LuScissorsSquare } from "react-icons/lu";
import {useRef, useState} from "react";
import {any} from "prop-types";

export default function RemoveBg() {


  const [image, setImage] = useState([]);
  const imgRef = useRef();
  const [prompt, setPrompt] = useState('');
  

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('버튼클릭')
    e.preventDefault();
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: {name, value:any },
    } = e;

    if (name === "image") {
      // @ts-ignore
      let file = value;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        // @ts-ignore
        setImage(reader.result);
      }


    }
    if (name === "prompt") {
      setPrompt(value);
    }




    console.log('image:', image)
    console.log('prompt:', prompt)

  }

  
  return (
    <>
      <div className="contents__box">
        <div className="remove-bg">
          <div className="remove-bg__main-form">
            <div className="remove-bg__main-form__intro">
              <LuScissorsSquare className="remove-bg-icon" />
              <h1 className="title">REMOVE BACKGROUND</h1>
              <p className="description">
                Remove background online in 1 click.
              </p>
            </div>
            <form
              onSubmit={onSubmit}
              method="post"
              encType="multipart/form-data"
              className="remove-bg__main-form__data"
            >
              <label htmlFor="image" className="remove-bg__main-form__data-upload">
                <img src={image} alt="test"/>
                Click, paste, or drop up to 10 files here to start
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                className="remove-bg__main-form__data-upload-input"
                onChange={onChange}
                value={image}
                placeholder="Click, paste, or drop up to 10 files here to start"
              />
              {/*<input className="prompt" type="text" name="prompt" id="prompt" onChange={onChange} value={prompt} />*/}
              <button type="submit">Remove background</button>
            </form>

            {/*<form*/}
            {/*  action="http://127.0.0.1:8000/sd/sdtest/post/"*/}
            {/*  method="post"*/}
            {/*  encType="multipart/form-data"*/}
            {/*  className="remove-bg__main-form__data"*/}
            {/*>*/}
            {/*  <input*/}
            {/*    className="remove-bg__main-form__data-upload"*/}
            {/*    type="file"*/}
            {/*    name="image"*/}
            {/*    placeholder="Click, paste, or drop up to 10 files here to start"*/}
            {/*  />*/}
            {/*  <input className="prompt" type=" text" name=" title" />*/}
            {/*  <button onClick={onClick}>Remove background</button>*/}
            {/*</form>*/}


          </div>
          <div className=" remove-bg__example">
            <h1 className=" title">TRY AN EXAMPLE</h1>
            <div className=" remove-bg__example__btnbox">
              <button>Portrait</button>
              <button>Product</button>
              <button>Drawing</button>
              <button>Small details</button>
              <button>Precise</button>
            </div>
            <div className=" remove-bg__example__image">
              <img src="/image/example-bg.png" alt=" example" />
              <p className=" description">
                Portraits are our specialty. We flawlessly isolate the subject
                in your portrait photographs, ensuring the focus remains on the
                subject while the background is seamlessly removed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}