import React, { useEffect, useRef, useState } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import HistroicalService from '../../services/HistroicalService';

// let chart
let candlestickSeries
let volumeSeries

const animatedComponents = makeAnimated();

const Dashboard = () => {


    const chartContainerRef = useRef();
    const chart = useRef();
    const resizeObserver = useRef();


    const [ticker, setTicker] = useState(null);
    const [tickerOptions, setTickerOptions] = useState([]);
    const [lastCandle, setLastCandle] = useState([]);

    useEffect(() => {
        HistroicalService.getTickers().then(res => {
            setTickerOptions(res.data);
            setTicker(res.data[0]);
        })
    }, [])

    useEffect(() => {
        if (ticker) {
            HistroicalService.getChartData(ticker.value).then(res => {
                setLastCandle(res.data);
            })
        }
    }, [ticker]);

    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 500,
            layout: {
                backgroundColor: '#253248',
                textColor: 'rgba(255, 255, 255, 0.9)',
            },
            grid: {
                vertLines: {
                    color: '#334158',
                },
                horzLines: {
                    color: '#334158',
                },
            },
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            priceScale: {
                borderColor: '#485c7b',
            },
            timeScale: {
                borderColor: '#485c7b',
            },
        });

        candlestickSeries = chart.current.addCandlestickSeries({
            upColor: '#4bffb5',
            downColor: '#ff4976',
            borderDownColor: '#ff4976',
            borderUpColor: '#4bffb5',
            wickDownColor: '#838ca1',
            wickUpColor: '#838ca1',
        });

        volumeSeries = chart.current.addHistogramSeries({
            color: '#182233',
            lineWidth: 2,
            priceFormat: {
              type: 'volume',
            },
            overlay: true,
            scaleMargins: {
              top: 0.8,
              bottom: 0,
            },
          });


    }, []);

    useEffect(() => {
        candlestickSeries.setData(lastCandle);
        volumeSeries.setData(lastCandle);
    }, [lastCandle]);


    useEffect(() => {
        resizeObserver.current = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            chart.current.applyOptions({ width, height });
            setTimeout(() => {
                chart.current.timeScale().fitContent();
            }, 0);
        });

        resizeObserver.current.observe(chartContainerRef.current);

        return () => resizeObserver.current.disconnect();
    }, [lastCandle]);


    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center">{`AI-LGO "${ticker?ticker.label: ""}"`}</h2>
                <Select
                    styles={{
                        menu: provided => ({ ...provided, zIndex: 9999 })
                    }}
                    components={animatedComponents}
                    options={tickerOptions}
                    onChange={val => setTicker(val)}
                />
                <div ref={chartContainerRef} id='chart' className="mt-5 chart-container" />
            </div>
        </>
    );
}

export default Dashboard