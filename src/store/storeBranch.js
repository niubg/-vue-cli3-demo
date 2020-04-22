const storeBranch = {
    // 命名空间
    namespaced: true,
    state: {
        name: "storeBranch"
    },
    mutations: {

    },
    actions: {
        getInfo() {
            console.log("这是从Store中打印出来的！")
        }
    }
}

export default storeBranch