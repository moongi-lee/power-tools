"use client"
import Link from "next/link";
import {useState} from "react";
import ToolCard from "@/components/ToolCard";

export default function Home() {

  const [hoverState, setHoverState] = useState();

  return (
    <>
      <div className="contents__box">
        <div className="main_section__box">
          <div className="main_section__intro">
            <div className="main_section__intro-title">
              CREATE STUNNING VISUALS <br />
              IN SECONDS
            </div>
            <img
              className="main_section__intro-image"
              src="/image/title-image.png"
              alt="메인사진"
            />
          </div>
          <div className="main_section__tools">
            <div className="main_section__tools-title">TOOLS</div>
            <div className="main_section__tools-grid">
              <ToolCard />
              <div className="main_section__tools-grid-item">
                <img
                    className="main_section__tools-grid-item-image"
                    src="/image/item-image.png"
                    alt="아이탬 이미지"
                />
                <div className="main_section__tools-grid-item-textbox">
                  <div className="main_section__tools-grid-item-title">
                    Stable Diffusion 1.5
                  </div>
                  <div className="main_section__tools-grid-item-description">
                    Extract the main subject from a pucture with incredible accuracy. it's like magic
                  </div>
                </div>
              </div>
              <div className="main_section__tools-grid-item">
                <img
                    className="main_section__tools-grid-item-image"
                    src="/image/item-image.png"
                    alt="아이탬 이미지"
                />
                <div className="main_section__tools-grid-item-textbox">
                  <div className="main_section__tools-grid-item-title">
                    Image Upscaler
                  </div>
                  <div className="main_section__tools-grid-item-description">
                    Extract the main subject from a pucture with incredible accuracy. it's like magic
                  </div>
                </div>
              </div>
              <div className="main_section__tools-grid-item">
                <img
                    className="main_section__tools-grid-item-image"
                    src="/image/item-image.png"
                    alt="아이탬 이미지"
                />
                <div className="main_section__tools-grid-item-textbox">
                  <div className="main_section__tools-grid-item-title">
                    Create ID photo
                  </div>
                  <div className="main_section__tools-grid-item-description">
                    Extract the main subject from a pucture with incredible accuracy. it's like magic
                  </div>
                </div>
              </div>
              <div className="main_section__tools-grid-item">
                <img
                    className="main_section__tools-grid-item-image"
                    src="/image/item-image.png"
                    alt="아이탬 이미지"
                />
                <div className="main_section__tools-grid-item-textbox">
                  <div className="main_section__tools-grid-item-title">
                    Cleanup
                  </div>
                  <div className="main_section__tools-grid-item-description">
                    Extract the main subject from a pucture with incredible accuracy. it's like magic
                  </div>
                </div>
              </div>
              <div className="main_section__tools-grid-item">
                <img
                    className="main_section__tools-grid-item-image"
                    src="/image/item-image.png"
                    alt="아이탬 이미지"
                />
                <div className="main_section__tools-grid-item-textbox">
                  <div className="main_section__tools-grid-item-title">
                    Face Swap
                  </div>
                  <div className="main_section__tools-grid-item-description">
                    Extract the main subject from a pucture with incredible accuracy. it's like magic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
