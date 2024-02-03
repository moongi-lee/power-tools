import Link from "next/link";
import {GiPunchBlast} from "react-icons/gi";

export default function ToolCard() {
  return (
      <>
        <div className="test__box">
          <div className="test__logo"><GiPunchBlast/></div>
          <div className="test__title">빠쌰</div>
        </div>
      </>
  );
}
