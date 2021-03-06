export default {
    namespace: 'menu',   //表示对于整个应用不同的命名空间,以便通过this.props.example访问，和当前model文件名相同就好之前的reducer名字相同，是全局state的属性，只能为字符串，不支持.的方式建立多重
    state: {
        MenuChildrenItem: [
            {
                id: '1.1',
                title: "院长日报"
            },
            {
                id: '1.2',
                title: "KPI指标"
            }
        ]
    },     //表示当前的example中的state状态，这里可以给初始值
    effects: {
        *fetch({ payload }, { call, put }) {
            //payload是从组件router传递过来的参数,
            //这里的call方法可以使用payload参数传递给后台程序进行处理这里可以调用service层的方法进行调用后端程序，
            //这里的put表示存储在当前命名空间example中，通过save方法存在当前state中
            yield put({ type: 'save' });
        },
    },
    //用来保存更新state值 上面的put方法调用这里的方法
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        handleClick(state) {

        }
    },
    subscriptions: {
        setup({ dispatch, history }) {  // 订阅，可以监听服务器连接，键盘输入，路由，状态等的变化
        },
    },

};
