const calculatePercent = (valeu, percent) => {

    if (percent > 1) {
        percent = percent / 100;
    }

    return Math.ceil(valeu * percent);
};

export default calculatePercent;