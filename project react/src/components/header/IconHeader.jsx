import React from "react";
import Icon from "./Icon";

const icons =["bi bi-person","bi bi-balloon-heart","bi bi-cart"]
   


export default function IconHeader() {
  return (
    <div className="header-icons">
     {icons.map((e)=> <Icon text={e}/>)}
      <div className="bx bx-menu" id="menu-icon">
        <i className="bi bi-list"></i>
      </div>
    </div>
  );
}
