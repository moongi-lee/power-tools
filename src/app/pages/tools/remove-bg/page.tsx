import { LuScissorsSquare } from "react-icons/lu";

export default function RemoveBg() {
  return (
      <>
        <div className="contents__box">
          <div className="remove-bg">
            <div className="remove-bg__main-form">
              <div className="remove-bg__main-form__intro">
                <LuScissorsSquare className="remove-bg-icon" />
                <h1 className="title">REMOVE BACKGROUND</h1>
                <p className="description">Remove background online in 1 click.</p>
              </div>
              {/*<div className="remove-bg__main-form__data">*/}
              {/*  <div className="remove-bg__main-form__data-upload">*/}
              {/*    Click, paste, or drop up to 10 files here to start*/}
              {/*  </div>*/}
              {/*  <button>Remove background</button>*/}
              {/*</div>*/}
              <form action="http://127.0.0.1:8000/power_tools/sdtest/post/" method="POST" encType="multipart/form-data" className="remove-bg__main-form__data">
                <input className="remove-bg__main-form__data-upload" type="file" name="image" placeholder="Click, paste, or drop up to 10 files here to start"/>
                <input className="prompt" type=" text" name=" title"/>
                <button>Remove background</button>
              </form>

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
                <p className=" description">Portraits are our specialty. We flawlessly isolate the subject in your portrait photographs, ensuring the focus remains on the subject while the background is seamlessly removed.</p>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}