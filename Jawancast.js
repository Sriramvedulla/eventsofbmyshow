import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Jawancast.css";

const cast = [
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg",
    name: "Shah Rukh Khan",
    profession: "Actor",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nayanthara-5143-1675058766.jpg",
    name: "Nayanthara",
    profession: "Actor",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-sethupathi-32355-16-09-2017-03-30-38.jpg",
    name: "Vijay Setupathi",
    profession: "Actor",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sanya-malhotra-1057788-19-09-2018-12-19-26.jpg",
    name: "Sanya Malhotra",
    profession: "Actor",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/priyamani-1738-1654347025.jpg",
    name: "Priyamani",
    profession: "Actor",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg",
    name: "Deepika Padukone",
    profession: "as Special Apperance",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/girija-oak-10166-24-03-2017-12-32-03.jpg",
    name: "Girija Oak",
    profession: "Actor",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/lehar-khan-30883-24-03-2017-16-02-17.jpg",
    name: "Lehar Khan",
    profession: "Actor",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sunil-grover-1055699-24-03-2017-13-54-24.jpg",
    name: "Sunil Grover",
    profession: "Actor",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ridhi-dogra-1053266-1693466220.jpg",
    name: "Ridhi Dogra",
    profession: "Actor",
  },
];
const crew = [
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/atlee-37797-1689670023.jpg",
    name: "Atlee",
    profession: "Director",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gauri-khan-iein021799-24-03-2017-18-02-23.jpg",
    name: "Gauri Khan",
    profession: "Producer",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/red-chillies-entertainment-1075747-24-03-2017-13-42-09.jpg",
    name: "Red Chillies Entertainment",
    profession: "Producer",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anirudh-ravichander-34897-24-03-2017-13-54-49.jpg",
    name: "Anirudh Ravichander",
    profession: "Musician",
  },
  {
    imgurl:
      "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mr-gaurav-verma-1086558-05-10-2017-04-50-03.jpg",
    name: "Gaurav Verma",
    profession: "Co-Producer",
  },
];
function Jawancast() {
  return (
    <div>
      <div className="castcrew">
        <div className="abt">
          <h2>About the movie</h2>
          <p>
            A high-octane action thriller that outlines the emotional journey of
            a man who is set to rectify the wrongs in society.
          </p>
        </div>
        <h2 className="castsection">Cast</h2>
        <div className="cast">
          <button className="btnback">
            <IoIosArrowBack></IoIosArrowBack>
          </button>
          {cast.map((list, y) => {
            return (
              <div className="castdata">
                <img src={list.imgurl} alt="" />
                <h3 className="actorname">{list.name}</h3>
                <p>{list.profession}</p>
              </div>
            );
          })}
          <button className="btnforward">
            <IoIosArrowForward></IoIosArrowForward>
          </button>
        </div>
      </div>
      <div className="filmcrew">
        <h2 className="castsection">Crew</h2>
        <div className="cast">
          {crew.map((list, y) => {
            return (
              <div className="castdata">
                <img src={list.imgurl} alt="" />
                <h3 className="actorname">{list.name}</h3>
                <p>{list.profession}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Jawancast;
