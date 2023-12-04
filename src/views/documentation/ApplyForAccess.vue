<script setup lang="ts">

</script>

<template>
    <div>
      <el-container class="page-container">
        <el-header class="page-title">Apply for access</el-header>
        <el-container>
          <el-aside class="page-aside">
            <p>PLCT RISC-V Lab</p>
            <el-icon><Link /></el-icon>
            <p class="aside-date">November 22, 2023</p>
          </el-aside>
          <el-container>
            <el-main class="sub-container">
              <div class="main-content">
                <p>
                  Access to the RISC-V testbed is free for scientific and engieering workloads. There are two steps required for accessing the system, firstly we need to approve your access and secondly you will need to sign up to the system.
                </p>
                <h2 class="main-title">
                  Step one, access approval
                </h2>
                <p>
                  You should first send an email to riscv-testbed@mlist.is.ed.ac.uk giving a brief description of who you are, your institution affiliation and what you are planning to use the
                  RISC-V testbed for (e.g. what codes you are interested in accelerating). There are two purposes to this step, firstly ensuring that users are utilising the system appropriately but also we are able to offer software support.
                </p>
                <h2 class="main-title">
                  Step two, apply for access via SAFE
                </h2>
                <p>
                  You should only do this step after receiving a reply from the previous step. The machine is managed by SAFE, and to request an account you should visit 
                  <a href="https://safe.epcc.ed.ac.uk/" class="link-style">https://safe.epcc.ed.ac.uk/</a>
                  and sign up. This is a two stage process, you first sign up for a web account, and once that is created go into SAFE and click Login accounts and Request login account. Enter the project code 
                  <code>nx09</code>
                  and request an account on 
                  <code>hydra-vpn</code>
                  . Once you have applied for an account it typically takes a few hours for it to be created, and you will be emailed with further details. Once approved, you will also be provided with a login account to 
                  <code>riscv-login</code>
                  .
                </p>
              </div>
            </el-main>
            <el-footer class="page-footer">
              <router-link to="/documentation/getting_started" class="pagination">
                <h4>Next</h4>
                <span>
                  Getting started
                  <el-icon><Right /></el-icon>
                </span>
              </router-link>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>  
    </div>
</template>

<style scoped>
.page-container {
    width: 1024px;
    margin: 2% auto auto auto;
}
.page-title {
  font-family: 'lora', serif;
  font-weight: bold;
  font-style: italic;
  font-size: 42px; 
  text-align: left;
}
.page-aside {
  width: 200px;
  text-align: center;
  margin-top: 2%;
}
.aside-date {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
}
.page-content {
  width: auto;
  margin: 0;
}
.main-content {
  text-align: left;
}
.main-title {
  font-family: 'lora', serif;
  font-weight: bold;
  font-style: italic;
  font-size: 30px; 
  text-align: left;
}
.link-style {
 color: black;
 text-decoration: underline;
}
code {
  font-family:Arial, Helvetica, sans-serif;
  background-color:#fafafa;
  color: #586e75;
}
.page-footer {
  text-align: right;
  height: 100px;
}
.pagination {
  color: black;
  font-family: 'lora', serif;
  font-style: italic;
}
</style>