import Link from "next/link";

export default function ToolCard() {
  return (
    <>
      <Link href="/pages/tools/remove-bg">
        <div className="main_section__tools-grid-item">
          <img
            className="main_section__tools-grid-item-image"
            src="/image/item-image.png"
            alt="아이탬 이미지"
          />
          <div className="main_section__tools-grid-item-textbox">
            <div className="main_section__tools-grid-item-title">
              Remove Background
            </div>
            <div className="main_section__tools-grid-item-description">
              Extract the main subject from a pucture with incredible accuracy.
               it&apos;s  like magic
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
