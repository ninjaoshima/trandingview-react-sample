import { CrosshairMode } from 'lightweight-charts';
export const ChartConfig = (chartRef) => {
    return {
        width: chartRef.clientWidth,
        height: chartRef.clientHeight,
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
        // timeScale: {
        //     rightOffset: 0.5,
        //     barSpacing: 3,
        //     fixLeftEdge: true,
        //     lockVisibleTimeRangeOnResize: true,
        //     rightBarStaysOnScroll: true,
        //     borderVisible: false,
        //     borderColor: '#fff000',
        //     visible: true,
        //     timeVisible: true,
        //     secondsVisible: false,

        //     // tickMarkFormatter: (time, tickMarkType, locale) => {
        //     //     console.log(time, tickMarkType, locale);
        //     //     const year = LightweightCharts.isBusinessDay(time) ? time.year : new Date(time * 1000).getUTCFullYear();
        //     //     return String(year);
        //     // },
        // },
        // crosshair: {
        //     vertLine: {
        //         color: '#6A5ACD',
        //         width: 0.5,
        //         style: 1,
        //         visible: true,
        //         labelVisible: false,
        //     },
        //     horzLine: {
        //         color: '#6A5ACD',
        //         width: 0.5,
        //         style: 0,
        //         visible: true,
        //         labelVisible: true,
        //     },
        //     mode: 1,
        // },
        priceScale: {
            borderColor: '#485c7b',
        },
        timeScale: {
            borderColor: '#485c7b',
        },
    }
}

export const addCandlestickSeries = {
    upColor: '#4bffb5',
    downColor: '#ff4976',
    borderDownColor: '#ff4976',
    borderUpColor: '#4bffb5',
    wickDownColor: '#838ca1',
    wickUpColor: '#838ca1',
}

export const addHistogramSeries = {
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
}

