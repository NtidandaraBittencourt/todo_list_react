import React from 'react';
import { CircularProgress } from "@react-md/progress";

const Loading = () => {
    return (
        <div className="loading-container">
            <CircularProgress id="small-circular-progress" />
        </div>
    );
}

export default Loading;
