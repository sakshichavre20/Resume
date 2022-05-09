import React, { useState } from "react";
import "./GlobalStyles.css";
import { GoPrimitiveDot } from "react-icons/go";
const ImageTitle = ({ src, title, href }) => {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      }}
    >
      <img className="icon" src={src} style={{ height: 80, width: 80 }} />
      <a href={href}>{title}</a>
    </div>
  );
};

const DotHeader = ({ title, subtitle, subHead, href, link, ongoing }) => {
  return (
    <div
      style={{
        marginTop: 5,
        marginBottom: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <a className="title">
        <span style={{ position: "relative", top: 3 }}>
          <GoPrimitiveDot size={18} />
        </span>
        {title}
        <span> {subtitle}</span>
      </a>
      {subHead && <a className="sub_head">Role : {subHead}</a>}
      {href && (
        <a href={href} className="link">
          certificate
        </a>
      )}
      {ongoing && (
        <a className="sub_head" style={{ color: "cornflowerblue" }}>
          Currently ongoing
        </a>
      )}
      {link ? (
        <a href={link} className="link">
          Project Link
        </a>
      ) : null}
    </div>
  );
};

export { ImageTitle, DotHeader };
