# 下一步：按课程逐项完善

1. **先合并你已有的 QuickBite 后端。** 当前仓库是新骨架；你的课程项目源码还没有导入。保留已有登录、注册、退出与购物车代码，逐文件比对，不要整目录覆盖。
2. **数据库与 Repository（Lesson 7–9）。** 启动 PostgreSQL，把 JDBC 依赖换为 Boot starter，配置环境变量；将实体和仓库接入 Spring。不要在已有数据库运行重建脚本。
3. **Service 与 Controller（Lesson 11–13）。** 用数据库实现 RestaurantService/MenuItemService，随后实现 CartService。先验证两个菜单接口。
4. **Authentication（Lesson 14）。** 实现 CustomerService、密码哈希、UserDetailsService、/signup 和表单 /login；加 CSRF token 获取流程，验证退出后 /cart 返回 401。当前没有默认登录账号。
5. **页面（Lesson 21）。** 现有路由都已预留；补充筛选、UI 组件、登录注册表单与购物车页面。
6. **联调（Lesson 22）。** 接 SessionProvider、路由守卫、Query mutation/cache 失效；处理 401 与切换账号时的私有缓存。不要用 localStorage 标志代替服务端会话。
7. **部署。** 前端 npm run build 生成 dist；后端镜像先本地验证，再选择课程中的 AWS 部署路线。

## 完成检查
- [ ] 注册、登录、刷新、退出均与服务端一致
- [ ] 不同用户不能访问彼此购物车
- [ ] 下单前从服务端价格计算总额；明确是否需要真实订单持久化
- [ ] 请求验证、异常处理、CSRF 与金额精度测试
- [ ] README 按实际进度更新，补真实演示截图
