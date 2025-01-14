import React from "react";
import { Link } from "react-router-dom";
import LinkCard from "../components/LinkCard";
import PropTypes from "prop-types";
import { BsPersonFill } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { GrMedium } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import Embed from "./Embed";

export default function Page({
  username,
  imgSrc,
  profileName,
  about,
  links,
  appearance,
  socials,
  styleClasses,
}) {
  const {
    background,
    backgroundColor,
    font,
    fontColor,
    linkStyle,
    linkColor,
    linkFontColor,
  } = appearance;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: backgroundColor,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: font,
        color: fontColor,
      }}
      className={styleClasses}
    >
      {imgSrc ? (
        <div className="w-24 h-24 flex justify-center">
          <img
            src={imgSrc}
            className="w-24 h-24 rounded-full object-cover"
            alt=""
          />
        </div>
      ) : (
        <div className="w-24 h-24 flex justify-center border rounded-full">
          <BsPersonFill className="p-2 w-full h-full text-gray-500" />
        </div>
      )}
      {profileName ? (
        <h1 className="text-lg font-bold">{profileName}</h1>
      ) : (
        <h1 className="text-lg font-bold">@{username}</h1>
      )}
      <p className="text-center text-base font-semibold">{about}</p>
      <div
        className={`p-4 w-full flex flex-col justify-center items-center space-y-4`}
      >
        {links
          ?.filter((link) => link.active !== false && link.title && link.link)
          .map((link) => {
            if (link.embed)
              return (
                <Embed
                  key={link.title}
                  link={link}
                  linkColor={linkColor}
                  linkFontColor={linkFontColor}
                  linkStyle={linkStyle}
                />
              );
            return (
              <LinkCard
                key={link.title}
                link={link}
                linkStyle={linkStyle}
                linkColor={linkColor}
                linkFontColor={linkFontColor}
              />
            );
          })}
      </div>
      <div className="w-3/4 flex flex-wrap justify-center items-center">
        {socials.twitter && (
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://twitter.com/${socials.twitter}`}
          >
            <FiTwitter
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
        {socials.instagram && (
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://instagram.com/${socials.instagram}`}
          >
            <FiInstagram
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
        {socials.facebook && (
          <a rel="noreferrer" target="_blank" href={socials.facebook}>
            <FiFacebook
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
        {socials.linkedin && (
          <a rel="noreferrer" target="_blank" href={socials.linkedin}>
            <FiLinkedin
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
        {socials.github && (
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://github.com/${socials.github}`}
          >
            <FiGithub
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
        {socials.hashnode && (
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://hashnode.com/@${socials.hashnode}`}
          >
            <SiHashnode
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
        {socials.devto && (
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://dev.to/@${socials.devto}`}
          >
            <FaDev
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
        {socials.medium && (
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://medium.com/@${socials.medium}`}
          >
            <GrMedium
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
        {socials.whatsapp && (
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${socials.whatsapp}`}
          >
            <ImWhatsapp
              size={45}
              className="m-1 hover:scale-110 transition-transform duration-200"
            />
          </a>
        )}
      </div>
      <Link
        to={"/"}
        className="text-2xl font-extraboldbold font-nunito text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-blue-400"
      >
        Link.pile
      </Link>
    </div>
  );
}

Page.propTypes = {
  username: PropTypes.string,
  imgSrc: PropTypes.string,
  profileName: PropTypes.string,
  about: PropTypes.string,
  links: PropTypes.array,
  appearance: PropTypes.object,
  socials: PropTypes.object,
  styleClasses: PropTypes.string,
};
