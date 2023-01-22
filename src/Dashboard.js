import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { useIdleTimer } from 'react-idle-timer'
import TimeoutModal from "./TimeoutModal";
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


function Dashboard() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [nonerror, setNonError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    function onChangeClick(value) {
        setShowModal(true);
        console.log(showModal);
    }

    function onChange(value) {
        console.log('Captcha value:', value);
    }

    const onIdle = () => {
        setShowModal(true);
    }

    const onActive = (event) => {

    }
    const idleTimer = useIdleTimer({ onIdle, onActive })

    const {
        start,
        reset,
        activate,
        pause,
        resume,
        isIdle,
        isPrompted,
        isLeader,
        getTabId,
        getRemainingTime,
        getElapsedTime,
        getLastIdleTime,
        getLastActiveTime,
        getTotalIdleTime,
        getTotalActiveTime
    } = useIdleTimer({
        onIdle,
        onActive,
        timeout: 1000 * 5 * 1,
        promptTimeout: 0,
        events: [
            'mousemove',
            'keydown',
            'wheel',
            'DOMMouseScroll',
            'mousewheel',
            'mousedown',
            'touchstart',
            'touchmove',
            'MSPointerDown',
            'MSPointerMove',
            'visibilitychange'
        ],
        immediateEvents: [],
        debounce: 0,
        throttle: 0,
        eventsThrottle: 200,
        element: document,
        startOnMount: true,
        startManually: false,
        stopOnIdle: false,
        crossTab: false,
        name: 'idle-timer',
        syncTimers: 0,
        leaderElection: false
    })

    return (
        <div className="App">
            <header className="App-header">
                Welcome, Admin!
                <TimeoutModal showModal={showModal}></TimeoutModal>
            </header>
        </div>
    );
}

export default Dashboard;
