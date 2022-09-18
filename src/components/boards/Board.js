import React, { useState } from 'react';

function Board(){
    return <>
         <div className="board">
            <article>
                <div className="comment-header">
                    <a href='#none'>
                        <img className="board-img" src='/boardexm.jpg' alt="image" />
                    </a>
                </div>
                <div className="comment">
                    <div className="comment-header">
                        <a href='#none'>
                            <div alt="프로필 사진"></div>
                        </a>
                        <div>
                            <h4>닉넴</h4>
                            <span>서울시 무슨동 무슨카페</span>
                            <a href='#'></a>
                        </div>
                    </div>
                    <div className="comment-header">
                        <a href='#none'>
                            <div alt="프로필 사진"></div>
                        </a>
                        <div>
                            <h4>닉넴</h4>
                            <span>서울시 무슨동 무슨카페</span>
                            <a href='#'></a>
                        </div>
                    </div>
                    <div className="comment-btn">
                    <img src='/heart.svg' alt='btn-setting' />
                        <img src='/chat.svg' alt='btn-setting' />
                        <img src='/share.svg' alt='btn-setting' />
                        <img src='/bookmark_border.svg' alt='btn-setting' />
                        <span>sunny님 외 3명이 좋아합니다</span>
                        <span>8월 4, 2021</span>
                    </div>
                    <div>
                    <img src='/emoji.svg' alt='btn-setting' />
                        <input type='text' placeholder='댓글 달기...'></input>
                        <span type="button">게시</span>
                    </div>
                </div>
            </article>
        </div>
    </>
};

export default Board;