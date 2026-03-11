import { MosaicBannerContainer, MosaicImage, MosaicWrapper } from "./style";
import MosaicBannerImage from "../../assets/mosaic-banner-1.svg";
import MosaicBannerImage2 from "../../assets/mosaic-banner-2.svg";
import MosaicBannerImage3 from "../../assets/mosaic-banner-3.svg";

const MosaicBanner = () => {
  return (
    <MosaicBannerContainer>
      <div>
        <a href="/">
          <MosaicImage src={MosaicBannerImage} />
        </a>
      </div>
      <MosaicWrapper>
        <a href="/">
          <MosaicImage src={MosaicBannerImage2} />
        </a>
        <a href="/">
          <MosaicImage src={MosaicBannerImage3} />
        </a>
      </MosaicWrapper>
    </MosaicBannerContainer>
  );
};

export default MosaicBanner;
