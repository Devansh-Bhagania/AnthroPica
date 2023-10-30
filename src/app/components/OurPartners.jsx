import Image from "next/image";
import React from "react";

const OurPartners = () => {
  return (
    <>
      <div className="h-[300px] bg-white  flex flex-col gap-10">
        <div className="text-6xl mx-auto text-center p-5 pt-20">
          <h1>Our Partners</h1>
        </div>

        <div className="flex flex-row mx-auto px-10 gap-36">

            {/* quora */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="117"
              height="32"
              viewBox="0 0 117 32"
              fill="none"
            >
              <g clip-path="url(#clip0_445_12937)">
                <path
                  d="M14.0939 0C21.4296 0 28.361 5.71841 28.361 14.0361C28.361 18.7148 26.1661 22.5271 23.0469 25.0686C23.9711 26.5704 25.1264 27.6101 26.5126 27.6101C28.13 27.6101 28.8231 26.3393 28.9386 25.2996H31.0181C31.1336 26.6859 30.4404 32 24.6643 32C21.083 32 19.2347 29.9206 17.8484 27.6101C16.6931 27.8412 15.4224 28.0722 14.1516 28.0722C7.04693 28.0722 0 22.3538 0 14.0361C0 5.71841 7.04693 0 14.0939 0ZM65.9061 6.29603C71.7978 6.29603 76.5343 10.4549 76.5921 16.6354C76.5921 23.1625 71.7978 27.4368 65.9061 27.4368C60.1877 27.4368 55.2202 23.1047 55.2202 16.6354C55.2202 10.3393 60.13 6.29603 65.9061 6.29603ZM104.78 6.29603C109.978 6.29603 113.213 7.68231 113.213 12.8809V21.7762C113.213 23.1625 113.675 23.8556 114.83 23.8556C115.408 23.8556 115.87 23.6245 116.101 23.509L116.621 24.5487C116.159 25.3574 114.657 26.8592 111.884 26.8592C109.458 26.8592 107.957 25.704 107.726 23.8556H107.61C106.455 25.935 104.375 27.3213 101.372 27.3213C97.7906 27.3213 95.5957 25.4729 95.5957 22.1227C95.5957 15.5379 104.78 17.3863 107.437 12.9964V11.9567C107.437 8.83754 106.166 8.1444 104.78 8.1444C100.621 8.1444 102.469 12.9964 98.7726 12.9964C96.9242 12.9964 96.2311 11.9567 96.2311 10.6859C96.2311 8.25993 99.2347 6.29603 104.78 6.29603ZM39.0469 6.75812V20.2744C39.0469 22.8159 40.3177 23.9711 42.1661 23.9711C43.6679 23.9711 45.2852 23.278 46.0939 21.6606V10.4549C46.0939 9.29964 45.7473 8.83754 44.4765 8.83754H43.0903V6.75812H51.87V21.6029C51.87 22.9892 52.3321 23.6823 53.9495 23.6823H54.1805V25.8773L46.3249 27.148V24.2022H46.2094C44.7076 26.1083 42.5126 27.2635 39.6245 27.2635C36.0433 27.2635 33.3863 25.4152 33.3863 20.4477V10.4549C33.3863 9.29964 32.9242 8.83754 31.6534 8.83754H30.3827V6.75812H39.0469ZM91.2058 6.41155C93.0542 6.41155 94.556 7.45126 94.556 9.53069C94.556 11.0325 93.8628 12.5343 91.7834 12.5343C90.0505 12.5343 89.704 10.917 88.2022 10.917C86.9314 10.917 85.8917 12.1877 85.8917 14.0361V22.2383C85.8917 24.0866 86.3538 24.6643 88.4332 24.6643H89.5885V26.8592H77.1119V24.722H77.9206C80 24.722 80.231 24.1444 80.231 22.296V10.4549C80.231 9.29964 79.6534 8.83754 78.3827 8.83754H77.2274V6.75812H85.1986L85.5451 10.917H85.7762C86.5848 7.91336 89.0108 6.41155 91.2058 6.41155ZM14.1516 2.25271C8.83755 2.25271 6.52708 6.23827 6.52708 13.9783C6.52708 21.7184 8.83755 25.704 14.1516 25.704C15.1336 25.704 16 25.4729 16.6931 25.2419C15.6534 22.8159 14.2671 20.5054 11.6101 20.5054C11.148 20.5054 10.6859 20.6209 10.2238 20.852L9.41516 19.2347C10.5704 18.2527 12.13 17.5018 14.2671 17.5018C17.6173 17.5018 19.3502 19.1191 20.7365 21.1986C21.5451 19.4657 21.8917 17.0397 21.8917 13.9783C21.8917 6.23827 19.5812 2.25271 14.1516 2.25271ZM65.9061 8.25993C63.1336 8.25993 61.5162 11.0325 61.5162 16.5776C61.5162 22.2383 63.1336 25.1264 65.9061 25.1264C68.9098 25.1264 70.065 22.2383 70.1805 16.5776C70.296 11.0903 68.9098 8.25993 65.9061 8.25993ZM107.379 15.4224C105.531 17.444 101.256 17.7328 101.256 21.4296C101.256 23.278 102.412 24.3177 103.913 24.3177C106.455 24.3177 107.379 22.1227 107.379 19.6967V15.4224Z"
                  fill="#B92B27"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_445_12937">
                  <rect width="116.621" height="32" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>


          {/* notion  */}

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="116"
              height="40"
              viewBox="0 0 116 40"
              fill="none"
            >
              <g clip-path="url(#clip0_445_12943)">
                <path
                  d="M2.73183 1.72529L24.8405 0.06395C27.5242 -0.191641 28.227 5.22435e-05 29.9523 1.21411L37.0449 6.19814C38.1951 7.02881 38.5785 7.2844 38.5785 8.24286V35.5272C38.5785 37.2524 37.9395 38.2748 35.767 38.4026L10.0801 39.9362C8.41873 40.0001 7.65195 39.8084 6.82128 38.7221L1.64556 32.0128C0.687097 30.7349 0.303711 29.8403 0.303711 28.754V4.4729C0.303711 3.06714 0.942689 1.85309 2.73183 1.72529Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.8405 0.06395L2.73183 1.72529C0.942689 1.85309 0.303711 3.06714 0.303711 4.4729V28.754C0.303711 29.8403 0.687097 30.7988 1.64556 32.0128L6.82128 38.786C7.65195 39.8723 8.48263 40.1278 10.0801 40L35.767 38.4665C37.9395 38.3387 38.5785 37.3163 38.5785 35.5911V8.24286C38.5785 7.34829 38.259 7.0927 37.1727 6.32593C37.1088 6.26203 37.0449 6.26203 36.981 6.19814L29.9523 1.27801C28.2909 5.22435e-05 27.5881 -0.127743 24.8405 0.06395ZM10.6551 7.79558C8.54652 7.92337 8.09924 7.98727 6.88518 6.96491L3.88199 4.60069C3.5625 4.2812 3.69029 3.89782 4.52096 3.83392L25.7989 2.30037C27.5881 2.17258 28.4826 2.74766 29.1855 3.32274L32.8277 5.94254C33.0194 6.00644 33.4028 6.45373 32.8916 6.45373L10.9107 7.79558H10.6551ZM8.22703 35.3355V12.1406C8.22703 11.1183 8.54652 10.671 9.44109 10.6071L34.6807 9.13743C35.5114 9.07353 35.8948 9.58472 35.8948 10.6071V33.6103C35.8948 34.6326 35.7031 35.4633 34.3612 35.5272L10.2079 36.933C8.86601 37.0608 8.22703 36.5496 8.22703 35.3355ZM32.0609 13.4186C32.1887 14.1215 32.0609 14.8243 31.358 14.8882L30.2079 15.1438V32.2684C29.1855 32.8435 28.2909 33.0991 27.5242 33.0991C26.3101 33.0991 25.9906 32.7157 25.0321 31.5655L17.3644 19.5528V31.1183L19.7925 31.6933C19.7925 31.6933 19.7925 33.0991 17.8756 33.0991L12.5082 33.4186C12.3804 33.0991 12.5082 32.3323 13.0194 32.2045L14.4251 31.8211V16.4857L12.5082 16.294C12.3804 15.5911 12.7638 14.5687 13.85 14.5048L19.6008 14.1215L27.5242 26.262V15.5272L25.4794 15.2716C25.3516 14.4409 25.9267 13.802 26.6935 13.7381L32.0609 13.4186Z"
                  fill="black"
                ></path>
                <path
                  d="M55.5753 28.3707V17.8275H55.767L63.3708 28.3707H65.7989V12.8435H63.1152V23.3866H62.9235L55.3197 12.8435H52.8916V28.3707H55.5753ZM73.275 28.5624C76.7893 28.5624 78.898 26.262 78.898 22.4282C78.898 18.6582 76.7254 16.294 73.275 16.294C69.7606 16.294 67.652 18.5943 67.652 22.4282C67.5881 26.262 69.7606 28.5624 73.275 28.5624ZM73.275 26.3259C71.4219 26.3259 70.3357 24.9202 70.3357 22.4282C70.3357 20.0001 71.4219 18.5304 73.275 18.5304C75.128 18.5304 76.2143 19.9362 76.2143 22.4282C76.1504 24.9202 75.128 26.3259 73.275 26.3259ZM81.3261 13.7381V16.6774H79.473V18.786H81.3261V25.1758C81.3261 27.4761 82.4123 28.3707 85.096 28.3707C85.6072 28.3707 86.1184 28.3068 86.5018 28.2429V26.1981C86.1823 26.262 85.9906 26.262 85.6072 26.262C84.521 26.262 84.0098 25.7509 84.0098 24.6007V18.8499H86.5018V16.7413H84.0098V13.802H81.3261V13.7381ZM88.0992 28.3707H90.783V16.6135H88.0992V28.3707ZM89.4411 14.6326C90.3357 14.6326 91.0385 13.9298 91.0385 13.0352C91.0385 12.1406 90.3357 11.4378 89.4411 11.4378C88.5465 11.4378 87.8437 12.1406 87.8437 13.0352C87.8437 13.9298 88.5465 14.6326 89.4411 14.6326ZM98.0673 28.5624C101.582 28.5624 103.69 26.262 103.69 22.4282C103.69 18.6582 101.518 16.294 98.0673 16.294C94.5529 16.294 92.4443 18.5943 92.4443 22.4282C92.3804 26.262 94.5529 28.5624 98.0673 28.5624ZM98.0673 26.3259C96.2143 26.3259 95.128 24.9202 95.128 22.4282C95.128 20.0001 96.2143 18.5304 98.0673 18.5304C99.9203 18.5304 101.007 19.9362 101.007 22.4282C100.943 24.9202 99.9203 26.3259 98.0673 26.3259ZM105.288 28.3707H107.971V21.4697C107.971 19.7445 108.994 18.6582 110.527 18.6582C112.125 18.6582 112.892 19.5528 112.892 21.3419V28.3068H115.575V20.7029C115.575 17.8914 114.17 16.294 111.55 16.294C109.824 16.294 108.61 17.1247 108.035 18.4026H107.844V16.6135H105.288V28.3707Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_445_12943">
                  <rect
                    width="115.272"
                    height="40"
                    fill="white"
                    transform="translate(0.303711)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>


        {/* slack */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="32"
              viewBox="0 0 128 32"
              fill="none"
            >
              <path
                d="M41.1852 25.1975L42.7648 21.5287C44.4718 22.8025 46.7393 23.465 48.9813 23.465C50.6374 23.465 51.682 22.828 51.682 21.8599C51.6565 19.1592 41.7711 21.2739 41.6947 14.4968C41.6692 11.0573 44.7266 8.40764 49.0578 8.40764C51.631 8.40764 54.2043 9.04459 56.0387 10.4968L54.561 14.242C52.8794 13.172 50.7903 12.4076 48.803 12.4076C47.4527 12.4076 46.561 13.0446 46.561 13.8599C46.5864 16.5096 56.5482 15.0573 56.6501 21.5287C56.6501 25.0446 53.6692 27.5159 49.389 27.5159C46.2552 27.5159 43.3762 26.7771 41.1852 25.1975Z"
                fill="black"
              ></path>
              <path
                d="M101.797 20.2038C101.007 21.5796 99.5291 22.5223 97.8221 22.5223C95.2998 22.5223 93.2616 20.4841 93.2616 17.9618C93.2616 15.4395 95.2998 13.4013 97.8221 13.4013C99.5291 13.4013 101.007 14.344 101.797 15.7197L106.153 13.2994C104.523 10.3949 101.389 8.40764 97.8221 8.40764C92.5482 8.40764 88.268 12.6879 88.268 17.9618C88.268 23.2357 92.5482 27.5159 97.8221 27.5159C101.414 27.5159 104.523 25.5541 106.153 22.6242L101.797 20.2038Z"
                fill="black"
              ></path>
              <path
                d="M64.2934 0.484077H58.8412V27.1592H64.2934V0.484077Z"
                fill="black"
              ></path>
              <path
                d="M108.293 0.484077V27.1592H113.746V19.1592L120.217 27.1592H127.198L118.969 17.656L126.586 8.78981H119.911L113.746 16.1529V0.484077H108.293Z"
                fill="black"
              ></path>
              <path
                d="M80.4973 20.2548C79.7075 21.5541 78.0769 22.5223 76.2425 22.5223C73.7202 22.5223 71.682 20.4841 71.682 17.9618C71.682 15.4395 73.7202 13.4013 76.2425 13.4013C78.0769 13.4013 79.7075 14.4204 80.4973 15.7452V20.2548ZM80.4973 8.78981V10.9554C79.6055 9.45223 77.389 8.40764 75.0705 8.40764C70.2807 8.40764 66.51 12.6369 66.51 17.9363C66.51 23.2357 70.2807 27.5159 75.0705 27.5159C77.389 27.5159 79.6055 26.4713 80.4973 24.9682V27.1338H85.9495V8.78981H80.4973Z"
                fill="black"
              ></path>
              <path
                d="M7.47815 20.2293C7.47815 22.0892 5.97497 23.5924 4.1151 23.5924C2.25522 23.5924 0.75204 22.0892 0.75204 20.2293C0.75204 18.3694 2.25522 16.8662 4.1151 16.8662H7.47815V20.2293Z"
                fill="#E01E5A"
              ></path>
              <path
                d="M9.15968 20.2293C9.15968 18.3694 10.6629 16.8662 12.5227 16.8662C14.3826 16.8662 15.8858 18.3694 15.8858 20.2293V28.6369C15.8858 30.4968 14.3826 32 12.5227 32C10.6629 32 9.15968 30.4968 9.15968 28.6369V20.2293Z"
                fill="#E01E5A"
              ></path>
              <path
                d="M12.5227 6.72612C10.6629 6.72612 9.15968 5.22293 9.15968 3.36306C9.15968 1.50319 10.6629 0 12.5227 0C14.3826 0 15.8858 1.50319 15.8858 3.36306V6.72612H12.5227Z"
                fill="#36C5F0"
              ></path>
              <path
                d="M12.5227 8.43312C14.3826 8.43312 15.8858 9.93631 15.8858 11.7962C15.8858 13.6561 14.3826 15.1592 12.5227 15.1592H4.08962C2.22975 15.1592 0.726562 13.6561 0.726562 11.7962C0.726562 9.93631 2.22975 8.43312 4.08962 8.43312H12.5227Z"
                fill="#36C5F0"
              ></path>
              <path
                d="M26.0004 11.7962C26.0004 9.93631 27.5036 8.43312 29.3635 8.43312C31.2234 8.43312 32.7266 9.93631 32.7266 11.7962C32.7266 13.6561 31.2234 15.1592 29.3635 15.1592H26.0004V11.7962Z"
                fill="#2EB67D"
              ></path>
              <path
                d="M24.3189 11.7962C24.3189 13.6561 22.8157 15.1592 20.9559 15.1592C19.096 15.1592 17.5928 13.6561 17.5928 11.7962V3.36306C17.5928 1.50319 19.096 0 20.9559 0C22.8157 0 24.3189 1.50319 24.3189 3.36306V11.7962Z"
                fill="#2EB67D"
              ></path>
              <path
                d="M20.9559 25.2739C22.8157 25.2739 24.3189 26.7771 24.3189 28.6369C24.3189 30.4968 22.8157 32 20.9559 32C19.096 32 17.5928 30.4968 17.5928 28.6369V25.2739H20.9559Z"
                fill="#ECB22E"
              ></path>
              <path
                d="M20.9559 23.5924C19.096 23.5924 17.5928 22.0892 17.5928 20.2293C17.5928 18.3694 19.096 16.8662 20.9559 16.8662H29.389C31.2489 16.8662 32.752 18.3694 32.752 20.2293C32.752 22.0892 31.2489 23.5924 29.389 23.5924H20.9559Z"
                fill="#ECB22E"
              ></path>
            </svg>
          </div>
        

        {/* zoom */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="107" height="24" viewBox="0 0 107 24" fill="none">
  <g clip-path="url(#clip0_593_13098)">
    <path d="M22.8345 23.6308H4.0499C2.80374 23.6308 1.64989 22.9846 1.04989 21.8769C0.403741 20.5846 0.63451 19.0615 1.64989 18.0923L14.7114 5.03077H5.3422C2.75759 5.03077 0.680664 2.90769 0.680664 0.369231H17.9884C19.2345 0.369231 20.3884 1.01538 20.9884 2.12308C21.6345 3.41538 21.4037 4.93846 20.3884 5.90769L7.32682 18.9692H18.173C20.7576 18.9692 22.8345 21.0923 22.8345 23.6308ZM97.2345 0C94.5576 0 92.1114 1.15385 90.4499 3.04615C88.7884 1.2 86.3422 0 83.6653 0C78.6807 0 74.573 4.24615 74.573 9.23077V23.6308C77.1576 23.6308 79.2345 21.5538 79.2345 18.9692V9.18462C79.2345 6.78462 81.0807 4.75385 83.4807 4.66154C86.0191 4.56923 88.0961 6.6 88.0961 9.09231V18.9692C88.0961 21.5538 90.173 23.6308 92.7576 23.6308V9.18462C92.7576 6.78462 94.6038 4.75385 97.0038 4.66154C99.5422 4.56923 101.619 6.6 101.619 9.09231V18.9692C101.619 21.5538 103.696 23.6308 106.281 23.6308V9.23077C106.327 4.24615 102.219 0 97.2345 0ZM46.373 12C46.373 18.6 40.973 24 34.373 24C27.7268 24 22.373 18.6 22.373 12C22.373 5.4 27.773 0 34.373 0C40.973 0 46.373 5.4 46.373 12ZM41.7114 12C41.7114 7.93846 38.4345 4.66154 34.373 4.66154C30.3114 4.66154 27.0345 7.93846 27.0345 12C27.0345 16.0615 30.3114 19.3385 34.373 19.3385C38.4345 19.3385 41.7114 16.0615 41.7114 12ZM72.2653 12C72.2653 18.6 66.8653 24 60.2653 24C53.6191 24 48.2653 18.6 48.2653 12C48.2653 5.4 53.6653 0 60.2653 0C66.8653 0 72.2653 5.4 72.2653 12ZM67.6038 12C67.6038 7.93846 64.3268 4.66154 60.2653 4.66154C56.2038 4.66154 52.9268 7.93846 52.9268 12C52.9268 16.0615 56.2038 19.3385 60.2653 19.3385C64.3268 19.3385 67.6038 16.0615 67.6038 12Z" fill="#0B5CFF"></path>
  </g>
  <defs>
    <clipPath id="clip0_593_13098">
      <rect width="105.646" height="24" fill="white" transform="translate(0.680664)"></rect>
    </clipPath>
  </defs>
</svg>
        </div>


        {/* googleassembly ai  */}

            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="172" height="32" viewBox="0 0 172 32" fill="none">
  <g clip-path="url(#clip0_445_12947)">
    <path d="M46.3784 22.7027C46.2703 22.7027 46.1082 22.6487 46.0001 22.5406C45.8919 22.4325 45.8379 22.3244 45.8379 22.1622C45.8379 22.0541 45.8379 22 45.8379 21.946L51.4595 6.59463C51.5136 6.37842 51.6217 6.27031 51.7838 6.10815C51.946 5.94599 52.1622 5.89193 52.4325 5.89193H56C56.2703 5.89193 56.4865 5.94599 56.6487 6.10815C56.8109 6.21626 56.919 6.37842 56.973 6.59463L62.5946 21.946L62.6487 22.1622C62.6487 22.2703 62.5946 22.4325 62.4865 22.5406C62.3784 22.6487 62.2703 22.7027 62.1082 22.7027H59.1352C58.7568 22.7027 58.4865 22.5406 58.3784 22.2163L57.4595 19.7838H51.0271L50.1082 22.2163C50 22.5406 49.7298 22.7027 49.2973 22.7027H46.3784ZM56.4865 16.3244L54.2703 10L52.0541 16.3244H56.4865Z" fill="#09032F"></path>
    <path d="M68 22.973C66.7028 22.973 65.6217 22.8108 64.7568 22.4325C63.8919 22.0541 63.2433 21.6217 62.8649 21.1352C62.4325 20.6487 62.2163 20.1622 62.2163 19.7838C62.2163 19.6217 62.2703 19.5136 62.3784 19.4054C62.4865 19.2973 62.6487 19.2433 62.8109 19.2433H65.5676C65.6757 19.2433 65.7298 19.2973 65.8379 19.3514C66.0541 19.4595 66.1622 19.5676 66.2703 19.6757C66.5946 19.946 66.919 20.1081 67.1892 20.2703C67.4595 20.3784 67.7838 20.4325 68.1622 20.4325C68.6487 20.4325 69.0271 20.3244 69.2973 20.1622C69.6217 19.946 69.7298 19.7298 69.7298 19.3514C69.7298 19.0811 69.6757 18.8649 69.5136 18.7027C69.3514 18.5406 69.0811 18.3784 68.6487 18.2703C68.2163 18.1081 67.5676 17.946 66.7028 17.7838C65.3514 17.5136 64.3784 17.0811 63.6217 16.4865C62.919 15.8379 62.5946 15.0271 62.5946 14C62.5946 13.3514 62.8109 12.7027 63.2433 12.1081C63.6757 11.5136 64.2703 11.0271 65.0811 10.6487C65.8919 10.2703 66.919 10.1081 68 10.1081C69.1352 10.1081 70.1082 10.2703 70.973 10.6487C71.8379 10.973 72.4325 11.4054 72.8649 11.946C73.2973 12.4325 73.5136 12.919 73.5136 13.2973C73.5136 13.4595 73.4595 13.5676 73.3514 13.6757C73.2433 13.7838 73.1352 13.8379 72.973 13.8379H70.4865C70.3784 13.8379 70.2163 13.7838 70.1082 13.7298C69.8919 13.6217 69.7298 13.5136 69.5676 13.3514C69.2973 13.1352 69.0271 12.973 68.8109 12.8649C68.5946 12.7568 68.2703 12.7027 67.946 12.7027C67.5136 12.7027 67.1892 12.8108 66.919 12.973C66.7028 13.1892 66.5406 13.4054 66.5406 13.7298C66.5406 13.946 66.5946 14.1622 66.7568 14.3244C66.919 14.4865 67.1892 14.6487 67.6217 14.8109C68.0541 14.973 68.7028 15.0811 69.5676 15.2433C71.1352 15.5136 72.2163 16 72.919 16.7027C73.6217 17.4054 74.0001 18.2163 74.0001 19.1352C74.0001 20.3244 73.4595 21.2433 72.4325 22C71.3514 22.5946 69.8919 22.973 68 22.973Z" fill="#09032F"></path>
    <path d="M79.946 22.973C78.6487 22.973 77.5676 22.8108 76.7028 22.4325C75.8379 22.0541 75.1892 21.6217 74.8109 21.1352C74.3784 20.6487 74.1622 20.1622 74.1622 19.7838C74.1622 19.6217 74.2163 19.5136 74.3244 19.4054C74.4325 19.2973 74.5946 19.2433 74.7568 19.2433H77.5136C77.6217 19.2433 77.6757 19.2973 77.7838 19.3514C78 19.4595 78.1082 19.5676 78.2163 19.6757C78.5406 19.946 78.8649 20.1081 79.1352 20.2703C79.4055 20.3784 79.7298 20.4325 80.1081 20.4325C80.5946 20.4325 80.973 20.3244 81.2433 20.1622C81.5676 19.946 81.6757 19.7298 81.6757 19.3514C81.6757 19.0811 81.6217 18.8649 81.4595 18.7027C81.2973 18.5406 81.0271 18.3784 80.5946 18.2703C80.1622 18.1081 79.5136 17.946 78.6487 17.7838C77.2973 17.5136 76.3244 17.0811 75.5676 16.4865C74.8649 15.8379 74.5406 15.0271 74.5406 14C74.5406 13.3514 74.7568 12.7027 75.1892 12.1081C75.6217 11.5136 76.2163 11.0271 77.0271 10.6487C77.8379 10.2703 78.8649 10.1081 79.946 10.1081C81.0811 10.1081 82.0541 10.2703 82.919 10.6487C83.7838 10.973 84.3784 11.4054 84.8109 11.946C85.2433 12.4325 85.4595 12.919 85.4595 13.2973C85.4595 13.4595 85.4054 13.5676 85.2973 13.6757C85.1892 13.7838 85.0811 13.8379 84.919 13.8379H82.4325C82.3244 13.8379 82.1622 13.7838 82.0541 13.7298C81.8379 13.6217 81.6757 13.5136 81.5136 13.3514C81.2433 13.1352 80.973 12.973 80.7568 12.8649C80.5406 12.7568 80.2163 12.7027 79.8919 12.7027C79.4595 12.7027 79.1352 12.8108 78.8649 12.973C78.6487 13.1892 78.4865 13.4054 78.4865 13.7298C78.4865 13.946 78.5406 14.1622 78.7028 14.3244C78.8649 14.4865 79.1352 14.6487 79.5676 14.8109C80 14.973 80.6487 15.0811 81.5136 15.2433C83.0811 15.5136 84.1622 16 84.8649 16.7027C85.5676 17.4054 85.946 18.2163 85.946 19.1352C85.946 20.3244 85.4054 21.2433 84.3784 22C83.2973 22.5946 81.8379 22.973 79.946 22.973Z" fill="#09032F"></path>
    <path d="M92.4865 22.973C90.5946 22.973 89.0811 22.4325 87.946 21.4054C86.8649 20.3784 86.2703 18.8649 86.2163 16.8649V16C86.2703 14.1081 86.8649 12.6487 87.946 11.5676C89.0811 10.4865 90.5406 9.94599 92.4325 9.94599C93.7838 9.94599 94.919 10.2163 95.8379 10.8109C96.7568 11.3514 97.4595 12.1081 97.946 13.0811C98.4325 14.0541 98.6487 15.1352 98.6487 16.3784V16.973C98.6487 17.1352 98.5946 17.2973 98.4865 17.4054C98.3784 17.5136 98.2163 17.5676 98.0541 17.5676H90.3784V17.7298C90.4325 18.4865 90.5946 19.0811 90.919 19.5676C91.2433 20.0541 91.7298 20.2703 92.3784 20.2703C92.7568 20.2703 93.0811 20.2163 93.3514 20.0541C93.6217 19.8919 93.8379 19.6757 94.0541 19.4054C94.2163 19.2433 94.3244 19.1352 94.3784 19.0811C94.4865 19.0271 94.5946 19.0271 94.8109 19.0271H97.7838C97.946 19.0271 98.0541 19.0811 98.1622 19.1892C98.2703 19.2433 98.3244 19.4054 98.3244 19.5136C98.3244 19.946 98.1082 20.4325 97.6217 20.973C97.1352 21.5136 96.4865 22 95.5676 22.3784C94.7027 22.7568 93.6757 22.973 92.4865 22.973ZM94.4865 15.1892C94.4865 14.3784 94.3244 13.7298 93.946 13.2973C93.6217 12.8109 93.0811 12.5946 92.4865 12.5946C91.8379 12.5946 91.3514 12.8109 91.0271 13.2973C90.7028 13.7298 90.4865 14.3784 90.4865 15.1352V15.1892H94.4865Z" fill="#09032F"></path>
    <path d="M100.216 22.7027C100.054 22.7027 99.8919 22.6487 99.7838 22.5406C99.6757 22.4325 99.6217 22.2703 99.6217 22.1081V10.8649C99.6217 10.7027 99.6757 10.5406 99.7838 10.4325C99.8919 10.3244 100.054 10.2703 100.216 10.2703H102.811C102.973 10.2703 103.135 10.3244 103.243 10.4325C103.351 10.5406 103.405 10.7027 103.405 10.8649V11.6757C103.784 11.1892 104.27 10.8108 104.865 10.4865C105.514 10.1622 106.162 10 106.973 10C108.703 10 109.946 10.7027 110.595 12.0541C110.973 11.4595 111.514 10.973 112.216 10.5946C112.919 10.2163 113.622 10 114.432 10C115.73 10 116.811 10.4325 117.622 11.3514C118.432 12.2163 118.865 13.5676 118.865 15.2973V22.1081C118.865 22.2703 118.811 22.4325 118.703 22.5406C118.595 22.6487 118.432 22.7027 118.27 22.7027H115.514C115.351 22.7027 115.189 22.6487 115.081 22.5406C114.973 22.4325 114.919 22.2703 114.919 22.1081V15.4595C114.919 14.6487 114.757 14.1081 114.432 13.7298C114.108 13.4054 113.676 13.1892 113.135 13.1892C112.649 13.1892 112.216 13.3514 111.892 13.7298C111.568 14.0541 111.405 14.6487 111.405 15.4054V22.0541C111.405 22.2163 111.351 22.3784 111.243 22.4865C111.135 22.5946 110.973 22.6487 110.811 22.6487H108.054C107.892 22.6487 107.73 22.5946 107.622 22.4865C107.514 22.3784 107.46 22.2163 107.46 22.0541V15.4595C107.46 14.7027 107.297 14.1081 106.919 13.7838C106.595 13.4054 106.162 13.2433 105.622 13.2433C105.135 13.2433 104.703 13.4054 104.324 13.7838C104 14.1081 103.838 14.7027 103.838 15.4595V22.1081C103.838 22.2703 103.784 22.4325 103.676 22.5406C103.568 22.6487 103.405 22.7027 103.243 22.7027H100.216Z" fill="#09032F"></path>
    <path d="M127.838 22.973C126.216 22.973 125.027 22.4325 124.108 21.3514V22.1081C124.108 22.2703 124.054 22.4325 123.946 22.5406C123.838 22.6487 123.676 22.7027 123.514 22.7027H120.811C120.649 22.7027 120.487 22.6487 120.378 22.5406C120.27 22.4325 120.216 22.2703 120.216 22.1081V6.32436C120.216 6.1622 120.27 6.00004 120.378 5.89193C120.487 5.78382 120.649 5.72977 120.811 5.72977H123.73C123.892 5.72977 124.054 5.78382 124.162 5.89193C124.27 6.00004 124.324 6.1622 124.324 6.32436V11.4595C125.243 10.5406 126.378 10.0541 127.838 10.0541C129.405 10.0541 130.595 10.5406 131.514 11.5676C132.432 12.5946 132.865 13.946 132.973 15.6757C132.973 15.8919 132.973 16.1622 132.973 16.5406C132.973 16.8649 132.973 17.1892 132.973 17.4054C132.919 19.1892 132.432 20.5946 131.514 21.5676C130.595 22.4865 129.405 22.973 127.838 22.973ZM126.541 19.7298C127.297 19.7298 127.838 19.5136 128.162 19.0811C128.487 18.6487 128.703 18 128.757 17.2433C128.811 16.919 128.811 16.7027 128.811 16.4865C128.811 16.3244 128.811 16.0541 128.757 15.7298C128.703 14.973 128.541 14.3244 128.162 13.8919C127.838 13.4595 127.297 13.2433 126.541 13.2433C125.838 13.2433 125.297 13.4595 124.919 13.8919C124.541 14.3244 124.378 14.8649 124.324 15.5136V17.2973C124.378 18 124.541 18.5946 124.919 19.0811C125.243 19.5136 125.784 19.7298 126.541 19.7298Z" fill="#09032F"></path>
    <path d="M134.595 22.7027C134.432 22.7027 134.27 22.6487 134.162 22.5406C134.054 22.4325 134 22.2703 134 22.1081V6.32436C134 6.1622 134.054 6.00004 134.162 5.89193C134.27 5.78382 134.432 5.72977 134.595 5.72977H137.405C137.568 5.72977 137.73 5.78382 137.838 5.89193C137.946 6.00004 138 6.1622 138 6.32436V22.1081C138 22.2703 137.946 22.4325 137.838 22.5406C137.73 22.6487 137.568 22.7027 137.405 22.7027H134.595Z" fill="#09032F"></path>
    <path d="M141.838 27.2433C141.676 27.2433 141.568 27.1892 141.459 27.0811C141.351 26.973 141.297 26.8649 141.297 26.7027C141.297 26.5946 141.297 26.4865 141.351 26.3784L143.243 21.8919L138.649 11.0271C138.595 10.919 138.595 10.8109 138.595 10.7568C138.649 10.5946 138.703 10.4865 138.811 10.3784C138.919 10.2703 139.027 10.2163 139.189 10.2163H141.946C142.27 10.2163 142.487 10.3784 142.649 10.7027L145.405 17.6757L148.216 10.7027C148.378 10.3784 148.595 10.2163 148.919 10.2163H151.622C151.784 10.2163 151.892 10.2703 152 10.3784C152.108 10.4865 152.162 10.5946 152.162 10.7027C152.162 10.7568 152.162 10.8649 152.108 11.0271L145.351 26.7027C145.243 27.0271 144.973 27.1892 144.649 27.1892H141.838V27.2433Z" fill="#09032F"></path>
    <path d="M150.811 22.7027C150.703 22.7027 150.541 22.6487 150.432 22.5406C150.324 22.4325 150.27 22.3244 150.27 22.1622C150.27 22.0541 150.27 22 150.27 21.946L155.892 6.59463C155.946 6.37842 156.054 6.27031 156.216 6.10815C156.378 6.00004 156.595 5.89193 156.865 5.89193H160.432C160.703 5.89193 160.919 5.94599 161.081 6.10815C161.243 6.27031 161.351 6.37842 161.405 6.59463L167.027 21.946L167.081 22.1622C167.081 22.2703 167.027 22.4325 166.919 22.5406C166.811 22.6487 166.703 22.7027 166.541 22.7027H163.568C163.189 22.7027 162.919 22.5406 162.811 22.2163L161.892 19.7838H155.514L154.595 22.2163C154.487 22.5406 154.216 22.7027 153.784 22.7027H150.811ZM160.919 16.3244L158.703 10L156.487 16.3244H160.919Z" fill="#09032F"></path>
    <path d="M168.162 22.7027C168 22.7027 167.838 22.6487 167.73 22.5406C167.622 22.4325 167.568 22.2703 167.568 22.1081V6.54058C167.568 6.37842 167.622 6.21626 167.73 6.10815C167.838 6.00004 168 5.94599 168.162 5.94599H171.351C171.514 5.94599 171.676 6.00004 171.784 6.10815C171.892 6.21626 172 6.37842 172 6.54058V22.1081C172 22.2703 171.946 22.4325 171.784 22.5406C171.676 22.6487 171.514 22.7027 171.351 22.7027H168.162Z" fill="#09032F"></path>
    <path d="M3.67577 20.5406L0.973067 26.973C0.21631 28.7568 0.0541484 30.8109 2.00009 31.5676C2.48658 31.7298 2.91901 31.8379 3.4055 31.8379C4.86496 31.8379 6.32442 30.973 6.86496 29.6217L7.4055 28.3244L11.6217 18.3784L15.8379 8.48653C16.865 6.7568 17.4596 4.05409 21.4055 2.59463C18.3244 2.1622 12.1623 1.35139 12.1082 1.35139C12.0541 1.40545 11.6758 2.05409 11.6217 2.10815C11.5136 2.27031 11.4596 2.37842 11.4055 2.54058L3.67577 20.5406C3.72982 20.4865 3.67577 20.4865 3.67577 20.5406Z" fill="url(#paint0_radial_445_12947)"></path>
    <path d="M31.0812 20.5406L33.8379 26.973C34.5947 28.7568 34.7568 30.8109 32.8109 31.5676C32.3244 31.7298 31.892 31.8379 31.4055 31.8379C29.946 31.8379 28.4866 30.973 27.946 29.6217L27.4055 28.3244L23.1352 18.3784L18.919 8.48653C17.892 6.7568 16.2163 3.08112 11.7298 1.94599C12.3244 0.594634 14.2704 0.378418 15.7839 0.378418H20.0001C20.1623 0.378418 20.3244 0.378418 20.4866 0.432472C20.5947 0.432472 20.6487 0.432472 20.7568 0.486526C20.865 0.486526 20.9731 0.54058 21.0812 0.594634C21.1893 0.648688 21.3514 0.648688 21.4595 0.702742C21.5136 0.702742 21.5677 0.756796 21.6217 0.756796C21.7839 0.81085 21.946 0.918958 22.1082 0.973013C22.2163 1.02707 22.3244 1.13517 22.3785 1.18923C22.4866 1.24328 22.5406 1.29734 22.6487 1.40544C22.7028 1.4595 22.8109 1.56761 22.865 1.62166C22.9731 1.72977 23.0271 1.78382 23.1352 1.89193C23.1893 1.94599 23.1893 2.05409 23.2433 2.10815C23.3514 2.27031 23.4055 2.37842 23.4595 2.54058L31.0812 20.5406C31.0812 20.4865 31.0812 20.4865 31.0812 20.5406Z" fill="url(#paint1_radial_445_12947)"></path>
  </g>
  <defs>
    <radialGradient id="paint0_radial_445_12947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(106.721 3.8684) rotate(163.002) scale(96.729 52.3714)">
      <stop stop-color="#142167"></stop>
      <stop offset="1" stop-color="#263DB5"></stop>
    </radialGradient>
    <radialGradient id="paint1_radial_445_12947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.1401 7.2583) rotate(132.41) scale(27.514 96.2674)">
      <stop stop-color="#4259D4"></stop>
      <stop offset="1" stop-color="#6A81FC"></stop>
    </radialGradient>
    <clipPath id="clip0_445_12947">
      <rect width="171.568" height="32" fill="white" transform="translate(0.432617)"></rect>
    </clipPath>
  </defs>
</svg>
            </div>
        </div>
      </div>
    </>
  );
};

export default OurPartners;