import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, getAsset, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    main={{
      image1: {
        image: getAsset(entry.getIn(["data", "main", "image1", "image"])),
        alt: entry.getIn(["data", "main", "image1", "alt"])
      }
    }}
    content={widgetFor("body")}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
