


# c-render-proejct | 基于 ElementUI 的表单设计器

- [教程](#%E6%95%99%E7%A8%8B)
- [1 分钟快速接入](#1-%E5%88%86%E9%92%9F%E5%BF%AB%E9%80%9F%E6%8E%A5%E5%85%A5)
    - [第 1 步：安装](#%E7%AC%AC-1-%E6%AD%A5%E5%AE%89%E8%A3%85)
    - [第 2 步：注册](#%E7%AC%AC-2-%E6%AD%A5%E6%B3%A8%E5%86%8C)
    - [第 3 步：使用](#%E7%AC%AC-3-%E6%AD%A5%E4%BD%BF%E7%94%A8)
- [用户模式](#%E7%94%A8%E6%88%B7%E6%A8%A1%E5%BC%8F)
    - [基于 c-render-project 的配置](#%E5%9F%BA%E4%BA%8E-f-render-%E7%9A%84%E9%85%8D%E7%BD%AE)
    - [基于 vue-ele-form 的配置](#%E5%9F%BA%E4%BA%8E-vue-ele-form-%E7%9A%84%E9%85%8D%E7%BD%AE)
- [定制化](#%E5%AE%9A%E5%88%B6%E5%8C%96)
  - [新增官方扩展组件（以富文本扩展为例）](#%E6%96%B0%E5%A2%9E%E5%AE%98%E6%96%B9%E6%89%A9%E5%B1%95%E7%BB%84%E4%BB%B6%E4%BB%A5%E5%AF%8C%E6%96%87%E6%9C%AC%E6%89%A9%E5%B1%95%E4%B8%BA%E4%BE%8B)
    - [安装组件](#%E5%AE%89%E8%A3%85%E7%BB%84%E4%BB%B6)
    - [注册组件](#%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6)
    - [配置属性](#%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7)
  - [新增自定义组件](#%E6%96%B0%E5%A2%9E%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)
    - [创建组件并全局注册](#%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6%E5%B9%B6%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)
    - [书写配置](#%E4%B9%A6%E5%86%99%E9%85%8D%E7%BD%AE)
    - [合并配置并传入](#%E5%90%88%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%B9%B6%E4%BC%A0%E5%85%A5)
  - [定制化原组件配置 & 表单配置](#%E5%AE%9A%E5%88%B6%E5%8C%96%E5%8E%9F%E7%BB%84%E4%BB%B6%E9%85%8D%E7%BD%AE--%E8%A1%A8%E5%8D%95%E9%85%8D%E7%BD%AE)
  - [定制化右侧 Tabs](#%E5%AE%9A%E5%88%B6%E5%8C%96%E5%8F%B3%E4%BE%A7-tabs)
  - [样式定制化](#%E6%A0%B7%E5%BC%8F%E5%AE%9A%E5%88%B6%E5%8C%96)
- [二次开发](#%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91)
- [f-render 问答集锦](#f-render-%E9%97%AE%E7%AD%94%E9%9B%86%E9%94%A6)
- [Props 说明](#props-%E8%AF%B4%E6%98%8E)
- [插槽](#%E6%8F%92%E6%A7%BD)
- [生态](#%E7%94%9F%E6%80%81)
- [特别感谢赞助者](#%E7%89%B9%E5%88%AB%E6%84%9F%E8%B0%A2%E8%B5%9E%E5%8A%A9%E8%80%85)
- [Contributors ✨](#contributors-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 介绍

c-render-project 是基于 [vue-ele-form](https://github.com/dream2023/vue-ele-form) 开发的可视化表单设计工具, 适用于 各种流程引擎和动态表单项目，大大节省你的开发时间；



## 注意

注意，此设计器不是独立存在的，是依托于 [vue-ele-form](https://github.com/dream2023/vue-ele-form)，在使用前请务必阅读 [vue-ele-form 的文档](https://www.yuque.com/chaojie-vjiel/vbwzgu/xl46cd)。

## 特性

- 组件方式：以组件方式接入，1 分钟轻松接入；
- 体积小：Gzip 压缩后 `100k` 左右；
- 易扩展：可以在`不更改源码`的情况下增删改属性、组件；




## 1 分钟快速接入

#### 第 1 步：安装

```bash
yarn add element-ui  # npm install element-ui -S
yarn add vue-ele-form # npm install vue-ele-form -S
yarn add c-render-project # npm install c-render-project -S
```

#### 第 2 步：注册

```js
// vue-ele-form 的注册可参考：https://www.yuque.com/chaojie-vjiel/vbwzgu/xl46cd
import EleForm from "vue-ele-form";
import CRender from "c-render-project";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.use(EleForm);
Vue.component("c-render", CRender);
```

#### 第 3 步：使用

```html
<template>
  <c-render
    @save="handleSave"
    :loading="loading"
    height="calc(100vh - 60px)"
    :config="formConfig"
  />
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        formConfig: {}
      };
    },
    methods: {
      handleSave(res) {
        // 这里是保存到 localStorage，你可以保存到服务器
        localStorage.setItem("form-config", res);
        this.$message.success("保存成功啦~");
      }
    },
    mounted() {
      // 模拟异步加载
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.formConfig = localStorage.getItem("form-config") || "";
      }, 1000);
    }
  };
</script>
```

## 用户模式

我们把动态表单分为两个阶段：

- 首先是设计阶段：通过拖拽设计表单；
- 然后是用户阶段：将设计好的表单以纯表单的形式让用户填写。

我们别分称这两个阶段的表单为设计模式和用户模式。设计模式的表单配置我们已经讲了，下面看用户模式下的表单配置：

#### 基于 c-render-project 的配置

通过属性 `pure`, 可以直接做为表单使用，其数据提交方式同 `vue-ele-form` 一样，具体可查看[文档](https://www.yuque.com/chaojie-vjiel/vbwzgu/zbu9mn)。

```html
<template>
  <c-render
    v-model="formData"
    :request-fn="handleSubmit"
    @request-success="handleSuccess"
    :config="formConfig"
    pure
  />
</template>

<script>
  export default {
    data() {
      return {
        formData: {},
        formConfig: ""
      };
    },
    methods: {
      handleSubmit(data) {
        // eslint-disable-next-line no-console
        console.log(data);
        return Promise.resolve();
      },
      handleSuccess() {
        this.$message.success("创建成功");
      }
    },
    mounted() {
      // 模拟异步加载
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.formConfig = localStorage.getItem("form-config") || "";
      }, 1000);
    }
  };
</script>
```

#### 基于 vue-ele-form 的配置

如果你的可视化设计和表单使用，不再一个系统，可以直接使用 `vue-ele-form`，不必安装 `c-render-project`，具体如下：

```html
<template>
  <ele-form
    v-model="formData"
    :request-fn="handleSubmit"
    @request-success="handleSuccess"
    v-if="formConfig"
    v-bind="formConfig"
  />
</template>

<script>
  export default {
    data() {
      return {
        formData: {},
        formConfig: null
      };
    },
    methods: {
      handleSubmit(data) {
        // eslint-disable-next-line no-console
        console.log(data);
        return Promise.resolve();
      },
      handleSuccess() {
        this.$message.success("创建成功");
      }
    },
    mounted() {
      // 模拟异步加载
      setTimeout(() => {
        try {
          // 这里必须对字符串进行反序列化
          this.formConfig = eval(`(${localStorage.getItem("form-config")})`);
        } catch {
          this.$message.error("数据解析失败");
        }
      }, 1000);
    }
  };
</script>
```

## 定制化

### 新增官方扩展组件（以富文本扩展为例）

#### 安装组件

```bash
yarn add vue-ele-form-quill-editor
```

#### 注册组件

```js
Vue.component("quill-editor", EleFormQuillEditor);
```

#### 配置属性

```html
<template>
  <!-- 省略其它属性 -->
  <c-render :comps="comps" />
</template>

<script>
  // 默认配置
  import comps from "f-render/src/fixtures/comps";
  // 富文本配置
  import quillEditor from "f-render/src/fixtures/extends/quill-editor";
  // 可以更改显示组件位置，默认为 10
  // 这里更改为 2，显示更靠前
  quillEditor.sort = 2;

  export default {
    data() {
      return {
        // 拼接上即可
        comps: comps.concat(quillEditor)
      };
    }
  };
</script>
```

### 新增自定义组件

#### 创建组件并全局注册

需要根据 vue-ele-form 文档[创建自定义组件](https://www.yuque.com/chaojie-vjiel/vbwzgu/ugumna)，并注册。

#### 书写配置

你可以参考[源码中的配置]('./src/fixtures/comps.js')，一下是范例和属性说明：

```js
// custom-url.js
export default {
  // 假如这个组件叫 url（必填）
  type: "custom-url",
  // 默认标签名（必填）
  label: "URL",
  // 用于排序，值越小，越靠前
  sort: 1,
  // 属性配置
  config: {
    // 属性配置说明地址（可省略）
    url: "https://www.xxx.com",
    // 组件属性配置（不知道啥是组件属性，可以看一下界面右侧）
    attrs: {
      // config 配置 参考 FormDesc:
      // https://www.yuque.com/chaojie-vjiel/vbwzgu/iw5dzf#KOPkD
      config: {
        // max 为属性名
        max: {
          type: "number",
          label: "最大输入长度"
        },
        name: {
          type: "input",
          label: "原生 name",
          // 必填
          required: true
        }
        // ....
      },
      // 默认值，如果在配置文件里设置了，则每个组件都会携带
      data: {
        name: "url"
      }
    },
    // 表单项配置，是 FormDesc 中非 attrs 的其它配置，
    // 具体可看：https://www.yuque.com/chaojie-vjiel/vbwzgu/iw5dzf#hl4pm
    common: {
      config: {
        // 默认值
        default: {
          type: "input",
          label: "默认值"
        }
      },
      data: {}
    }
  }
};
```

#### 合并配置并传入

```html
<template>
  <!-- 省略其它属性 -->
  <c-render :comps="comps" />
</template>

<script>
  import comps from "f-render/src/fixtures/comps";
  import customUrl from "some/path/custom-url";
  export default {
    data() {
      return {
        comps: comps.concat(customUrl)
      };
    }
  };
</script>
```

### 定制化原组件配置 & 表单配置

- 组件配置目录：`f-render/src/fixtures/comps.js`
- 表单配置目录：`f-render/src/fixtures/form-props.js`
- 表单项通用属性配置：`f-render/src/fixtures/form-item-common.js`
- 扩展组件目录：`f-render/src/fixtures/extends/[扩展组件名].js`

如果你想修改组件属性或者表单的属性，减少或者增加组件，可以将上述文件`拷贝到自己的项目`目录，参考上述配置说明，进行更改，并传入即可：

```html
<!-- formProps 是表单属性 -->
<!-- comps 是组件列表和属性 -->
<!-- formItemCommon 是表单项通用属性配置 -->
<f-render
  :form-props="formProps"
  :comps="comps"
  :form-item-common="formItemCommon"
/>
```

具体而言，如果想让每个 `input` 组件都携带 `clearable: true` 的属性，我们可以这样操作：

```html
<template>
  <!-- 其它属性省略 -->
  <!-- 将更改后的 comps 传递过去即可 -->
  <c-render :comps="comps" />
</template>

<script>
  import comps from "f-render/src/fixtures/comps";
  // 查找 input 组件，当然你也可以看源码，直接查看索引
  const inputIndex = comps.findIndex(item => item.type === "input");
  // 更改 config.attrs.data 值即可
  comps[inputIndex].config.attrs.data = { clearable: true };

  export default {
    data() {
      return {
        comps
      };
    }
  };
</script>
```

### 定制化右侧 Tabs

我们可以通过 `isShowRight` 属性来控制右侧面板是否显示，通过 `rightTabs` 来定制具体显示的面板名称，具体如下：

```html
<template>
  <!-- 定制化右侧 tabs -->
  <f-render :right-tabs="tabs" />
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          { label: "表单项属性配置", name: "form-item-common" },
          { label: "组件属性配置", name: "form-item-attrs" }
          // 注释下面的内容，就可以不显示
          // { label: "表单配置", name: "form-props" }
        ]
      };
    }
  };
</script>
```

### 样式定制化

直接进行样式覆盖即可，注意不要加 `scoped`，否则覆盖不成功

## 二次开发

如果仅通过`属性`和`样式`定制化已无法满足的你和你产品经理的要求，那就需要进行定制化开发，我个人觉得代码整体还是非常简单的，你可以 `clone` 代码或者下载后（建议用[gitee](https://gitee.com/dream2023/f-render)），进行相应的更改，更改后有两种处理方式:

- 直接放到项目目录里，并将安装 `dependencies` 的依赖复制到项目，进行开发即可；
- 直接开发，然后发布到公司[私服](https://www.npmjs.com/package/verdaccio)，如果是开源，则可以发到 GitHub 或者 gitee，然后安装自己的即可

具体的细节，开头提的[教程](https://www.lanqiao.cn/courses/2848)里会有详细的过程，希望大家可以支持一下。

## f-render 问答集锦

- [1、c-render-project 不能做什么？](https://www.yuque.com/chaojie-vjiel/vbwzgu/adz8q8#0nlfc)
- [2、怎么实现 options URL 配置？](https://www.yuque.com/chaojie-vjiel/vbwzgu/adz8q8#gvS8c)

## Props 说明

```js
props: {
  // 表单内容
  config: {
    type: [Object, String],
    required: true
  },
  // 设计器整体高度
  height: {
    type: [String, Number],
    default: "400px"
  },
  // 保存格式
  saveFormat: {
    type: String,
    default: "string",
    validator(val) {
      return ["object", "string"].includes(val);
    }
  },
  // 是否纯净（用于显示表单）
  pure: Boolean,
  // 表单配置
  formProps: {
    type: Object,
    default: () => formProps
  },
  // 表单项配置
  formItemCommon: {
    type: Object,
    default: () => formItemCommonDefault
  },
  // 组件列表
  comps: {
    type: Array,
    default: () => comps
  },
  // 操作配置
  operations: {
    type: Array,
    default: () => ["preview", "data", "code", "batch", "clear", "save"]
  },
  // 是否显示右侧
  isShowRight: {
    type: Boolean,
    default: true
  },
  // 右侧属性面板 Tabs
  rightTabs: {
    type: Array,
    default: () => [
      { label: "表单项属性配置", name: "form-item-common" },
      { label: "组件属性配置", name: "form-item-attrs" },
      { label: "表单配置", name: "form-props" }
    ]
  },
  // 是否在加载
  loading: Boolean,

  // 表单相关（pure 为 true 时）, 同 vue-ele-form
  // https://www.yuque.com/chaojie-vjiel/vbwzgu/dyw8a7
  requestFn: Function,
  isLoading: Boolean,
  formError: Object,
  // ....
},
```

## 插槽

- left：左侧组件列表
- main: 中间区域
- main-header: 头部操作区
- main-content: 表单设计区
- right: 右侧属性配置区

举例：

```html
<template>
  <f-render>
    <!-- 左侧插槽 -->
    <template v-slot:left="{frender}">
      <div>
        <div>left</div>
        <div>{{frender.comps}}</div>
      </div>
    </template>
  </f-render>
  <template></template
></template>
```

其中 `frender` 数据是 `f-render` 组件数据的集合，具体都有哪些数据，可以参考[源码](https://gitee.com/dream2023/f-render/blob/master/src/f-render.vue)，其它插槽均有此参数。

## 生态

| Project                                                                                   | Status                                                                                                                         | Description                                |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| [vue-ele-form](https://github.com/dream2023/vue-ele-form)                                 | [![npm](https://img.shields.io/npm/v/vue-ele-form)](https://github.com/dream2023/vue-ele-form)                                 | 接基于 ElementUI 的数据驱动表单            |
| [f-render](https://github.com/dream2023/f-render)                                         | [![npm](https://img.shields.io/npm/v/f-render)](https://github.com/dream2023/f-render)                                         | 专为 vue-ele-form 开发的可视化表单设计工具 |
| [vue-ele-form-json-editor](https://github.com/dream2023/vue-ele-form-json-editor)         | [![npm](https://img.shields.io/npm/v/vue-ele-form-json-editor)](https://github.com/dream2023/vue-ele-form-json-editor)         | JSON 编辑器(vue-ele-form 扩展)             |
| [vue-ele-form-upload-file](https://github.com/dream2023/vue-ele-form-upload-file)         | [![npm](https://img.shields.io/npm/v/vue-ele-form-upload-file)](https://github.com/dream2023/vue-ele-form-upload-file)         | upload 文件上传组件(vue-ele-form 扩展)     |
| [vue-ele-form-image-uploader](https://github.com/dream2023/vue-ele-form-image-uploader)   | [![npm](https://img.shields.io/npm/v/vue-ele-form-image-uploader)](https://github.com/dream2023/vue-ele-form-image-uploader)   | 上传图片增强组件(vue-ele-form 扩展)        |
| [vue-ele-form-tree-select](https://github.com/dream2023/vue-ele-form-tree-select)         | [![npm](https://img.shields.io/npm/v/vue-ele-form-tree-select)](https://github.com/dream2023/vue-ele-form-tree-select)         | 树形选择框组件(vue-ele-form 扩展)          |
| [vue-ele-form-table-editor](https://github.com/dream2023/vue-ele-form-table-editor)       | [![npm](https://img.shields.io/npm/v/vue-ele-form-table-editor)](https://github.com/dream2023/vue-ele-form-table-editor)       | 表格编辑器(vue-ele-form 扩展)              |
| [vue-ele-form-dynamic](https://github.com/dream2023/vue-ele-form-dynamic)                 | [![npm](https://img.shields.io/npm/v/vue-ele-form-dynamic)](https://github.com/dream2023/vue-ele-form-dynamic)                 | 动态表单(vue-ele-form 扩展)                |
| [vue-ele-form-video-uploader](https://github.com/dream2023/vue-ele-form-video-uploader)   | [![npm](https://img.shields.io/npm/v/vue-ele-form-video-uploader)](https://github.com/dream2023/vue-ele-form-video-uploader)   | 上传视频增强组件(vue-ele-form 扩展)        |
| [vue-ele-form-quill-editor](https://github.com/dream2023/vue-ele-form-quill-editor)       | [![npm](https://img.shields.io/npm/v/vue-ele-form-quill-editor)](https://github.com/dream2023/vue-ele-form-quill-editor)       | 富文本编辑器(vue-ele-form 扩展)            |
| [vue-ele-form-markdown-editor](https://github.com/dream2023/vue-ele-form-markdown-editor) | [![npm](https://img.shields.io/npm/v/vue-ele-form-markdown-editor)](https://github.com/dream2023/vue-ele-form-markdown-editor) | markdown 编辑器(vue-ele-form 扩展)         |
| [vue-ele-form-bmap](https://github.com/dream2023/vue-ele-form-bmap)                       | [![npm](https://img.shields.io/npm/v/vue-ele-form-bmap)](https://github.com/dream2023/vue-ele-form-bmap)                       | 百度地图组件(vue-ele-form 扩展)            |
| [vue-ele-form-codemirror](https://github.com/dream2023/vue-ele-form-codemirror)           | [![npm](https://img.shields.io/npm/v/vue-ele-form-codemirror)](https://github.com/dream2023/vue-ele-form-codemirror)           | 代码编辑器(vue-ele-form-gallery 扩展)      |
| [vue-ele-form-gallery](https://github.com/dream2023/vue-ele-form-gallery)                 | [![npm](https://img.shields.io/npm/v/vue-ele-form-gallery)](https://github.com/dream2023/vue-ele-form-gallery)                 | 图片/视频展示组件(vue-ele-form 扩展)       |
| [vue-ele-form-data-editor](https://github.com/dream2023/vue-ele-form-data-editor)         | [![npm](https://img.shields.io/npm/v/vue-ele-form-data-editor)](https://github.com/dream2023/vue-ele-form-data-editor)         | 轻量级数据编辑器(vue-ele-form 扩展)        |
