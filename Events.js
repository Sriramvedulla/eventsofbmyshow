import "./Events.css";
import {
  UncontrolledAccordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";
import { useState } from "react";

const array1 = [
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00364885-nekjbbgudc-portrait.jpg",
    name: "Thinking Out Loud By Manoj Prabakar",
    languages: "English",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    filter: "outdoorevents",
    price: 399,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366777-axsacwyste-portrait.jpg",
    name: "Sunburn Arena Ft. Dimitri Vegas &Like Mike-Chennai",
    languages: "English",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 1250,
    filter: "outdoorevents",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365986-flzaeetwlm-portrait.jpg",
    name: "Barkha Ritu-Musical Celebration with the Maestro",
    languages: "English",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 350,
    filter: "outdoorevents",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355125-jjrdfxrung-portrait.jpg",
    name: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi",
    languages: "Hindi",
    type: "music shows",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 799,
    filter: "outdoorevents",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348301-vhfvztjwde-portrait.jpg",
    name: "Ramkumar Paathi Annachi Meethi",
    type: "music shows",
    languages: "Tamil",
    filter: "outdoorevents",
    catagory: "Comedy | Tamil | 12yrs + | 1hr 30mins",
    price: 499,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307978-gbstylvesw-portrait.jpg",
    name: "Smartphone Photography - Unleash the Pro Mode",
    languages: "Telugu",
    type: "workshop",
    catagory: "Photography | English, Hindi, Telugu | 12yrs + | 1hr 30mins",
    price: 2500,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyIE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365862-gpygtnwxjl-portrait.jpg",
    name: "Faith Over Fear - Live Concert",
    languages: "Telugu",
    type: "music shows",
    catagory:
      "Indie | English, Tamil, Hindi, Malayalam, Telugu | 5yrs + | 1hr 30mins",
    price: 299,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361122-uzsfngkhrc-portrait.jpg",
    name: "MARAKKUMA NENJAM AR Rahman Live Concert in Chennai",
    languages: "Tamil",
    catagory: "Concerts",
    type: "music shows",
    price: 500,
    filter: "outdoorevents",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00351918-wfyafagjfj-portrait.jpg",
    name: "Jagane Thandhiram - Tamil Standup Comedy",
    languages: "Tamil",
    catagory: "Comedy | Tamil | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365092-rnznqnzwpr-portrait.jpg",
    name: "MindFool India Tour - Vir Das",
    languages: "Hindi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
    filter: "fastfilling",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358075-rzkwxkshvk-portrait.jpg",
    name: "Praveen Kumar - Family Man Return",
    languages: "Tamil",
    catagory: "Comedy | Tamil | 12yrs + | 1hr 30mins",
    location: "Madai-Chennai",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00329668-hxpuzsejvt-portrait.jpg",
    name: "AANSPLAINING by Karthik Kumar - TOUR 2023",
    languages: "Tamil",
    catagory: "Comedy | Tamil | 12yrs + | 1hr 30mins",
    filter: "fastfilling",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365053-ukqgdnpsth-portrait.jpg",
    name: "Nothing Makes Sense FT. VARUN GROVER",
    catagory: "Comedy | English, Hindi | 16yrs + | 1hr 20mins",
    languages: "Hindi",
    filter: "fastfilling",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg",
    name: "WeMET Speed Dating",
    languages: "Hindi",
    type: "online streaming events",
    catagory: "Dating | English, Hindi | 21yrs + | 1hr 30mins",
    price: 49,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324554-cmyfpecske-portrait.jpg",
    languages: "English",
    name: "FRIENDS by Rajasekhar Mammidana - Standup Comedy",
    catagory: "Comedy | English | 16yrs + | 1hr 10mins",
    price: 399,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365986-flzaeetwlm-portrait.jpg",
    name: "Sunburn Arena Ft. Dimitri Vegas &Like Mike-Chennai",
    languages: "English",
    catagory: "EDM | English | 6hrs",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00368190-kdrnchrlht-portrait.jpg",
    name: "Naveen Richard Live: Baat Karo Mere Sath",
    languages: "English",
    catagory: "Comedy | English | 16yrs + | 1hr 15mins",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IE5vdg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00368222-rhbzbfbbgx-portrait.jpg",
    name: "Prashasti Singh - Man of the House (Stand Up Tour)",
    languages: "Hindi",
    catagory: "Comedy | Hindi | 16yrs + | 1hr",
    price: 499,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00340434-wchjaxbkkc-portrait.jpg",
    languages: "Gujarati",
    name: "Jati Rehje - Gujarati Stand-up Comedy",
    catagory: "Comedy | Gujarati, English | 18yrs + | 1hr 30mins",
    price: 249,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366687-jwlzvrrqfd-portrait.jpg",
    name: "PLAY 'N' LEARN VR Mall Chennai",
    type: "kids",
    languages: "Hindi",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 700,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355836-akhgjdpgmm-portrait.jpg",
    name: "Blind Dating 30+ - Florican",
    catagory: "Dating | English, Hindi | 1hr",
    languages: "Hindi",
    type: "meetups",
    price: 299,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359035-cggedcjmfh-portrait.jpg",
    name: "Art Summer Camp - Paint the SpiderMan",
    catagory: "Comedy | English | 12yrs + | 1hr 30mins",
    price: 399,
    type: "workshop",
    languages: "Bengali",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIE5vdg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00368259-nzuznrnbtt-portrait.jpg",
    name: "Madras Mixtape by Barnaby Junction",
    languages: "multilanguage",
    catagory: "Indie | Multi Language | 5yrs + | 1hr 30mins",
    price: 299,
    type: "onlinestreaming",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA0IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317292-smfhyhlzjw-portrait.jpg",
    name: "Mastering Basics Of Photography",
    languages: "Telugu",
    catagory: "Photography | English, Hindi, Telugu | 12yrs + | 3hrs",
    price: 4000,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360743-xxczztempp-portrait.jpg",
    name: "Ani X Con",
    languages: "Tamil",
    type: "exhibitions",
    catagory: "Comics | English, Tamil, Hindi | 16yrs + | 22hrs",
    price: 1000,
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367329-dbpmubnvlk-portrait.jpg",
    name: "Dance Dance",
    languages: "Tamil",
    type: "performances",
    catagory: "Dance | Tamil | 3yrs + | 3hrs 30mins",
    price: 300,
  },
];

function Events() {
  const [Evelanguage, setEveLanguage] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [newEvelanguage, setnewEveLanguage] = useState(array1);

  function multiplelangStates(index) {
    const newlanbtnActive = Evelanguage.map((ele, i) => {
      if (index === i) {
        return !ele;
      }
      return false;
    });
    console.log(newlanbtnActive);
    setEveLanguage(newlanbtnActive);
  }

  function filterfunction(x) {
    const lang = array1.filter((ele) => ele.languages == x);
    setnewEveLanguage(lang);
  }

  return (
    <div className="bigcontainer">
      {" "}
      {/* main container start */}
      <div className="div2nd">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1693217899163_jonitadesktop.jpg"
          alt=""
        />
      </div>
      <div className="div3rd"></div>
      <div className="div4section">
        <div className="div4-left">
          <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="1">Date</AccordionHeader>
              <AccordionBody accordionId="1">
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Today
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Tomorrow
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  This Weekend
                </button>
                <div className="inputbox">
                  <input type="checkbox" id="daterange" />
                  <label htmlFor="daterange">Date Range</label>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="2">Languages</AccordionHeader>
              <AccordionBody accordionId="2">
                <button
                  className={
                    Evelanguage[0]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(0);
                    filterfunction("English");
                  }}
                >
                  English
                </button>
                <button
                  className={
                    Evelanguage[1]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(1);
                    filterfunction("Hindi");
                  }}
                >
                  Hindi
                </button>
                <button
                  className={
                    Evelanguage[2]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(2);
                    filterfunction("Tamil");
                  }}
                >
                  Tamil
                </button>
                <button
                  className={
                    Evelanguage[3]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(3);
                    filterfunction("Telugu");
                  }}
                >
                  Telugu
                </button>
                <button
                  className={
                    Evelanguage[4]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(4);
                    filterfunction("Malayalam");
                  }}
                >
                  Malayalam
                </button>
                <button
                  className={
                    Evelanguage[5]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(5);
                    filterfunction("Kannada");
                  }}
                >
                  Kannada
                </button>
                <button
                  className={
                    Evelanguage[6]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(6);
                    filterfunction("Bengali");
                  }}
                >
                  Bengali
                </button>
                <button
                  className={
                    Evelanguage[7]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(7);
                    filterfunction("Gujarati");
                  }}
                >
                  Gujarati
                </button>
                <button
                  className={
                    Evelanguage[8]
                      ? " p-2 ms-3 mb-3 border border-light-subtle evebtns langbtns"
                      : " p-2 ms-3 mb-3 border border-light-subtle evebtns"
                  }
                  onClick={() => {
                    multiplelangStates(8);
                    filterfunction("multilanguage");
                  }}
                >
                  Multi Language
                </button>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="3">Categories</AccordionHeader>
              <AccordionBody accordionId="3">
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Online Streaming Events
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Workshops
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Comedy Shows
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Music Shows
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Kids
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Meetups
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Spirituality
                </button>
                <button className="p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Exhibitions
                </button>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="4">More Filters</AccordionHeader>
              <AccordionBody accordionId="4">
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Online Streaming
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Outdoor Events
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Fast Filling
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Kids Allowed
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Must Attend
                </button>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem className="border border-light accord">
              <AccordionHeader targetId="5">Price</AccordionHeader>
              <AccordionBody accordionId="5">
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Free
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  0-500
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  501-2000
                </button>
                <button className="bg-white p-2 ms-3 mb-3 border border-light-subtle evebtns">
                  Above 2000
                </button>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
        <div className="div4th-right">
          {newEvelanguage.map((index) => {
            return (
              <div className="right-flex">
                <img
                  style={{ height: "300px", borderRadius: "10px" }}
                  src={index.img}
                  alt=""
                />
                <h4 className="head4" style={{ width: "200px" }}>
                  {index.name}
                </h4>
                <p className="catpara">{index.catagory}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    /* main container end */
  );
}
export default Events;
