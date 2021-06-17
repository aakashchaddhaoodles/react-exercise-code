import React, {FC, useEffect, useState} from "react";


const App: FC = () => {
    const date = new Date();
    const [currentDate, setCurrentDate] = useState<Date>(date);
/**
 * Sets current date as new date when application loads 
 */
    useEffect(() => {
        setCurrentDate(new Date());
    }, [currentDate]);

    return (
        <p className="time">
            {currentDate.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true
            })}
        </p>
    );
};

export default App;
