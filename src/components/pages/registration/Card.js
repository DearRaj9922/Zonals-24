import "./card.css";
import { useEffect, useState } from "react";
// import img1 from "./image/image 13049 (Traced).svg"

const Card = (props) => {
  const [isChecked, setIsChecked] = useState(props.index == props.id - 1);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    if (props.index == props.id - 1) {
      const v = {
        target: {
          name: props.list.name,
          value: props.id,
          checked:true,
        },
      };
      props?.onEventChange(v);
    }
  }, [props.id]);
  return (
    // <div className="Zcard">
    //   <div className="card-image">
    //     <img src={img1} />
    //   </div>
    //   <p className="card-title">{props.list.name}</p>
    // </div>
    <div
      className="Zcard"
      key={props.index}
      // onClick={() => props?.onEventChange(props?.list?.name)}
    >
      <label htmlFor={`radio-card-${props.index}`}>

            <input
              type="checkbox"
              name={props?.list?.name}
              id={`radio-card-${props.index}`}
              value={props?.list?.id}
              onChange={props?.onEventChange}
              checked={isChecked}
              onClick={handleClick}
            />

        <div className="card-image">
          <img src={isChecked == true ? props.list.img1 : props.list.img} />
        </div>
        <p
          className="card-title"
          style={
            isChecked == true
              ? { background: "#44251B" }
              : { background: "#565656" }
          }
        >
          {props.list.name}
        </p>
      </label>
    </div>
  );
};

export default Card;
