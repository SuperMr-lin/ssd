export default {
    'POST /Report/DeansDaily': (req, res) => {
        const cardText = {
            "mzsr": 63.46042,
            "zysr": 92.3802,
            "ypsr": 79.2494,
            "fypsr": 70.93793,
            "qyzsr": 71.2463,
            "mzrc": 92,
            "jzrc": 90,
            "zjmzrc": 76,
            "crbls": 73,
            "kjcfsl": 84,
            "pjcfje": 99.92868,
            "yqcfsl": 72,
            "yqcfzje": 70.8217,
            "wqcfsl": 96,
            "wqcfzje": 73.538,
            "zdcfje": 72.3192,
            "zxcfje": 77.9854,
            "ryrs": 84,
            "cyrs": 90,
            "zyrs": 98,
            "zycy": 61,
            "zy": 60,
            "sw": 98,
            "zbcw": 97,
            'bwcw':56,
            "jc": 90,
            "cwsyl": 50,
            "cwzzl": 60,
            "ssts": 60
        }
        res.send({
            cardText: cardText
        });
    },
    // 'Get /api/user': {
    //     status: 'ok',
    //     currentAuthority: 'admin',
    // }
}