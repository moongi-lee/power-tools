import Link from "next/link";

type ToolCardProps = {
  image_src: string;
  title: string;
  description: string;
  url: string;
};


export default function ToolCard( { image_src, title, description, url }: ToolCardProps) {
  return (
    <>
      <Link href={url}>
        <div className="main_section__tools-grid-item">
          <div className="main_section__tools-grid-item-image">
            <img
              src={image_src}
              alt="아이탬 이미지"
            />
          </div>
          <div className="main_section__tools-grid-item-textbox">
            <div className="main_section__tools-grid-item-title">
              {title}
            </div>
            <div className="main_section__tools-grid-item-description">
              {description}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
