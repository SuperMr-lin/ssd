export default {
    'POST /Ranklist/bar': (req, res) => {
        const list = {
            "code": 1,
            "msg": true,
            "data": [
                {
                    "mc": 1,
                    "mcTitle": "排名1",
                    "mcValue": 6253.23
                },
                {
                    "mc": 2,
                    "mcTitle": "排名2",
                    "mcValue": 6153.23
                },
                {
                    "mc": 3,
                    "mcTitle": "排名3",
                    "mcValue": 6053.23
                },
                {
                    "mc": 4,
                    "mcTitle": "排名4",
                    "mcValue": 5953.23
                },
                {
                    "mc": 5,
                    "mcTitle": "排名5",
                    "mcValue": 5803.23
                },
                
            ]
        }
        res.send({
            list
        });
    },
    // 'Get /api/user': {
    //     status: 'ok',
    //     currentAuthority: 'admin',
    // }
}