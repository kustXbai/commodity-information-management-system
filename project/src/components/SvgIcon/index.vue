<template>
    <div>
      <svg :style="{ width: width, height: height }">
        <use :xlink:href="prefix + name" :fill="color"></use>
      </svg>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    //xlink:href属性值的前缀
    prefix: {
      type: String,
      default: '#icon-'
    },
    //svg矢量图的名字
    name: String,
    //svg图标的颜色
    color: {
      type: String,
      default: ""
    },
    //svg宽度
    width: {
      type: String,
      default: '16px'
    },
    //svg高度
    height: {
      type: String,
      default: '16px'
    }
  
  })
  </script>

function defineProps(arg0: {
  //xlink:href属性值的前缀
  prefix: { type: StringConstructor; default: string; };
  //svg矢量图的名字
  name: StringConstructor;
  //svg图标的颜色
  color: { type: StringConstructor; default: string; };
  //svg宽度
  width: { ...; };
  //svg高度
  height: { ...; };
}) {
  throw new Error("Function not implemented.");
}
  <style scoped></style>