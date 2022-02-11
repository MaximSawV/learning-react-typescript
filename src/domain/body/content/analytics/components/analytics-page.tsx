import React, {useState} from 'react';
import {css} from "@emotion/css";
import 'antd/dist/antd.css';
import DatePicker from './../../components/datepicker';


export default function AnalyticsPage() {

    const [marginLeft, setMarginLeft] = useState(0);

    return (
        <div className={css`
            display: flex;
            flex-direction: row;
            height: 95%;
            width: 95%;
            margin: 1%;
            background: #373737;
        `}>
            <div className={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 2%;
            `}>
                <div className={css`
                border: 1px solid black;
                color: lime;
                background: black;
                width: 1400px;
                height: 600px;
                border-radius: 20px 0 0 0;
            `}>
                    Analysis Chart (Big)
                </div>

                <div>
                    <form>
                        <DatePicker/>
                    </form>
                </div>
            </div>

            <div className={css`
                border: 1px solid black;
                color: lime;
                background: black;
                width: 600px;
                height: 600px;
                border-radius: 0 20px 0 0;
                margin: 2%;
            `}>
                Analysis Chart (Small)
            </div>
        </div>
    );
}