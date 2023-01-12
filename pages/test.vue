<template>
<div class="relative">
    <div class="" id="labs"> 
        <!--  -->
        <div>
          <div class="relative w-full">
            <div class="flex w-full flex-col space-y-4 px-4 lg:flex-row lg:space-y-0 lg:space-x-8 lg:px-6">
              <div class="w-full pb-4 lg:w-8/12">
                <!-- Body  -->
                <div class="mt-8 flex flex-col lg:mt-16">
                  <div class="flex h-full flex-col items-start justify-start">
                    <div>Innovation Labs</div>
                    <div>Future ready, and analytical laborotiries.</div>
                    <div class="mt-4">
                      <div>Being the reliable consultant in geotechnical engineering in the market, we are equipped with a comprehensive laboratory (NABL accredited for more than 100 parameters) along with various setups for field tests as well. The laboratory is divided into different segments like Cement & concrete, Geotechnical, and transportation engineering. This facilitates and empowers us to evaluate the various material parameters as per the standard codal procedures such as IS Code, ASTM, BS codes, etc. Please click here, to know more about our laboratory equipment and other details.</div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="mt-16">
                    <div>Innovation in labs</div>
                    <!-- <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div> -->
                    <div>Apart from the routine established services in the geotechnical engineering and material testing procedures established by Indian standard codes, we are also equipped with the experimental modeling & testing facility. This facility empowers us to perform small-scale modeling of various real-world geotechnical engineering field structures. Such small-scale model experiments help effectively in the evaluation of the performance aspects of the field structures. Further, the critical state evaluation of the experimental models also brings insights into the post-failure investigations and analysis of the field structures. The motivation behind the small-scale model studies begins with the evaluation of the existing field structure and is further extended to the various parametric evaluations in combination with the recent advances made in civil and geotechnical engineering.</div>
                  </div>
                  <!--  -->
                  <div class="mt-16">
                    <div>Test Methodologies</div>
                    <!-- <div>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              </div> -->
                    <div>The laboratory test facility (NABL accredited), and field exploration capability (NABL accredited) in conjunction with the research facility gives us the opportunity to investigate as well as innovate in the geotechnical engineering areas. Field explorations, field tests, and laboratory tests are strictly being conducted in accordance with the quality procedures of ISO 17025:2017 NABL. However, the research facility empowers us to go beyond routine procedures and experiment with various case studies in a small-scale environment. The general methodology of the experimental small-scale studies includes the evaluation of the dimensional similitude of the field case, construction of the small-scale model in a non-deformable strong box with front glass panel, application of the case-specific loading on the model, sequential image capture and acquisitions of the deformations in the model, Image analysis of the acquired images with respect to time frame, evaluation of the load-deformation behavior, evaluation of the failure patterns and concluding the study in conjunction with a field case study. Once the correlation of the small-scale model is established with the behavioral pattern of the field case, the small-scale modeling is further extended to the parametric variations and their influence on the structures' behavior.</div>
                  </div>
                  <!--  -->
                  <div class="mt-16">
                    <div>Test Equipments</div>
                    <!-- <div>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              </div> -->
                    <div>Being a reliable consultant in geotechnical engineering in the market, we are equipped with a comprehensive laboratory (NABL accredited for more than 100 parameters) along with various setups for field tests as well. The laboratory is divided into different segments like Cement & concrete, Geotechnical, and transportation engineering. This facilitates and empowers us to evaluate the various material parameters as per the standard codal procedures such as IS Code, ASTM, BS codes, etc. Please click here, to know more about our laboratory equipment and other details.</div>
                  </div>
                </div>
                <!--  -->
              </div>
              <div class="flex w-full flex-col pt-8 lg:w-4/12 lg:pt-16">
                <div
                  class=""
                  :class="
                            scrollPx > 100 ? 'fixedNav w-full' : 'fixedNavReverse'
                          "
                >
                  <div class="bg-secondaryLight flex items-center justify-center rounded-md p-4 lg:items-start lg:justify-start">
                    <img class="rounded" src="https://res.cloudinary.com/binarycode/image/upload/v1665387055/Provatsalya/page_assets/Research_Asset_2_Ortigan_x_Vatsalya_mqmgne.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>
  <script>
// import UtilsMixin from "../../../mixins/utils";
// import Subtitle from "../../LayoutComponents/Subtitle.vue";
  export default {
    // mixins: [UtilsMixin],
    data() {
        return {
            blog: [],
            next_blog: [],
            tags: [],
            isLoaded: false,
            scrollPx: 0,
        };
    },
    mounted() {
        console.log('ok');
        window.addEventListener("scroll", () => {
            console.log('OKOk');
            this.scrollPx = window.scrollY;
        });
        console.log(this.scrollPx);
    },
    // components: { Subtitle }
};
  </script>
  
  <style>
  .fixedNav {
    position: sticky;
    top: 5.6rem;
    left: 0;
    animation: smoothScroll 0.8s forwards;
  }
  @keyframes smoothScroll {
    0% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .fixedNavReverse {
    position: relative;
    animation: smoothScrollReverse 0.8s forwards;
  }
  @keyframes smoothScrollReverse {
    from {
      transform: translateY(40px);
    }
    to {
      transform: translateY(0px);
    }
  }
  </style>
  <style>
    #researchBg {
  background: linear-gradient(
    180deg,
    rgba(17, 193, 224, 0.2) 0%,
    rgba(11, 224, 224, 0.2) 100%
  );
  background-image: url("https://res.cloudinary.com/binarycode/image/upload/v1664775131/Vatsalya/Website/lander_image_lhivzi.png");
  background-size: cover;
  padding: auto;
  min-height: 100vh;
}
  </style>