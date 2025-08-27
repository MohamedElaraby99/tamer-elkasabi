import React from "react";
import "./style.css";
import {
  FaFacebookF,
  FaCircle
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  facebook: FaFacebookF,
};

export const Socialicons = (params) => {
  return (
    <div className="soc-box">
      <div className="follow-label">تابعونا</div>
      <div className="soc">
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <a key={platform} target="_blank" href={url} rel="noopener noreferrer">
              <IconComponent className="ion" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
