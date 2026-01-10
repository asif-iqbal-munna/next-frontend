import React from "react";

const Footer = () => {
  return (
    <div className="py-4 flex items-center justify-center bg-amber-50 text-xs">
      <span>
        ©️ {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/asif-iqbal-munna"
          target="_blank"
          className="underline"
        >
          Asif Iqbal Munna
        </a>{" "}
        All rights reserved
      </span>
    </div>
  );
};

export default Footer;
