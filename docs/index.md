# 简介

## 什么是Pen?

`pen` 是`go`语言的`web` [gen](https://cs.lmu.edu/~ray/notes/codegen/) 框架,协助`go`开发人员快速构建`web`企业级项目框架。 基于标准`go`官方库，以及少量第三方库实现封装实现。
`pen`通过自定义模版项目，提供快速开发起手式。 让用户以最少的时间，快速搭建流程清晰的后端项目。


## 快速RSM生成

`pen`提供快速的服务代码生成，通过输入模型名称即可生成增删改查代码，方便快速服务建设。

[点击查看演示](https://rr13k.github.io/pen-utils/)

## 特性

`pen` 具有独特的开发理念，这些行为指导了整体框架的走向

- **少第三方**： 框架构建时, 将极少使用第三方库进行架构。

- **单文件组件**：架构提供的组件方式为单文件, 用户只需以适当方式引入即可。

- **模型Api生成**：按照模型配置, 自动生成Model-Server-Router完整的api接口。

