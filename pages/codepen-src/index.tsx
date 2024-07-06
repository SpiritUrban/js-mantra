import React from "react";
import CodePenFrame from "@/components/organisms/CodePenFrame";
import { Src, codepenSrc } from "@/data/codepenSrc";

export default function CodepenSrc() {
  return (
    <div>
      {codepenSrc.map((item, index) => (
        <div key={index + "condepenSrc"}>
          <CodePenFrame
            height="300"
            style={{ width: "100%" }}
            src={`https://codepen.io/Maks-Mm/embed/${item.id}?default-tab=${item.defaultTab}`}
          />
        </div>
      ))}
      <div>
        <CodePenFrame
          height="300"
          style={{ width: "100%" }}
          scrolling="no"
          title="CSS Only Shimmer Button"
          src="https://codepen.io/Maks-Mm/embed/JjQPQXR?default-tab=ResultCresult"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        />
      </div>
    </div>
  );
}
