<template>
  <div>
    <el-card>
      <el-input
        style="width: 440px"
        @clear="searchUser"
        clearable
        v-model="searchForm.name"
        placeholder="请输入用户姓名"
        class="input-with-select"
      >
        <template #append>
          <el-button icon="Search" @click="searchUser" />
        </template>
      </el-input>
    </el-card>
  </div>
</template>
<script setup>
import { reactive } from "vue";
// 搜索条件
const searchForm = reactive({
  current: 1,
  size: 10,
  name: "",
});
const searchUser = () => {
  searchForm.current = 1;
  getUserList();
};
</script>
