import React, { useState, useEffect } from "react";

export default function Clock() {
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function elapsedTime(start_time, end_time){
        /**
         * Parse date value ~ accepts valid Date instance, integer timestamp or date string
         *  
         * @param {*} val 
         * @returns {Date|undefined}
         */
        const _parse_date = val => {
            if (val instanceof Date) return !isNaN(val = val.getTime()) ? new Date(val) : undefined;
            else if ('string' === typeof val) return !isNaN(val = Date.parse(val)) ? new Date(val) : undefined;
            return Number.isInteger(val) ? new Date(val) : undefined;
        };
    
        //-- parse arguments
        if (!(start_time = _parse_date(start_time))) throw new TypeError('Invalid elapsed start time value! Pass a valid Date instance, integer timestamp or date string value.');
        if (!(end_time = _parse_date(end_time))) throw new TypeError('Invalid elapsed end time value! Pass a valid Date instance, integer timestamp or date string value.');
        const min_max = start_time > end_time ? [end_time, start_time] : [start_time, end_time];
        const start = new Date(min_max[0].getTime());
        const end = new Date(min_max[1].getTime());
    
        //-- parse elapsed time
        let years = 0;
        let months = 0;
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let milliseconds = 0
        const total_time = end.getTime() - start.getTime();
        const total_days = Math.floor(total_time / (24 * 60 * 60 * 1000));
        if ((milliseconds += (end.getMilliseconds() - start.getMilliseconds())) < 0){
            seconds --;
            milliseconds += 1000;
        }
        if ((seconds += (end.getSeconds() - start.getSeconds())) < 0){
            minutes --;
            seconds += 60;
        }
        if ((minutes += (end.getMinutes() - start.getMinutes())) < 0){
            hours --;
            minutes += 60;
        }
        if ((hours += (end.getHours() - start.getHours())) < 0){
            days --;
            hours += 24;
        }
        const start_year = start.getFullYear();
        let start_month = start.getMonth();
        years = end.getFullYear() - start_year;
        if ((months = end.getMonth() - start_month) < 0){
            years --;
            months += 12;
        }
        if ((days += (end.getDate() - start.getDate())) < 0){
            if (end.getMonth() === start.getMonth()) start_month ++;
            if (months <= 0){
                years --;
                months = 11;
            }
            else months --;
            days += new Date(start_year, start_month + 1, 0).getDate();
        }
    
        //<< result
        return {
            start,
            end,
            years,
            months,
            days,
            hours,
            minutes,
            seconds,
            milliseconds,
            total_days,
            total_time,
            toString: function(){
                const values = [];
                const _add = (val, singular) => void (val ? values.push(val + ' ' + (val === 1 ? singular : singular + 's')) : null);
                _add(years, 'year');
                _add(months, 'month');
                _add(days, 'day');
                _add(hours, 'hour');
                _add(minutes, 'minute');
                _add(seconds, 'second');
                _add(milliseconds, 'millisecond');
                if (!values.length) values.push('0 milliseconds');
                return values.length > 1 ? values.slice(0, -1).join(', ') + ' and ' + values[values.length - 1] : values.join('');
            },
        }
    }
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            
            let a = new Date(),
            b = '2023-12-09T00:00:00.000Z',
            result = elapsedTime(a, b);
                        
            setSeconds(result.seconds);
            setMinutes(result.minutes);
            setHours(result.hours);
            setDays(result.days);
            setMonths(result.months);
            setYears(result.years);               
                
        }, 1000);
    return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <div className="love-counter">
            <div className="flex-child years">
                <p className="date-indicator">Jaar</p>
                <p className="date-counter-item">{years}</p>
            </div>
            <div className="flex-child months">
                <p className="date-indicator">{months != 1 ? "Maanden" : "Maand"}</p>
                <p className="date-counter-item">{months}</p>
            </div>
            <div className="flex-child days">
                <p className="date-indicator">{days != 1 ? "Dagen" : "Dag"}</p>
                <p className="date-counter-item">{days}</p>
            </div>
            <div className="flex-child hours">
                <p className="date-indicator">Uur</p>
                <p className="date-counter-item">{hours}</p>
            </div>
            <div className="flex-child minutes">
                <p className="date-indicator">{minutes != 1 ? "Minuten" : "Minuut"}</p>
                <p className="date-counter-item">{minutes}</p>
            </div>
            <div className="flex-child seconds">
                <p className="date-indicator">Secondes</p>
                <p className="date-counter-item">{seconds}</p>
            </div>
          </div>
        </>
    );
}      
  
