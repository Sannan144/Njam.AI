import React from "react";

const Footer = () => {
  return (
    <footer className="text-white opacity-80 py-4 font-[thin]">
      <div className="text- flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} IORI AI. All rights reserved.
        </p>
        <div className="mt-2">
          <ul className="flex gap-2">
            {
             ['Privacy Policy','Terms Of Service','Contact Us'].map((val)=>{
                return(
                    <li className="hover:underline pointer-cursor">{val}</li>
                )
             })
            }
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
