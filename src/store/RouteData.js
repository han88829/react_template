// 无法动态匹配面包屑，存储路由数据
const RouteData = [
    {
        name: "个人中心",
        key: "user",
        icon: "user",
        path: "/app/user",
        children: [
            {
                name: "个人",
                path: "/app/user",
                key: "user1",
            }
        ]
    },
]

export default RouteData;