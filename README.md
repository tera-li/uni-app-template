# my-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### commit command
```$xslt
git-cz
```

### 目录结构
```$xslt
└─dist              # 打包目录
└─node_modules      # 依赖
└─public            # index入口、静态资源
└─src               # 源代码
    └─common        # 公共
        ├─api       # 接口方法
        ├─css       # 公共样式
        ├─filter    # 公共过滤器
        ├─js        # 公共方法
    ├─components    # 公共组件
    └─pages         # 主包
        ├─index     # 首页
        ├─info      # 个人中心
        ├─service   # 技术服务
        ├─shop      # 购物车
        ├─type      # 分类
    ├─services      # 技术服务分包
    ├─shops         # 购物车分包
    ├─types         # 分类分包
    ├─infos         # 个人中心分包
    ├─login         # 登录分包
    ├─static        # 主包静态文件
    ├─store         # vuex
    ├─uni_modules   # uni-ui组件
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
