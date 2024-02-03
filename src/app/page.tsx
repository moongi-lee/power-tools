import ToolCard from "@/components/ToolCard";

export default function Home() {


  return (
    <>
      <div className="contents__box">
        <div className="main_section__box">
          <div className="main_section__intro">
            <div className="main_section__intro-title">
              CREATE STUNNING VISUALS
            </div>
            <div className="main_section__intro-image">
              <img
                src="/image/title-image.png"
                alt="메인사진"
              />
            </div>
          </div>
          <div className="main_section__tools">
            <div className="main_section__tools-title">TOOLS</div>
            <div className="main_section__tools-grid">
              <ToolCard url="/pages/tools/create-id-photo" title="Create ID Photo" image_src="/image/idp.png" description="From your several photo AI generate your ID photo"/>
              <ToolCard url="/pages/tools/stablediffusion-1" title="Stable Diffusion 1.5" image_src="/image/sd.png" description="Real-Time Text-to-image Generation"/>
              <ToolCard url="/pages/tools/remove-bg" title="Remove Background" image_src="/image/item-image.png" description="Extract the main subject from a picture with incredible accuracy. it's like magic"/>
              <ToolCard url="/pages/tools/upscaler" title="Image upscaler" image_src="/image/upscale.png" description="Upscale your images by 2x or 4x inseconds, it can also remove noise and recover beautiful details"/>
              <ToolCard url="/pages/tools/swap-face" title="Swap" image_src="/image/swap.png" description="Swap people in any image"/>
              <ToolCard url="/pages/tools/cleanup" title="Cleanup" image_src="/image/clean.png" description="Remove object, people, text and defects from your pictures automatically"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
