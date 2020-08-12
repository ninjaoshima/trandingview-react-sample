import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import HistroicalService from '../../services/HistroicalService';
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { ChartConfig, addCandlestickSeries, addHistogramSeries } from './ChartConfig';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// let chart
let candlestickSeries
let volumeSeries

const animatedComponents = makeAnimated();
let ind = 0;

const Dashboard = () => {
    const chartContainerRef = useRef();
    const chart = useRef();
    const resizeObserver = useRef();
    const [date, setDate] = useState(new Date())
    const [ticker, setTicker] = useState(null);
    const [tickerOptions, setTickerOptions] = useState([]);
    const [lastCandle, setLastCandle] = useState([]);
    const [searchFlag, setSearchFlag] = useState(false);
    const [checkValue, setcheckValue] = useState(null);

    const onRadioChange = (e) => {
        ind++
        if (ind > 1) ind = 0;
        setcheckValue(ind);
        console.log(ind);
        console.log(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }


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


    return (
        <div className="root_container" style={{ backgroundColor: "#ffffff" }}>
            <div className="center_container" style={{ left: "26px" }}>
                <div ref={chartContainerRef} id='chart' className="chart-container"></div>
                <div style={{ zIndex: "99", position: "absolute", top: "0px", width: "100%" }}>
                    <Row>
                        <Col md={8}>
                            <Form inline>
                                <InputGroup className="mb-5">
                                    <FormControl
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        style={{borderRadius:0}}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="light"><i className="fa fa-search fa-fw"></i></Button>
                                    </InputGroup.Append>
                                    <DropdownButton
                                        variant="light"
                                        title="Time"
                                        id="input-group-dropdown-1"
                                        style={{backgroundColor:"white"}}
                                    >
                                        <Dropdown.Item href="#">1min</Dropdown.Item>
                                        <Dropdown.Item href="#">5min</Dropdown.Item>
                                        <Dropdown.Item href="#">30min</Dropdown.Item>
                                        <Dropdown.Item href="#">60min</Dropdown.Item>
                                    </DropdownButton>
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
                                                    style={{borderRadius:0}}
                                                />
                                            }
                                        />
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Dashboard