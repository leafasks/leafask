# 数据填写指南

## 1. 填写数据集

在上方文件框中点击 `data` 文件夹，进入 `dataset.ts` 进行修改，可以添加数据：

每条数据集数据的格式如下：

```ts
{
    id: 1,
    name: "数据集数据1",
    image: "/dataset/example1.jpg"
}
```
你需要将图片上传到 `public/dataset` 文件夹中，然后在 `image` 中填写图片的路径。填写路径时只需要填写相对于 `public` 文件夹的路径即可。比如，图片的路径为 `public/dataset/example1.jpg`，则在 `image` 中填写 `/dataset/example1.jpg` 即可。填写完毕后点击下方 `Commit changes` 提交修改。

![1680162015314](https://user-images.githubusercontent.com/83146544/228764764-b2851830-b16e-4b04-9e5a-44f07d290b4d.png)

![1680162100071](https://user-images.githubusercontent.com/83146544/228765090-fc68dc66-7b99-4a00-83f2-5c74734c6136.png)

![1680162132071](https://user-images.githubusercontent.com/83146544/228765234-b3c4189e-e404-4ee1-bebf-08b05fe757cf.png)

![1680162165549](https://user-images.githubusercontent.com/83146544/228765350-b1f636dd-86d3-41e9-8d45-182487a05662.png)



## 2. 填写科普

在上方文件框中点击 `data` 文件夹，进入 `education.ts` 进行修改，可以添加科普，每条数据的格式如下：

```ts
{
    id: 1,
    name: "真菌性病害的防治",
    description: "教育数据1的描述",
    image: "/education/example1.jpg"
},
```
请保证 id 是唯一的。你需要将图片上传到 `public/education` 文件夹中，然后在 `image` 中填写图片的路径。填写路径时只需要填写相对于 `public` 文件夹的路径即可。比如，图片的路径为 `public/education/example1.jpg`，则在 `image` 中填写 `/education/example1.jpg` 即可。填写完毕后点击下方 `Commit changes` 提交修改。

当上面的数据填写完毕后，即可触发服务器自动部署，部署完成后即可访问网站。
