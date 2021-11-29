<template>
    <div>
        <app-header
            @change="pure = !pure"
            :style="{ marginBottom: pure ? '20px' : 0 }"
        />
        <f-render
            ref="renders"
            @save="handleSave"
            :loading="loading"
            height="calc(100vh - 150px)"
            :config="formConfig"
            v-model="formData"
            :pure="pure"
        />
    </div>

</template>

<script>
  import AppHeader from "./AppHeader";

  export default {
    components: {
      AppHeader
    },
    data() {
      return {
        loading: false,
        formConfig: "",
        formData: {},
        sure: false,
        pure: false
      };
    },
    methods: {
      handleSave(res) {
        localStorage.setItem("form-config", res);
        this.$message.success("保存成功啦~");
      },
      getDatas(data) {
        console.log(6);
        this.$refs.renders.setFormDesc({
          placeholder: "哈哈"
        });


      }
    },
    mounted() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.formConfig = localStorage.getItem("form-config") || "";
      }, 1000);
    }
  };
</script>

<style lang="scss"></style>
