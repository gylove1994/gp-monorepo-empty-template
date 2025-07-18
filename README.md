# GP Monorepo Empty Template

一个基于 pnpm + Turbo 的现代化 monorepo 模板，专为快速启动多包项目而设计。

## 🚀 特性

- **📦 Monorepo 架构**: 使用 pnpm workspace 管理多个包和应用
- **⚡ 极速构建**: 基于 Turbo 的增量构建和缓存
- **🔧 TypeScript 支持**: 完整的 TypeScript 配置
- **📝 ESLint 配置**: 使用 @antfu/eslint-config 的现代化代码规范
- **🧪 测试支持**: 集成 Vitest 测试框架
- **🎯 零配置**: 开箱即用的开发环境

## 📁 项目结构

```
gp-monorepo-empty-template/
├── apps/                    # 应用程序目录
├── packages/                # 共享包目录
├── package.json            # 根包配置
├── pnpm-workspace.yaml     # pnpm 工作区配置
├── turbo.json              # Turbo 构建配置
├── tsconfig.json           # TypeScript 配置
├── eslint.config.mjs       # ESLint 配置
└── vitest.config.ts        # Vitest 测试配置
```

## 🛠️ 技术栈

- **包管理器**: pnpm 9.15.9
- **构建工具**: Turbo 2.5.5
- **语言**: TypeScript 5.8.3
- **代码规范**: ESLint 9.31.0 + @antfu/eslint-config
- **测试框架**: Vitest 3.2.4

## 📦 安装

确保您的系统已安装 Node.js (推荐 18+) 和 pnpm。

```bash
# 克隆项目
git clone https://github.com/gylove1994/gp-monorepo-empty-template.git
cd gp-monorepo-empty-template

# 安装依赖
pnpm install
```

## 🚀 使用

### 开发命令

```bash
# 构建所有包
pnpm build

# 运行所有包的测试
pnpm test

# 运行所有包的 lint 检查
pnpm lint

# 开发模式
pnpm dev
```

### 添加新的应用

1. 在 `apps/` 目录下创建新的应用目录
2. 在应用目录中创建 `package.json`
3. 运行 `pnpm install` 安装依赖

### 添加新的包

1. 在 `packages/` 目录下创建新的包目录
2. 在包目录中创建 `package.json`
3. 运行 `pnpm install` 安装依赖

## 📋 可用的脚本

| 命令 | 描述 |
|------|------|
| `pnpm build` | 构建所有包和应用 |
| `pnpm test` | 运行所有测试 |
| `pnpm lint` | 运行代码规范检查 |
| `pnpm dev` | 启动开发模式 |
| `pnpm clean` | 清理构建缓存 |

## 🔧 配置说明

### Turbo 配置

项目使用 Turbo 进行构建优化，主要配置包括：

- **构建缓存**: 自动缓存构建结果，提升重复构建速度
- **依赖管理**: 自动处理包之间的依赖关系
- **并行执行**: 支持并行构建和测试

### ESLint 配置

使用 @antfu/eslint-config 提供现代化的代码规范：

- TypeScript 支持
- React 支持 (如果使用)
- 自动格式化
- 最佳实践规则

### TypeScript 配置

提供统一的 TypeScript 配置，支持：

- 严格模式
- 模块解析
- 路径映射
- 类型检查

## 🤝 贡献

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Turbo](https://turbo.build/) - 极速构建系统
- [pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器
- [@antfu/eslint-config](https://github.com/antfu/eslint-config) - 现代化的 ESLint 配置

---

**开始使用**: 运行 `pnpm install` 安装依赖，然后查看 `apps/` 和 `packages/` 目录开始开发！ 