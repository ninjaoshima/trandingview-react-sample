import React, { useEffect, useRef, useState } from 'react';
import css from '../style.css'

const RealTimeCard = () => {

    const makeStatusCard = () => {
        let table = []
        for (let i = 0; i < 12; i++) {
            table.push(<a className="tv-item" key={`${i}-tvcard`}>
                {
                    <div className="tv-item-container">
                        <div className="tv-item-div">
                            <span className="tv-item-top-right-value">S&amp;P 500</span>
                            <span className="tv-item-top-left-value">3344.1</span>
                        </div>
                        <div style={{ marginTop: "8px" }}>
                            <span class="tv-item-direction">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8">
                                    <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="2" d="m1 6 5-4 5 4"></path>
                                </svg>
                            </span>
                            <span className="tv-item-value-lg">0.54%</span>
                            <span className="tv-item-value-sm">18.1</span>
                        </div>
                    </div>
                }
            </a>)
        }
        return table
    }

    return (
        <div className="tv-header">
            {makeStatusCard()}
        </div>
    )
}

export default RealTimeCard;