import React from "react";

const Player = () => {
    return (
        <>
            <div className="player">
                <video controls>
                    <source src="https://assets14.ign.com/videos/zencoder/2022/04/08/640/ad670c0fbf1850f6be3eb8d0f2fd3581-500000-1649435735.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="controls">
                <button className="play" data-icon="P" aria-label="play pause toggle"/>
                <button className="stop" data-icon="S" aria-label="stop"/>
                <div className="title">
                    <div></div>
                    <span aria-label="title">00:00</span>
                </div>
                <button className="rwd" data-icon="B" aria-label="rewind"/>
                <button className="fwd" data-icon="F" aria-label="fast forward"/>
                Hi
            </div>
        </>
    );
};

export default Player;