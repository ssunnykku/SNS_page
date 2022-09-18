import React, { useState } from "react";

function Board({ board, setBoard }) {
  return (
    <>
      <div className="comment-back">
        <img src="/arrow_circle_left.svg" alt="btn-setting" />
        <div className="board">
          <article>
            <div className="comment-header">
              <a href="#none">
                <img className="board-img" src="/boardexm.jpg" alt="image" />
              </a>
            </div>
            <div className="comment">
              <div className="comment-header">
                <div>
                  <a href="#none">
                    <div className="comment-profile" alt="프로필 사진"></div>
                  </a>
                </div>
                <div className="comment-flex">
                  <div>
                    <a herf="#none">
                      <h6 className="nickname">heesoo</h6>
                    </a>
                    <a herf="#none">
                      <span>서울시 무슨동 무슨카페</span>
                    </a>
                  </div>
                  <div>
                    <img src="/more_horiz_black.svg" alt="btn-setting" />
                  </div>
                </div>
              </div>
              <div className="comment-chats">
                <div>
                  <a href="#none">
                    <div className="comment-profile" alt="프로필 사진"></div>
                  </a>
                </div>
                <div>
                  <a herf="#none">
                    <h6 className="nickname">heesoo</h6>
                  </a>
                  <a herf="#none">
                    <span>자주 만나자</span>
                  </a>
                  <span>58주</span>
                </div>
              </div>
              <div className="comment-btn">
                <div>
                  <img src="/favorite.svg" alt="btn-setting" />
                  <img src="/chat.svg" alt="btn-setting" />
                  <img src="/message.svg" alt="btn-setting" />
                </div>
                <div>
                  <img src="/bookmark_border.svg" alt="btn-setting" />
                </div>
              </div>
              <div>
                <h6>sunny님 외 3명이 좋아합니다</h6>
                <span>8월 4, 2021</span>
              </div>
              <div>
                <img src="/emoji.svg" alt="btn-setting" />
                <input type="text" placeholder="댓글 달기..."></input>
                <span type="button">게시</span>
              </div>
            </div>
          </article>
        </div>
        <div id="btns">
          <img
            id="close"
            src="/close.svg"
            alt="btn-setting"
            onClick={() => {
              setBoard(!board);
            }}
          />
          <img src="/arrow_circle_right.svg" alt="btn-setting" />
        </div>
      </div>
    </>
  );
}

export default Board;
