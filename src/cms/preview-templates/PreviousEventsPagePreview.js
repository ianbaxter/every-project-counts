import React from "react";
import PropTypes from "prop-types";
import { PreviousEventsPageTemplate } from "../../templates/previous-events-page";

const PreviousEventsPagePreview = ({ entry, getAsset }) => {
  return (
    <PreviousEventsPageTemplate
      image={getAsset(entry.getIn(["data", "image"]))}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      main={{
        heading: entry.getIn(["data", "main", "heading"]),
        description: entry.getIn(["data", "main", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main", "image1", "image"])),
          alt: entry.getIn(["data", "main", "image1", "alt"])
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main", "image2", "image"])),
          alt: entry.getIn(["data", "main", "image2", "alt"])
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main", "image3", "image"])),
          alt: entry.getIn(["data", "main", "image3", "alt"])
        }
      }}
    />
  );
};

PreviousEventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default PreviousEventsPagePreview;
