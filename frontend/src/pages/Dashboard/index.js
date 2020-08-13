import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import HistroicalService from '../../services/HistroicalService';
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { ChartConfig, addCandlestickSeries, addHistogramSeries } from './ChartConfig';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchDropDown from '../SearchDropDown';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

// let chart
let candlestickSeries
let volumeSeries

const animatedComponents = makeAnimated();
let ind = 0;
let timeout = null;

const Dashboard = () => {
    const chartContainerRef = useRef();
    const chart = useRef();
    const resizeObserver = useRef();
    const [date, setDate] = useState(new Date())
    const [ticker, setTicker] = useState(null);
    const [tickerOptions, setTickerOptions] = useState([]);
    const [lastCandle, setLastCandle] = useState([]);
    const [searchFlag, setSearchFlag] = useState(false);
    const [searchStr, setSearchStr] = useState(null);
    const [timeTitle, setTimeTitle] = useState("Time");
    const [timeLength, setTimeLength] = useState(0);

    const getChartHistoryFromDate = (date) => {
        // console.log(date);
        // setDate
    }

    useEffect(() => {
        HistroicalService.getTickers().then(res => {
            let optionArr = new Array();
            setTickerOptions(res.data);
            setTicker(res.data[0]);
        })
    }, [])

    useEffect(() => {
        console.log(moment(date).format('YYYY-MM-DD'), "Sdfasdf");
        if (ticker) {
            HistroicalService.getChartData(ticker.value, moment(date).format('YYYY-MM-DD')).then(res => {
                setLastCandle(res.data);
            })
        }
    }, [ticker, date, timeLength]);

    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, ChartConfig(chartContainerRef.current));

        candlestickSeries = chart.current.addCandlestickSeries(addCandlestickSeries);

        volumeSeries = chart.current.addHistogramSeries(addHistogramSeries);
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

    const handleClick = (e) => {
        setTimeTitle(e);

        if(timeout) clearTimeout(timeout);
        let time = parseInt(e.split('min')[0]) * 60 * 1000;
        
        timeout = setTimeout(() => {
            setTimeLength(timeLength + 1)
        }, time);
    }
    return (
        <div className="root_container" style={{ backgroundColor: "#ffffff" }}>
            <div className="center_container" style={{ left: "26px" }}>
                <div ref={chartContainerRef} id='chart' className="chart-container"></div>
                <div style={{ zIndex: "99", position: "absolute", top: 5, marginLeft: 5, width: "100%" }}>
                    <Row>
                        <Col md={8}>
                            <Form inline>
                                <InputGroup className="mb-5">
                                    {tickerOptions && tickerOptions.length > 0 && <SearchDropDown option={tickerOptions} ticker={ticker} setTicker={setTicker}style={{ width: 300 }} setSearchStr={setSearchStr} />}
                                    <InputGroup.Append>
                                        <DatePicker
                                            variant="light"
                                            dateFormat="yyyy/MM/dd"
                                            selected={date}
                                            onChange={date => setDate(date)}
                                            customInput={
                                                <FormControl
                                                    placeholder="Date"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    style={{ borderRadius: 0 }}
                                                    onChange={getChartHistoryFromDate(date)}
                                                />
                                            }
                                        />
                                    </InputGroup.Append>
                                    <DropdownButton
                                        variant="light"
                                        title={timeTitle}
                                        id="input-group-dropdown-1"
                                        style={{ backgroundColor: "white" }}
                                        onSelect={handleClick}
                                    >
                                        <Dropdown.Item eventKey="1min" value="1">1min</Dropdown.Item>
                                        <Dropdown.Item eventKey="5min" value="5">5min</Dropdown.Item>
                                        <Dropdown.Item eventKey="30min" value="30">30min</Dropdown.Item>
                                        <Dropdown.Item eventKey="60min" value="60">60min</Dropdown.Item>
                                    </DropdownButton>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <div style={{ zIndex: "99", position: "absolute", top: "1px", width: "100%" }}>
                    <Row>
                        <Col md={8}>
                            {/* <Form inline>
                                <FormControl
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    style={{ borderRadius: 0, width:516, height:30 }}
                                />
                            </Form> */}

                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Dashboard