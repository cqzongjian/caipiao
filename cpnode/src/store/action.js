export default{
    login({commit,state}){
        //执行登录操作
        commit('LOGIN');
    },
	setUserInfo({commit,state},userInfo){
	    //存用户信息
	    commit('userInfo',userInfo);
	},
    logout({commit,state}){
        commit('LOGOUT')
    },
    selectDlt({commit,state},dltObj){
        commit('DLT',dltObj)
    },
    clearDlt({commit,state}){
        commit('CDLT')
    },
    delDlt({commit,state},id){
        commit('DELDLT',id)
    },
    selectDbc({commit,state},dbcObj){
        commit('DBC',dbcObj)
    },
    clearDbc({commit,state}){
        commit('CDBC')
    },
    delDbc({commit,state},id){
        commit('DELDBC',id);
    },
    selectFc({commit,state},dbcObj){
        commit('FC',dbcObj)
    },
    clearFc({commit,state}){
        commit('CFC')
    },
    delFc({commit,state},id){
        commit('DELFC',id);
    },
    selectPlt({commit,state},dbcObj){
        commit('PLT',dbcObj)
    },
    clearPlt({commit,state}){
        commit('CPLT')
    },
    delPlt({commit,state},id){
        commit('DELPLT',id);
    },
    selectPlf({commit,state},dbcObj){
        commit('PLF',dbcObj)
    },
    clearPlf({commit,state}){
        commit('CPLF')
    },
    delPlf({commit,state},id){
        commit('DELPLF',id);
    },
    selectQxc({commit,state},dbcObj){
        commit('QXC',dbcObj)
    },
    clearQxc({commit,state}){
        commit('CQXC')
    },
    delQxc({commit,state},id){
        commit('DELQXC',id);
    },
    selectQlc({commit,state},dbcObj){
        commit('QLC',dbcObj)
    },
    clearQlc({commit,state}){
        commit('CQLC')
    },
    delQlc({commit,state},id){
        commit('DELQLC',id);
    }
}
//异步逻辑分装action中，设计失误