export default {
    'POST /api/user': (req, res) => {
        const { password, userName} = req.body;
        if ( userName === 'admin' && password === '0000' ) {
            res.send({
                status: 'ok',
                currentAuthority: 'admin',
            });
            return;
        }
        res.send({
            status: 'error',
            currentAuthority: 'guest'
        });
    },
    // 'Get /api/user': {
    //     status: 'ok',
    //     currentAuthority: 'admin',
    // }
}