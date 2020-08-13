import React, { Component, Fragment, useState } from 'react';
import Select from 'react-select';
import css from '../style.css'

const SearchDropDown = (props) => {
    const setSearchStr = props.setSearchStr;
    const initialState = {
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: true,
    };

    const [state, setState] = useState(initialState);

    const toggleClearable = () =>
        setState(state => ({ isClearable: !state.isClearable }));

    const toggleDisabled = () =>
        setState(state => ({ isDisabled: !state.isDisabled }));

    const toggleLoading = () =>
        setState(state => ({ isLoading: !state.isLoading }));

    const toggleRtl = () => setState(state => ({ isRtl: !state.isRtl }));

    const toggleSearchable = () =>
        setState(state => ({ isSearchable: !state.isSearchable }));

    const handleChange = (e) => {
        if (!e) return;
        if(e!=null && e!="") setSearchStr(e.label);
        props.setTicker({...props.ticker, label: e.label,value: e.value});
    }

    const customStyles = {
        input: (styles) => {
            return {
                ...styles,
                fontSize: '12px',
                textAlign: 'left',
                width: '300px',
            }
        },
    }

    return (
        <Fragment>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={props.option[0]}
                isDisabled={state.isDisabled}
                isLoading={state.isLoading}
                isClearable={state.isClearable}
                isRtl={state.isRtl}
                isSearchable={state.isSearchable}
                name="color"
                style={{width: 300}} 
                options={props.option}
                onChange={handleChange}
            />
        </Fragment >
    );
}

export default SearchDropDown;
