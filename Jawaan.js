import React from "react";
import { BiShareAlt } from "react-icons/bi";
import "./Jawaan.css";
import Jawancast from "./Jawancast";

function Jawaan() {
  return (
    <div>
      <section className="jawanmovie">
        <div className="jawanbanner">
          <div className="poster">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1692248611.jpg"
              alt=""
            />
            <p className="releasedate">Releasing on 7 Sep, 2023</p>
          </div>
          <div className="moviedetails">
            <h1>Jawan</h1>
            <p>
              <strong>568.9K</strong> are interested
            </p>
            <div className="majorinter">
              <div className="releaseinterest">
                <b>Releasing on 7 Sep, 2023</b>
                <p className="watch">
                  Are you interested in watching this movie?
                </p>
              </div>
              <div className="btninter">
                <button className="interested">I'm interested</button>
              </div>
            </div>
            <div className="movietype">
              <div className="screentype">
                <a href="">2D</a>
                <span>,</span>
                <a href="">4DX</a>
                <span>,</span>
                <a href="">ICE</a>
                <span>,</span>
                <a href="">IMAX 2D</a>
              </div>
              <div className="langtype">
                <a href="">Hindi</a>
                <span>,</span>
                <a href="">Telugu</a>
                <span>,</span>
                <a href="">English</a>
              </div>
            </div>
            <div className="thriller">
              2h 49m <span className="action"> • </span>
              <a className="action" href="">
                Action
              </a>
              <span className="action">,</span>
              <a className="action" href="">
                Thriller
              </a>
              <span className="action"> • </span>UA
            </div>
            <button className="tickets">Book tickets</button>
          </div>
          <div className="share">
            <button className="linkshare">
              <BiShareAlt></BiShareAlt>Share
            </button>
          </div>
        </div>
      </section>
      <Jawancast></Jawancast>
    </div>
  );
}

export default Jawaan;
