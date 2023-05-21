import * as React from "react";
import Button from "@mui/material/Button";
import "./ItemSelector.css";

export default function ItemSelector(props) {
  const { availableItems, addToCart, subtractFromCart } = props;

  return (
    <>
      <div className="ItemSelector">
        <h1>Items</h1>
        <div className="Items">
          {availableItems.map((item, i) => {
            let image = `/ItemIcons/${item.name}.png`;
            return (
              <div style={{ display: "inline-block" , width: 500}}>
                <h4>Test</h4>
                <h4>Test</h4>
                <h4>Test</h4>
              </div>
              //   <span style={{ backgroundColor: "blue" }}>
              //     <Button
              //       key={item.id}
              //       variant="contained"
              //       onClick={() => addToCart(item)}
              //       style={{width: 100}}
              //     >
              //       -
              //     </Button>
              //     <img src={image} alt="item picture" border="0" />
              //     <div>{item.name}</div>
              //     <Button
              //       key={item.id}
              //       variant="contained"
              //       onClick={() => addToCart(item)}
              //       style={{width: 100}}

              //     >
              //       +
              //     </Button>
              //   </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
