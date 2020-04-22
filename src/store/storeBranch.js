const storeBranch = {
    // 是否为命名空间
    namespaced: true,
    state: {
        name: "storeBranch"
    },
    mutations: {

    },
    actions: {
        getInfo() {
            console.log("这是从storeBranch中打印出来的！")
        }
    }
}

export default storeBranch