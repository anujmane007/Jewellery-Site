import React from 'react';
import './Banner.scss';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

export const Banner = () => {
  return (
    <div className="paralax_banner m_70">
      <ParallaxBanner className="paralax_item">
          <ParallaxBannerLayer image={process.env.PUBLIC_URL + 'images/parallax.png'} speed={-20} />
          <ParallaxBannerLayer className="paralax_content mx_width">
              <div className="paralax_list">
                <div className="parallax_title">up to 30% off</div>
                <div className="parallax_subtitle">Engagement Rings</div>
                <div className="parallax_desc">Find Your Perfect Match In Our Wedding Ring Collection </div>
                {/* <a className="btn theme_button" href="#">SHOP NOW</a> */}
              </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
    </div>
  )
}
