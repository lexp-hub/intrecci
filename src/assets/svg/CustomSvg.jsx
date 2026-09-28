import React from 'react';

// OpenMoji Black SVGs directly imported from /home/lex/Downloads/openmoji-svg-black
export const SVG_EMOJIS = {
  // Transparent Connections 4-tile logo
  logo: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="7" y="7" width="22" height="22" rx="7" fill="#FACC15" stroke="#EAB308" strokeWidth="2"/>
      <rect x="35" y="7" width="22" height="22" rx="7" fill="#4ADE80" stroke="#22C55E" strokeWidth="2"/>
      <rect x="7" y="35" width="22" height="22" rx="7" fill="#60A5FA" stroke="#3B82F6" strokeWidth="2"/>
      <rect x="35" y="35" width="22" height="22" rx="7" fill="#C084FC" stroke="#A855F7" strokeWidth="2"/>
      <circle cx="32" cy="32" r="6.5" fill="currentColor"/>
      <circle cx="32" cy="32" r="2.8" fill="var(--bg-app, #FAF7F2)"/>
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line-supplement">
    <polyline points="33.2 33.2 48 24 38.8 38.8"/>
  </g>
  <g id="line">
    <circle cx="36" cy="36" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="33.2 33.2 24 48 38.8 38.8"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="33.2 33.2 48 24 38.8 38.8"/>
    <line x1="36" x2="36" y1="21" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <line x1="36" x2="36" y1="56" y2="51" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <line x1="51" x2="56" y1="36" y2="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <line x1="16" x2="21" y1="36" y2="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  pasta: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M10.8667,41.7489a25.1333,25.1333,0,1,0,50.2666,0Z"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M13.4667,39.1489a13.0019,13.0019,0,0,1,25.4778,0"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M17.9362,39.1489a8.6687,8.6687,0,0,1,16.5379,0"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M22.7588,39.1489a4.2946,4.2946,0,0,1,6.8944,0"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M38.6059,30.9156a13.0036,13.0036,0,0,1,19.9274,8.2333"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M41.0206,34.5151a8.6692,8.6692,0,0,1,13.0432,4.6338"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M42.9282,38.5176a4.2871,4.2871,0,0,1,6.313.6313"/>
    <g id="line-2">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M61,15.5946l-19.4123-.554h0c-.7408,1.287-2.6022,2.191-5.5708,2.191-3.9478,0-8.1058-.1115-8.1058-.1115"/>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M27.9113,9.8105s4.158-.1115,8.1058-.1115c2.9609,0,4.82.8993,5.565,2.1809h0L61,11.8605"/>
      <line x1="27.9113" x2="37.4962" y1="13.4654" y2="13.4654" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    </g>
    <line x1="34.8705" x2="34.8705" y1="13.5222" y2="32.0589" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <line x1="30.5371" x2="30.5371" y1="13.5222" y2="25.6827" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="m24,47.4166c-3.6825-3.2959-6-8.0856-6-13.4166h36c0,5.331-2.3175,10.1207-6,13.4166"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4.2" d="m51,45h4.5c3.0376,0,5.5-2.4624,5.5-5.5s-2.4624-5.5-5.5-5.5h-2.5"/>
    <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.2" d="m16.5086,49.9385h41.8588c.69,0,1.0356.8343.5477,1.3222l-3.4059,3.1559c-.3985.3985-.9389.6223-1.5025.6223H20.73c-.661,0-1.2877-.2941-1.7102-.8025l-2.9687-3.3231c-.322-.3875-.0464-.9748.4574-.9748Z"/>
  </g>
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="35.7895 63.9434 35.7895 52.7764 28.1585 45.2604"/>
    <line x1="35.7895" x2="40.1575" y1="52.7764" y2="48.2304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2" d="m63.3745,25.7734c0-5-5.289-9.061-11.813-9.061-.5451.0044-1.0895.0378-1.631.1-2.763-5.216-8.762-8.839-15.738-8.839-9.593,0-17.369,6.836-17.369,15.268.0017.5574.0378,1.1141.108,1.667-4.288,1.359-7.306,4.595-7.306,8.374,0,5,5.289,9.061,11.813,9.061,2.4798.021,4.922-.6072,7.084-1.822,2.791,2.229,7.257,3.681,12.307,3.681,8.461,0,15.32-4.057,15.32-9.061-.0014-.3308-.0329-.6609-.094-.986,4.293-1.36,7.319-4.598,7.319-8.382Z"/>
  </g>
    </svg>
  ),
  book: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M41,56c0,2.7614-2.2386,5-5,5s-5-2.2386-5-5"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M67.0015,56H4.9985C4.447,56,4,55.553,4,55.0015v-38.003C4,16.447,4.447,16,4.9985,16h62.003C67.553,16,68,16.447,68,16.9985 v38.003C68,55.553,67.553,56,67.0015,56z"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M64.0015,51.625H7.9985C7.447,51.625,7,51.178,7,50.6265v-29.253c0-0.5514,0.447-0.9985,0.9985-0.9985h56.003 C64.553,20.375,65,20.822,65,21.3735v29.253C65,51.178,64.553,51.625,64.0015,51.625z"/>
    <line x1="36" x2="36" y1="17" y2="55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="11" x2="31" y1="27" y2="27" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="11" x2="31" y1="33" y2="33" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="11" x2="31" y1="39" y2="39" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="11" x2="31" y1="45" y2="45" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="41" x2="61" y1="27" y2="27" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="41" x2="61" y1="33" y2="33" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="41" x2="61" y1="39" y2="39" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="41" x2="61" y1="45" y2="45" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M20,32l2.1418-11.1605l0.6996,4.1763c0.1122,0.6679,2.3298,13.9055,2.3298,13.9055c0.2615,1.5604,1.6435,2.8154,3.5205,3.1974 L40,44.4198l-11.3161,2.3026c-1.8724,0.381-3.2513,1.6356-3.5127,3.1963L22.1422,68l-3.029-18.0806 c-0.2615-1.5607-1.6405-2.8153-3.5131-3.1964L4.2836,44.4205l11.3171-2.3031C17.4727,41.7362,18.7387,39.5604,19,38"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M42.5556,13.4499l1.5469-8.0604l0.5052,3.0162c0.081,0.4824,1.6827,10.0429,1.6827,10.0429 c0.1889,1.1269,1.1869,2.0334,2.5426,2.3092L57,22.4198l-8.1728,1.663c-1.3523,0.2752-2.3482,1.1812-2.5369,2.3084l-2.1876,13.0587 l-2.1876-13.0582c-0.1889-1.1272-1.1848-2.0333-2.5372-2.3085l-8.173-1.6629l8.1735-1.6634 c1.352-0.2753,2.2663-1.8467,2.455-2.9736"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M53.8482,44.267l1.2335-6.4275l0.4029,2.4052c0.0646,0.3847,1.3418,8.0084,1.3418,8.0084 c0.1506,0.8986,0.9465,1.6215,2.0275,1.8414l6.5126,1.3253l-6.5171,1.3261c-1.0783,0.2194-1.8725,0.9419-2.023,1.8408L55.0819,65 l-1.7445-10.4129c-0.1506-0.8988-0.9448-1.6214-2.0232-1.8409l-6.5174-1.326l6.5177-1.3264 c1.0781-0.2195,1.8072-1.4726,1.9577-2.3712"/>
  </g>
    </svg>
  ),
  lightbulb: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="m52.55,23.75c0,3.985-1.785,5.908-3.754,10.5-.5028,1.172-4.211,13.38-4.211,13.38h-17.17s-2.981-11.67-3.546-12.62c-2.37-3.998-4.419-6.91-4.419-11.26,0-9.141,7.41-16.55,16.55-16.55s16.55,7.41,16.55,16.55Z"/>
    <line x1="36" x2="36" y1="47.22" y2="35.28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <line x1="41.97" x2="30.03" y1="35.28" y2="35.28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="m44.16,58.79c0,3.24-3.651,5.867-8.155,5.867s-8.155-2.627-8.155-5.867h16.31Z"/>
    <line x1="27.99" x2="44.01" y1="54.98" y2="51.51" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <line x1="38.2" x2="43.98" y1="56.07" y2="54.89" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <line x1="28.02" x2="33.8" y1="51.6" y2="50.42" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="14.402 33.524 14.402 19.513 29.628 19.513"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="28 57.882 14.402 57.882 14.402 43.871"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="52.77 43.871 52.77 57.882 38.348 57.882"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="39.976 19.513 52.77 19.513 52.77 33.524"/>
    <g>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M14.4016,33.5239c2.6813-2.3413,11.6314-3.2873,11.6314,5.1737"/>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M14.4016,43.8713c2.6813,2.3413,11.6314,3.2873,11.6314-5.1737"/>
    </g>
    <g>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M28.0005,57.8819c-2.3414-2.6814-3.2873-11.6314,5.1737-11.6314"/>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M38.3479,57.8819c2.3413-2.6814,3.2873-11.6314-5.1737-11.6314"/>
    </g>
    <g>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M29.6281,19.5133c-2.3414-2.6814-3.2873-11.6314,5.1737-11.6314"/>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M39.9755,19.5133c2.3413-2.6814,3.2873-11.6314-5.1737-11.6314"/>
    </g>
    <g>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M52.77,43.8713c2.6813,2.3413,11.6314,3.2873,11.6314-5.1737"/>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M52.77,33.5239c2.6813-2.3413,11.6314-3.2873,11.6314,5.1737"/>
    </g>
  </g>
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="m52.219,11.832c.1581,0,.275.1446.2389.2984-.2055.8767-.9426,4.2922-3.5876,17.5156-1.588,7.942-5.5,12.572-12.833,12.572s-11.245-4.5-12.833-12.443c-2.414-11.8492-3.667-17.943-3.667-17.943h32.6817Z"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="m23.0443,31.479s.079-.261-5.421-3.928c-2.528-1.683-5.459-3.9-5.459-6.943s2.5-5.11,5.539-5.11h1.513"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="m48.7113,31.766s.079-.261,5.579-3.928c2.528-1.683,5.541-3.9,5.541-6.943-.0146-2.842-2.3303-5.1341-5.1723-5.1196-.0963.0005-.1926.0037-.2887.0096h-2.154"/>
    <rect x="26.5503" y="50.332" width="18.333" height="9.167" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <circle cx="36.0373" cy="24.581" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
    <line x1="36.0373" x2="36.0373" y1="50.332" y2="42.218" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <circle cx="35.958" cy="35.9901" r="23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="36" x2="36" y1="18.9893" y2="35.9893" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="47.6303" x2="36.0833" y1="35.9929" y2="35.9929" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  stopwatch: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <circle cx="36.8214" cy="36.2941" r="23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" points="56.366,17.7166 58.3424,16.187 61.4023,20.1407 59.5696,21.5591"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" points="32.3214,9.7271 32.3214,7 41.3214,7 41.3214,9.8931"/>
    <circle cx="36.3475" cy="16.9817" r="1" fill="currentColor" stroke="none"/>
    <circle cx="36.3475" cy="55.0239" r="1" fill="currentColor" stroke="none"/>
    <ellipse cx="49.7975" cy="22.5528" rx="0.9878" ry="1.0121" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -1.3619 41.8177)" fill="currentColor" stroke="none"/>
    <ellipse cx="22.8975" cy="49.4528" rx="0.9878" ry="1.0121" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -28.2619 30.6754)" fill="currentColor" stroke="none"/>
    <circle cx="55.3686" cy="36.0028" r="1" fill="currentColor" stroke="none"/>
    <circle cx="17.3264" cy="36.0028" r="1" fill="currentColor" stroke="none"/>
    <line x1="36.8399" x2="21.4399" y1="35.91" y2="35.91" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="36.8846" x2="25.9952" y1="35.9253" y2="46.8147" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <ellipse cx="49.7975" cy="49.4528" rx="1.0121" ry="0.9878" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.3831 49.6965)" fill="currentColor" stroke="none"/>
    <ellipse cx="22.8975" cy="22.5528" rx="1.0121" ry="0.9878" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2407 22.7965)" fill="currentColor" stroke="none"/>
  </g>
    </svg>
  ),
  zen: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M31.037,43.5708c-2.8087,1.2481-5.8346,1.9341-8.907,2.0192-.7948,.0092-1.5894-.0275-2.38-.11-4.1976-.5267-8.2178-2.0117-11.75-4.34,2.8158-2.1842,6.1637-3.5772,9.6978-4.035"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M35.6085,44.5929c-.6457,2.4758-2.1654,4.6344-4.2785,6.0771-.571,.3918-1.173,.7362-1.8,1.03-5.42,2.61-12.96,2.43-12.96,2.43-.2099-3.2031,.9454-6.3455,3.18-8.65,.7906,.0825,1.5852,.1192,2.38,.11,3.0724-.0851,6.0983-.7711,8.907-2.0192"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M36.59,44.5242c.7826,2.4929,2.4276,4.6256,4.64,6.0158,.5928,.3758,1.2148,.7035,1.86,.98v.01c-1.04,4.38-7.09,7.47-7.09,7.47,0,0-5.18-2.95-6.47-7.3,.627-.2938,1.229-.6382,1.8-1.03,2.1108-1.4411,3.6296-3.5966,4.2764-6.0693z"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M36.781,45.07c.839,2.2642,2.4032,4.1873,4.449,5.47,.5928,.3758,1.2148,.7035,1.86,.98v.01c5.57,2.47,13.08,2.1,13.08,2.1,.0203-3.2395-1.3095-6.3412-3.67-8.56-.4849-.4407-1.0068-.8388-1.56-1.19-1.0805-.6708-2.2379-1.2092-3.4471-1.6034"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M54.7227,36.5008c3.3059,.7391,6.4496,2.0739,9.2773,3.9392-3.4131,2.4314-7.3544,4.0182-11.5,4.63-.4849-.4407-1.0068-.8388-1.56-1.19-1.2326-.7602-2.5604-1.3539-3.9488-1.7658"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M36.3064,44.5634s-19.3028-2.4511-19.3028-11.03,2.8955-14.7069,3.8606-15.9324,6.756,4.9022,6.756,7.3534"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M44.9926,24.9543c0-2.4512,5.7909-8.579,6.756-7.3534s3.86,7.3534,3.86,15.9324-19.3027,11.03-19.3027,11.03"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2" d="M43.3534,19.5336s-4.698-6.3166-7.047-6.3166-7.047,6.3166-7.047,6.3166"/>
  </g>
    </svg>
  ),
  fire: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M21.6298,61.5562c3.479,3.6108,8.6702,5.4754,13.9925,5.4754c5.0546,0,10.7077-1.9624,14.2409-5.4677"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M21.5108,57.4557c0,0-10.5321-11.2011-0.4546-25.9791c0,0,0.1969,4.0589,1.2551,6.5816c0.4834,1.0362,1.2122,1.9569,2.3487,1.9569 c1.3355,0,2.4181-0.8972,2.4181-2.5708c0-0.2599,0-0.6721,0-0.9184c0.105-3.0996-0.5251-7.6659,3.5708-17.19 c0,0,7.0365,3.7835,3.9909-14.6122c0,0,14.8798,10.4421,14.2762,28.217c0,1.2693,0.9678,2.2983,2.1617,2.2983 s2.1617-1.029,2.1617-2.2983c0.075,0.1341,6.3219,13.078-2.514,24.515"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M22.8203,22.9729c0.198-1.0358,0.7082-2.2802,1.9228-3.3185c0,0,1.9021-1.6355,1.5953-3.8305"/>
  </g>
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
        <circle cx="36" cy="36" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M49.4394,11.4301C48.9012,12.3361,47.7952,13.5726,47,14c-1.2452,0.6692-1.904,0.2672-3,1c-1.2689,0.8484-1.2095,1.9379-2,2 c-0.8018,0.063-0.6879-1.993-1-3c-0.4521-1.4585-0.2307-1.5267-1-2c-1.0834-0.6665-3.2121-1.0502-5,0 c-0.7094,0.4167-0.7506,0.682-3,4c-1.7096,2.5218-2.188,3.1093-2,4c0.1989,0.9419,0.0427,1.7474,1,2 c1.1873,0.3132,1.3661-0.2722,2-1c1.3282-1.525,2.3581-3.7828,3-4c0.5713-0.1933,2.0656,1.3495,2,3c-0.0463,1.1654-0.852,1.922-2,3 c-0.7417,0.6965-2.875,1.5-6,2c-1.719,0.275-1.4083,0.8524-2.0625,1.5938c-0.8427,0.955-0.4615,2.1691-1.2812,3.3125 c-1.0252,1.43-3.4727,1.7917-3.6564,2.7188C22.8432,33.4154,24.9604,33.9845,26,34c0.8505,0.0127,1.0644-0.7721,3-2 c0.7408-0.47,1.75-1.2812,2.6875-1.25c0.5041,0.0168,1.8289,0.2852,2.3438,0.7188c0.5938,0.5-0.1562,1.8438-0.4062,3.1562 s-2.8976,1.8646-3.8542,2.0208c-1.5737,0.257-4.1439-0.5228-5.6042,0.9375c-1,1-1.1155,1.766-1.1667,3.4167 c-0.0129,0.4172,0.937,3.0323,2,4c1.1442,1.0416,2.2939-0.8356,4,0c1.7456,0.8549,2.493,2.7288,3,4 c0.5078,1.2731,0.1756,1.1679,1,5c0.4146,1.9271,0.3191,1.1194,1,4c0.5632,2.3826,0.5889,2.7678,1,3 c1.1732,0.6628,3.8997-0.8162,5-3c0.6895-1.3683,0.2111-1.9625,1-5c0.3928-1.5123,0.5892-2.2685,1-3 c1.7332-3.0861,4.8828-3.1256,5-5c0.0802-1.2824-1.3573-1.8515-1-3c0.3421-1.0997,1.8099-1.0603,2-2 c0.2579-1.2752-2.2492-2.316-2-3c0.2822-0.7746,4.0696-1.0098,6,1c0.6397,0.666,0.4982,0.9775,2,4c1.3839,2.7851,1.7637,3.0431,2,3 c0.4287-0.0782,0.3223-1.1355,1-3c0.3243-0.8922,1.0927-3.0062,2-3c0.6247,0.0043,0.7386,1.0097,2,2 c0.7103,0.5576,1.7908,0.8806,2.3474,1.0378C63.7747,40.0932,64,38.0729,64,36c0-10.6315-5.9252-19.8791-14.6535-24.6206 z"/>
      </g>
    </svg>
  ),
  map: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
        <circle cx="36" cy="36" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M49.4394,11.4301C48.9012,12.3361,47.7952,13.5726,47,14c-1.2452,0.6692-1.904,0.2672-3,1c-1.2689,0.8484-1.2095,1.9379-2,2 c-0.8018,0.063-0.6879-1.993-1-3c-0.4521-1.4585-0.2307-1.5267-1-2c-1.0834-0.6665-3.2121-1.0502-5,0 c-0.7094,0.4167-0.7506,0.682-3,4c-1.7096,2.5218-2.188,3.1093-2,4c0.1989,0.9419,0.0427,1.7474,1,2 c1.1873,0.3132,1.3661-0.2722,2-1c1.3282-1.525,2.3581-3.7828,3-4c0.5713-0.1933,2.0656,1.3495,2,3c-0.0463,1.1654-0.852,1.922-2,3 c-0.7417,0.6965-2.875,1.5-6,2c-1.719,0.275-1.4083,0.8524-2.0625,1.5938c-0.8427,0.955-0.4615,2.1691-1.2812,3.3125 c-1.0252,1.43-3.4727,1.7917-3.6564,2.7188C22.8432,33.4154,24.9604,33.9845,26,34c0.8505,0.0127,1.0644-0.7721,3-2 c0.7408-0.47,1.75-1.2812,2.6875-1.25c0.5041,0.0168,1.8289,0.2852,2.3438,0.7188c0.5938,0.5-0.1562,1.8438-0.4062,3.1562 s-2.8976,1.8646-3.8542,2.0208c-1.5737,0.257-4.1439-0.5228-5.6042,0.9375c-1,1-1.1155,1.766-1.1667,3.4167 c-0.0129,0.4172,0.937,3.0323,2,4c1.1442,1.0416,2.2939-0.8356,4,0c1.7456,0.8549,2.493,2.7288,3,4 c0.5078,1.2731,0.1756,1.1679,1,5c0.4146,1.9271,0.3191,1.1194,1,4c0.5632,2.3826,0.5889,2.7678,1,3 c1.1732,0.6628,3.8997-0.8162,5-3c0.6895-1.3683,0.2111-1.9625,1-5c0.3928-1.5123,0.5892-2.2685,1-3 c1.7332-3.0861,4.8828-3.1256,5-5c0.0802-1.2824-1.3573-1.8515-1-3c0.3421-1.0997,1.8099-1.0603,2-2 c0.2579-1.2752-2.2492-2.316-2-3c0.2822-0.7746,4.0696-1.0098,6,1c0.6397,0.666,0.4982,0.9775,2,4c1.3839,2.7851,1.7637,3.0431,2,3 c0.4287-0.0782,0.3223-1.1355,1-3c0.3243-0.8922,1.0927-3.0062,2-3c0.6247,0.0043,0.7386,1.0097,2,2 c0.7103,0.5576,1.7908,0.8806,2.3474,1.0378C63.7747,40.0932,64,38.0729,64,36c0-10.6315-5.9252-19.8791-14.6535-24.6206 z"/>
      </g>
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <circle cx="35.9715" cy="21.3656" r="11.8084" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" points="38.5196,37.0981 38.5196,55.7135 35.9356,64.2191 32.9209,55.7135 32.9209,37.0981"/>
  </g>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <polygon fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" points="53,32.25 54.875,32.25 54.875,59.125 16.875,59.125 16.875,32.25 18.75,32.25"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M21.3751,28.9146c0-8.3786,6.4151-16.2744,14.3184-16.523c7.9697-0.2507,15.4098,7.2847,14.7416,16.523"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M25.5478,28.9146c0-6.3352,4.5755-12.3054,10.2123-12.4934c5.6843-0.1896,10.9908,5.5081,10.5142,12.4934"/>
  </g>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <line x1="11.4659" x2="2.5131" y1="11.4989" y2="11.4989" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="11.4662" x2="11.4663" y1="11.4989" y2="2.546" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="15.5067" x2="6.5538" y1="15.5473" y2="15.5473" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="15.5086" x2="15.5086" y1="15.5454" y2="6.5925" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="39.4865" x2="7.4778" y1="39.4644" y2="7.5188" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M21.9689,16.3467c4.8593-3.674,10.9579-5.8915,17.5193-5.8915c16.0163,0,29,12.9837,29,29s-12.9837,29-29,29s-29-12.9837-29-29 c0-6.5467,2.1693-12.5867,5.8283-17.4404"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M26.2567,20.6399c3.7421-2.6364,8.306-4.1847,13.2315-4.1847c12.7025,0,23,10.2975,23,23s-10.2975,23-23,23s-23-10.2975-23-23 c0-4.8704,1.5138-9.3872,4.0966-13.1056"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M32.04,26.4321c2.1945-1.2578,4.7374-1.9769,7.4482-1.9769c8.2843,0,15,6.7157,15,15s-6.7157,15-15,15s-15-6.7157-15-15 c0-2.6162,0.7305-5.1268,1.9079-7.268"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M40.0779,34.4744c2.4674,0.3067,4.3769,2.4111,4.3769,4.9616c0,2.7614-2.2386,5-5,5c-2.4824,0-4.5422-1.809-4.9332-4.1806"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M35.7775,30.1663c1.1474-0.4587,2.3996-0.7111,3.7107-0.7111c5.5228,0,10,4.4772,10,10s-4.4772,10-10,10s-10-4.4771-10-10 c0-1.2548,0.252-2.4731,0.6858-3.5895"/>
  </g>
    </svg>
  ),
  party: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" points="50.6626,45.6395 50.8308,45.8076 28.9606,55.1086 7.0904,64.4096 16.3914,42.5394 25.6923,20.6692"/>
    <polyline fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" points="25.801,20.7779 38.2616,33.2384 50.6626,45.6395"/>
    <line x1="25.6923" x2="25.801" y1="20.6692" y2="20.7779" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M46.4905,7.3671c0.2347,0.4487,0.4027,0.943,0.4897,1.473c0.451,2.7473-1.447,5.4141-4.2392,5.9565"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M42.9327,14.7763c-0.5049,0.0384-1.0133,0.1573-1.509,0.364c-2.5697,1.0713-3.828,4.093-2.8105,6.7492"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M61.7928,26.7168c-0.0987,0.4967-0.2778,0.987-0.5425,1.4544c-1.372,2.4225-4.5229,3.309-7.0378,1.98"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="M54.3745,30.2558c-0.4173-0.2868-0.8878-0.513-1.4036-0.663c-2.6733-0.7775-5.5486,0.7867-6.4223,3.4936"/>
  </g>
    </svg>
  ),
  snow: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <line x1="36.0002" x2="36.0002" y1="7" y2="65" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="11.2371" x2="60.7633" y1="50.5024" y2="21.4976" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="60.7633" x2="11.2371" y1="50.5024" y2="21.4976" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="21.0428" x2="21.0428" y1="27.2402" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="25.9574" x2="36.0002" y1="13.708" y2="18.4583" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="21.0428" x2="11" y1="27.2402" y2="31.9906" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="46.043" x2="36.0002" y1="13.708" y2="18.4583" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="25.9574" x2="36.0002" y1="58.2087" y2="53.4583" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="46.043" x2="36.0002" y1="58.2087" y2="53.4583" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="21.0772" x2="11.0344" y1="44.7424" y2="39.9921" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="61" x2="50.9572" y1="31.9906" y2="27.2402" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="60.9677" x2="50.9248" y1="39.9921" y2="44.7424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="50.9248" x2="50.9248" y1="55.9826" y2="44.7424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="21.0772" x2="21.0772" y1="55.9826" y2="44.7424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="50.9572" x2="50.9572" y1="27.2402" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M19.7623,22.3615C26.1543,17.0075,36.05,18.5,36.05,18.5s-.47,10.065-6.7623,15.2543S13,37.6159,13,37.6159,13.37,27.7156,19.7623,22.3615Z"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M55.732,36.689c5.4323,6.2313,4.1316,16.317,4.1316,16.317s-9.9309-.223-15.3631-6.4543-4.1316-16.317-4.1316-16.317S50.4152,30.3037,55.732,36.689Z"/>
  </g>
    </svg>
  ),
  galaxy: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M17.1562,46.5937A21.5389,21.5389,0,1,1,55.9267,27.9065"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M57.6771,37.1641a21.5552,21.5552,0,0,1-34.892,16.1641"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M52.7935,22.7551c7.6746-.9256,13.1384-.0236,14.1918,2.8489C68.8256,30.6221,56.51,39.7536,39.4777,46S7.1461,53.2415,5.3059,48.2235c-1.07-2.9183,2.6472-7.2279,9.2958-11.552"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M53.7763,24.0509c3.1468.1483,5.2585.9591,5.8112,2.4664,1.4336,3.909-8.16,11.0223-21.428,15.8879S12.9737,48.0465,11.54,44.1375c-.5761-1.5711.6291-3.66,3.1382-5.9122"/>
  </g>
    </svg>
  ),
  magic: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <rect x="9.1933" y="34.3473" rx="0.4398" ry="0.4398" width="53.5248" height="3.3851" transform="translate(-14.9528 36.0426) rotate(-45.0701)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="45.8806" x2="47.6346" y1="24.4476" y2="26.0854" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="23.4413" x2="25.8379" y1="46.1937" y2="48.5844" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="47.5749" x2="47.5749" y1="8.9583" y2="7.2929" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="47.5749" x2="47.5749" y1="14.6237" y2="12.9583" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="45.5749" x2="43.9096" y1="10.9583" y2="10.9583" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="51.2403" x2="49.5749" y1="10.9583" y2="10.9583" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="56" x2="56" y1="26.3101" y2="24.6447" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="56" x2="56" y1="31.9755" y2="30.3101" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="54" x2="52.3346" y1="28.3101" y2="28.3101" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="59.6654" x2="58" y1="28.3101" y2="28.3101" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  stats: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="m18.03 59.01v-21.41h8v21.41"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="m45.97 59.01v-14.62h8v14.62"/>
    <line x1="12.75" x2="28.49" y1="31.28" y2="31.28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="43.51" x2="59.45" y1="40.82" y2="40.82" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="57.48" x2="59.17" y1="50.37" y2="50.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <rect x="12.05" y="12.05" width="47.9" height="47.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="m32 59.01v-37.28h8v37.28"/>
    <line x1="12.39" x2="14.52" y1="40.82" y2="40.82" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="12.39" x2="14.52" y1="50.37" y2="50.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="43.51" x2="59.45" y1="31.28" y2="31.28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="43.51" x2="59.45" y1="21.74" y2="21.74" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="12.75" x2="28.49" y1="21.74" y2="21.74" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  levels: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <polygon fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="37.638 16 60.944 22.603 37.638 29.255 15.044 22.627 37.638 16"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M15.08,22.6425a4.4,4.4,0,0,0-.4554,8.4813l23.0141,6.713,23.3057-6.6516"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M15.08,31.2942a4.4,4.4,0,0,0-.4554,8.4813l23.0141,6.713,23.3057-6.6516"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M15.08,40.04a4.4,4.4,0,0,0-.4554,8.4813l23.0141,6.713,23.3057-6.6516"/>
  </g>
    </svg>
  ),
  star: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <polygon fill="#FBBF24" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" points="35.9928,10.7363 27.7913,27.3699 9.4394,30.0436 22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515 49.2851,42.9739 62.5606,30.0239 44.2067,27.3638"/>
  </g>
    </svg>
  ),
  starEmpty: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" opacity="0.35">
      <g id="line">
    <polygon fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" points="35.9928,10.7363 27.7913,27.3699 9.4394,30.0436 22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515 49.2851,42.9739 62.5606,30.0239 44.2067,27.3638"/>
  </g>
    </svg>
  ),
};

export const SVG_ICONS = {
  heartFill: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="#E11D48" stroke="#E11D48" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="m59.5 25c0-6.904-5.596-12.5-12.5-12.5-4.753 0-8.886 2.654-11 6.56-2.114-3.906-6.247-6.56-11-6.56-6.904 0-12.5 5.596-12.5 12.5 0 2.97 1.04 5.694 2.77 7.839l-0.0043 0.0034 20.73 25.7 20.73-25.7-0.0043-0.0034c1.73-2.145 2.77-4.869 2.77-7.839z"/>
  </g>
    </svg>
  ),
  heartEmpty: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" opacity="0.35">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="m59.5 25c0-6.904-5.596-12.5-12.5-12.5-4.753 0-8.886 2.654-11 6.56-2.114-3.906-6.247-6.56-11-6.56-6.904 0-12.5 5.596-12.5 12.5 0 2.97 1.04 5.694 2.77 7.839l-0.0043 0.0034 20.73 25.7 20.73-25.7-0.0043-0.0034c1.73-2.145 2.77-4.869 2.77-7.839z"/>
  </g>
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20v-9.5z"/>
      <path d="M9 21.5V12h6v9.5"/>
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-full h-full">
      <path d="M7 5.5v13a1.2 1.2 0 0 0 1.8 1.05l11-6.5a1.2 1.2 0 0 0 0-2.1l-11-6.5A1.2 1.2 0 0 0 7 5.5z"/>
    </svg>
  ),
  levels: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <polygon fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" points="37.638 16 60.944 22.603 37.638 29.255 15.044 22.627 37.638 16"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M15.08,22.6425a4.4,4.4,0,0,0-.4554,8.4813l23.0141,6.713,23.3057-6.6516"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M15.08,31.2942a4.4,4.4,0,0,0-.4554,8.4813l23.0141,6.713,23.3057-6.6516"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2" d="M15.08,40.04a4.4,4.4,0,0,0-.4554,8.4813l23.0141,6.713,23.3057-6.6516"/>
  </g>
    </svg>
  ),
  shuffle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M16 3h5v5"/>
      <path d="M4 20l6-6"/>
      <path d="M21 3l-7 7"/>
      <path d="M4 4l17 17"/>
      <path d="M16 21h5v-5"/>
    </svg>
  ),
  deselect: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="9"/>
      <path d="M15 9l-6 6M9 9l6 6"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  help: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="9.5"/>
      <path d="M9.5 9.2a2.8 2.8 0 0 1 5.3.9c0 1.8-2.8 2.3-2.8 3.9"/>
      <circle cx="12" cy="17" r="0.75" fill="currentColor"/>
    </svg>
  ),
  stats: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="m18.03 59.01v-21.41h8v21.41"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="m45.97 59.01v-14.62h8v14.62"/>
    <line x1="12.75" x2="28.49" y1="31.28" y2="31.28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="43.51" x2="59.45" y1="40.82" y2="40.82" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="57.48" x2="59.17" y1="50.37" y2="50.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <rect x="12.05" y="12.05" width="47.9" height="47.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2" d="m32 59.01v-37.28h8v37.28"/>
    <line x1="12.39" x2="14.52" y1="40.82" y2="40.82" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="12.39" x2="14.52" y1="50.37" y2="50.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="43.51" x2="59.45" y1="31.28" y2="31.28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="43.51" x2="59.45" y1="21.74" y2="21.74" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="12.75" x2="28.49" y1="21.74" y2="21.74" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" y1="2" x2="12" y2="14"/>
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M21 4v6h-6"/>
      <path d="M20 14a8 8 0 1 1-2.5-6.5L21 10"/>
    </svg>
  ),
  magic: (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g id="line">
    <rect x="9.1933" y="34.3473" rx="0.4398" ry="0.4398" width="53.5248" height="3.3851" transform="translate(-14.9528 36.0426) rotate(-45.0701)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="45.8806" x2="47.6346" y1="24.4476" y2="26.0854" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="23.4413" x2="25.8379" y1="46.1937" y2="48.5844" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="47.5749" x2="47.5749" y1="8.9583" y2="7.2929" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="47.5749" x2="47.5749" y1="14.6237" y2="12.9583" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="45.5749" x2="43.9096" y1="10.9583" y2="10.9583" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="51.2403" x2="49.5749" y1="10.9583" y2="10.9583" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="56" x2="56" y1="26.3101" y2="24.6447" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="56" x2="56" y1="31.9755" y2="30.3101" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="54" x2="52.3346" y1="28.3101" y2="28.3101" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
    <line x1="59.6654" x2="58" y1="28.3101" y2="28.3101" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4.2"/>
  </g>
    </svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  )
};

export const CustomSvg = ({ name, type = 'emoji', size = 24, className = '' }) => {
  const collection = type === 'emoji' ? SVG_EMOJIS : SVG_ICONS;
  let svg = collection[name];

  if (!svg) {
    svg = type === 'emoji' ? SVG_ICONS[name] : SVG_EMOJIS[name];
  }

  if (!svg) {
    svg = SVG_EMOJIS.sparkle;
  }

  return (
    <span
      className={`custom-svg-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        verticalAlign: 'middle',
        flexShrink: 0
      }}
    >
      {svg}
    </span>
  );
};

export default CustomSvg;
