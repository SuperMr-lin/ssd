import moment from 'moment';

export function getEchartsList (currentdate)  {
    const { dispatch } = this.props;
    if (currentdate === "") {
        const dateFormat = 'YYYY-MM-DD';
        currentdate = moment().format(dateFormat);
    }
    const echartsUrl = this.props.location.state.type;
    const payload = {
        tjrq: currentdate,
        echartsUrl: echartsUrl
    }
    dispatch({
        type: 'echarts/fetchEcharts',
        payload: { payload }
    }).then((res) => {
        const echartsTitle = this.props.location.query.name;
        const NewOption = this.getOption(res.data.data, echartsTitle);
        this.setState({
            loading: true,
            option: NewOption
        })
    })
}


export function handleSubmit  (e) {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
        if (!err) {
            const currentdate = values['date-picker'].format('YYYY-MM-DD');
            if (this.state.tjrq === currentdate) {
                return;
            } else {
                this.setState(() => ({
                    tjrq: currentdate
                }))
                this.getEchartsList(currentdate);
            }
        }
    });
}