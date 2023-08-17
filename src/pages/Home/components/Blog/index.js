import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import { GradientTitle } from "components/GradientTitle";
import { Line } from "../../../../components/Line";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "./styles.scss";

export const Blog = () => {
   return (
      <section className="blog" id="blog">
         <div className="blogContainer">
            <div className="blog__hat">
               <GradientTitle text="Our blog" />
               <Line />
               <p>Get to know the latest stuff via our blog post.</p>
            </div>
            <Swiper
               effect={"coverflow"}
               initialSlide={1}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={"auto"}
               slideToClickedSlide={true}
               coverflowEffect={{
                  rotate: 0,
                  stretch: 50,
                  depth: 250,
                  modifier: 1,
                  slideShadows: false,
               }}
               modules={[EffectCoverflow]}
            >
               <SwiperSlide>
                  <div>
                     <div>
                        <div>
                           <p>01 FEB, 2019 | TECHNOLOGY</p>
                           <p>HOW TO SELL YOUR ITUNES GIFTCARD WITH US.</p>
                           <p>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea...</p>
                           <button>READ MORE</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     <div>
                        <div>
                           <p>19 JUNE, 2019 | BUSINESS</p>
                           <p>ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...</p>
                           <p>Nulla metus justo, porttitor ac velit eu, dignissim auctor nibh. Vivamus sagittis neque vel neque hendrerit interdum. Fusce eget tempus quam.</p>
                           <button>READ MORE</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     <div>
                        <div>
                           <p>01 FDEC, 2019 | LIFESTYLE</p>
                           <p>EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</p>
                           <p>Duis id sem dignissim, sagittis quam at, condimentum lacus. Aliquam rutrum, neque ac volutpat tempus, arcu sapien laoreet tortor, eget feugiat.</p>
                           <button>READ MORE</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </section>
   )
};