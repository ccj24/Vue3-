<!--
 * @description: 
 * @param: params
 * @return: 
-->
<template>
  <div class="main">
    <el-container>
      <el-header>
        <div style="width: 400px">
          <p style="float: left">
            <el-icon color="#409EFF" :size="50">
              <ElementPlus />
            </el-icon>
          </p>
          <p style="float: left; font-size: 25px; font-weight: bold">
            欢迎来到酷我锦商城
          </p>
        </div>
      </el-header>
      <el-main>
        <el-card class="login_card">
          <!--:rules="rules"校验规则 -->
          <el-form
            :model="form"
            :rules="rules"
            ref="ruleFormRef"
            label-width="80px"
          >
            <el-form-item label="账号：" prop="username">
              <el-input v-model="form.username" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input
                type="password"
                placeholder="请输入密码"
                v-model="form.password"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit()">登录</el-button>
              <el-button type="primary" @click="resetForm()">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
      <el-footer>
        <p>关于我们 | xxxxxx | xxxxxx | xxxxxx | xxxxxx | xxxx | xxxxx</p>
        <p>Copyright © 2024-2024 <el-tag>xxxxxx</el-tag></p>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from "vue";
import userApi from "../api/user"; //获取user导出的所有接口
import { ElMessage } from "element-plus";
import router from "../router/index"; //导入路由用于页面跳转
const form = reactive({
  username: "",
  password: "",
});
const ruleFormRef = ref();
const { pxoxy } = getCurrentInstance();
// 新建校验规则
const rules = reactive({
  username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
});
// 登录校验
const onSubmit = () => {
  // pxoxy.$commonJs.changeView("/home");
  router.push("/home"); //跳转至主页
  // console.log(ruleFormRef, "ruleFormRef");
  // if (!ruleFormRef) return;
  // ruleFormRef.value.validate(async (valid) => {
  //   console.log(valid, "valid");
  //   if (valid) {
  //     const res = await userApi.login(form);
  //     if (res.data) {
  //       if (res.data.success) {
  //         router.push("/home");
  //       } else {
  //         ElMessage.error(res.data.message);
  //       }
  //     } else {
  //       ElMessage.error("服务器内部错误");
  //     }
  //   } else {
  //     return false;
  //   }
  // });
};
// 表单重置
const resetForm = () => {
  if (!ruleFormRef) {
    return;
  }
  ruleFormRef.value.resetFields();
};
</script>

<style scoped>
.el-container {
  height: 800px;
}
.el-header {
  height: 10%;
}
.el-footer {
  height: 10%;
  text-align: center;
}
.main {
  height: 100%;
  width: 100%;
  background-image: url("../assets/img/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 120%;
  background-position-y: bottom;
}
.login_card {
  margin: 100px auto;
  width: 20%;
  min-width: 300px;
  height: 200px;
  border-radius: 10px;
}
</style>
