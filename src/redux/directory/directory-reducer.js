const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            imageUrl:
                "https://images.unsplash.com/photo-1565839412225-98641b2d7b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            id: 1,
            linkUrl: "hats",
        },
        {
            title: "jackets",
            imageUrl:
                "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
            id: 2,
            linkUrl: "",
        },
        {
            title: "sneakers",
            imageUrl:
                "https://images.unsplash.com/photo-1580813089076-7a92471e7074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=80",
            id: 3,
            linkUrl: "",
        },
        {
            title: "women",
            imageUrl:
                "https://images.unsplash.com/photo-1596725649320-7f257a9da04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
            size: "large",
            id: 4,
            linkUrl: "",
        },
        {
            title: "men",
            imageUrl:
                "https://images.unsplash.com/photo-1532789207428-eb0c63ae912a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
            size: "large",
            id: 5,
            linkUrl: "",
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}

export default directoryReducer;