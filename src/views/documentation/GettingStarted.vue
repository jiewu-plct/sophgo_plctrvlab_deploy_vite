<script setup lang="ts">

const tableData = [
  {
    module: 'riscv32-linux/gnu-12.2',
    compiler: 'GNU',
    version: '12.2.0',
    library: 'glibc(Linux)',
    bit: '32',
    isa: 'RV32GC',
    abi: 'ilp32d',
    prefix: 'riscv32-unknown-linux-gnu-',
    source: 'RISC-V GNU Toolchain',
    url: 'https://github.com/riscv-collab/riscv-gnu-toolchain'
  },
  {
    module: 'riscv64-linux/gnu-12.2',
    compiler: 'GNU',
    version: '12.2.0',
    library: 'glibc(Linux)',
    bit: '64',
    isa: 'RV64GC',
    abi: 'ilp64d',
    prefix: 'riscv64-unknown-linux-gnu-',
    source: 'RISC-V GNU Toolchain',
    url: 'https://github.com/riscv-collab/riscv-gnu-toolchain'
  },
  {
    module: 'riscv32-newlib/gnu-12.2',
    compiler: 'GNU',
    version: '12.2.0',
    library: 'Newlib',
    bit: '32',
    isa: 'RV32GC',
    abi: 'ilp32d',
    prefix: 'riscv32-unknown-elf-gnu-',
    source: 'RISC-V GNU Toolchain',
    url: 'https://github.com/riscv-collab/riscv-gnu-toolchain'
  },
  {
    module: 'riscv64-newlib/gnu-12.2',
    compiler: 'GNU',
    version: '12.2.0',
    library: 'Newlib',
    bit: '64',
    isa: 'RV64GC',
    abi: 'ilp64d',
    prefix: 'riscv64-unknown-elf-gnu-',
    source: 'RISC-V GNU Toolchain',
    url: 'https://github.com/riscv-collab/riscv-gnu-toolchain'
  },
  {
    module: 'riscv64-linux/gnu-8.4-rvv',
    compiler: 'GNU',
    version: '8.4',
    library: 'glibc(Linux)',
    bit: '64',
    isa: 'RV64GC + V (0.7.1)',
    abi: 'ilp64d',
    prefix: 'riscv64-unknown-linux-gnu-',
    source: 'XuanTie GNU Toolchain 20210618',
    url: 'https://datashare.ed.ac.uk/handle/10283/4835'
  },
  {
    module: 'riscv64-linux/gnu-9.2-rvv',
    compiler: 'GNU',
    version: '9.2',
    library: 'glibc(Linux)',
    bit: '64',
    isa: 'RV64GC + V (0.7.1)',
    abi: 'ilp64d',
    prefix: 'riscv64-unknown-linux-gnu-',
    source: 'RISC-V GNU Toolchain: rvv-0.7.1',
    url: 'https://github.com/brucehoult/riscv-gnu-toolchain/tree/rvv-0.7.1'
  },
  {
    module: 'riscv64-linux/gnu-10.2-rvv',
    compiler: 'GNU',
    version: '10.2',
    library: 'glibc(Linux)',
    bit: '64',
    isa: 'RV64GC + V (0.7.1/1.0)',
    abi: 'ilp64d',
    prefix: 'riscv64-unknown-linux-gnu-',
    source: 'XuanTie GNU Toolchain V2.6.1 20220906',
    url: 'https://datashare.ed.ac.uk/handle/10283/4835'
  },
  {
    module: 'riscv64-linux/llvm-15.0',
    compiler: 'LLVM',
    version: '15.0',
    library: 'glibc(Linux)',
    bit: '64',
    isa: 'RV64GC + V (1.0)',
    abi: 'ilp64d',
    prefix: 'N/A',
    source: 'LLVM',
    url: 'https://github.com/riscv-collab/riscv-gnu-toolchain/pull/1166'
  },
  {
    module: 'riscv64-linux/llvm-16.0',
    compiler: 'LLVM',
    version: '16.0',
    library: 'glibc(Linux)',
    bit: '64',
    isa: 'RV64GC + V (1.0)',
    abi: 'ilp64d',
    prefix: 'N/A',
    source: 'LLVM',
    url: 'https://github.com/riscv-collab/riscv-gnu-toolchain/pull/1166'
  },
]

const goToSource = function(url:string) {
  // console.log('1111111')
  console.log(url)
  window.open(url, '_self')
}

</script>

<template>
    <div>
      <el-container class="page-container">
        <el-header class="page-title">Getting started</el-header>
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
                  This section describes how to access both the command line and GUI of the testbed system front-end.
                </p>
                <p>
                  The testbed contains a front-end node 
                  <em>riscv-login</em>
                  containing a 26-core Skylake Xeon Platinum CPU with 256GB RAM. The system drive is a 1TB SSD, and files are stored on 4TB of HDD RAID10 storage. Users can build their code on the front-end node, and they can be run on the RISC-V backend nodes (for details on submitting 
                  jobs, see 
                  <a href="/documentation/running_riscv" class="link-style">here</a>
                  )
                </p>
                <h2 class="main-title">
                  Command line access
                </h2>
                <p>
                  The testbed system is only accessible via the 
                  <em>hydra-vpn</em>
                   proxy host, and in the previous 
                  <em>applying for access</em>
                   step you will have signed up for accounts on both 
                  <em>hydra-vpn</em>
                   and 
                  <em>riscv-login</em>
                  . To access the testbed you need to therefore first ssh to 
                  <em>hydra-vpn</em>
                   via 
                  <code class="hightlight">ssh username@hydra-vpn.epcc.ed.ac.uk</code>
                  , the first time that you access this you will need to use the password automatically allocated via the SAFE system (it can be retrieved via SAFE) and will be prompted to change this.
                </p>
                <p>
                  Once you have logged into hydra-vpn then you can access the testbed login node via 
                  <code class="hightlight">ssh username@riscv-login</code>
                   . The workflow is illustrated below.
                </p>
                <pre class="pre-style">
                  <code>
                      <span class="gp">username@localhost:~$ ssh username@hydra-vpn.epcc.ed.ac.uk</span>
                      <span></span>
                      <span class="gp">[username@hydra-vpn ~]$ ssh username@riscv-login</span>
                      <span></span>
                      <span class="gp">[username@riscv-login ~]$</span></code>
                </pre>
              </div>
              <br>
              <blockquote>
                <p>
                  <strong>ADVICES:</strong>
                  <br>
                  It is possible to automate the proxy step by setting this up in your ssh .config file as a proxyjump
                </p>
              </blockquote>
              <h3 id="desktop-access">Desktop access</h3>
              <p>
                <img src="../../assets/x2go_settings.png" height="500" width="480">
              </p>
              <div class="desktop-access-text">
                <p>
                  The lightweight XFCE desktop is installed on the front-end of the testbed system, which is especially useful for programming FPGAs as much of the tooling has a graphical component to it. The front-end is also running X2GO which tends to provide much better performance 
                  than vanilla X forwarding. Therefore we strongly suggest accessing the desktop via X2GO, with users just needing to install the client program which is available 
                  <a href="https://wiki.x2go.org/doku.php/download:start">here</a>
                  .
                </p>
                <p>
                  Once the client is installed, create a new profile with settings matching those as illustrated below (assuming that you use the same username and password for both 
                  <em class="hightlight-text">hydra-vpn</em>
                  and the 
                  <em class="hightlight-text">riscv-login</em>
                  node.
                </p>
              </div>
              <blockquote>
                <p>
                  <strong>NOTE:</strong>
                  <br>
                   Whilst it is possible to run the individual graphical tools directly via X2GO, we suggest doing this via the XFCE desktop environment as find that this provides a much better user experience.
                </p>
              </blockquote>
              <h2 id="risc-v-compilers-and-libraries">RISC-V compilers and libraries</h2>
              <p>RISC-V compilers are available on the module environment:</p>
              <pre class="pre-style">
                <code>
                  <span class="gp">bash-4.2$ module avail</span>
                  <span></span>
                  <span class="gp">...</span>
                  <span></span>
                  <span class="gp">------------------- /usr/local/share/riscv-compiler/modulefiles --------------------</span>
                  <span class="gp">riscv32-linux/gnu-12.2       riscv64-linux/gnu-9.2-rvv     riscv64-linux/llvm-15.0</span>
                  <span class="gp">riscv32-newlib/gnu-12.2      riscv64-linux/gnu-10.2-rvv    riscv64-linux/llvm-16.0</span> 
                  <span class="gp">riscv64-linux/gnu-8.4-rvv    riscv64-linux/gnu-12.2        riscv64-newlib/gnu-12.2</span>
                </code>
              </pre>
              <p>The modules correspond to the following compiler configurations:</p>
              <el-table :data="tableData" syle="width: 100%">
                <el-table-column prop="module" label="Module" />
                <el-table-column prop="compiler" label="Compiler" />
                <el-table-column prop="version" label="Version" />
                <el-table-column prop="library" label="Library" />
                <el-table-column prop="Bit" label="Bit" />
                <el-table-column prop="isa" label="ISA" />
                <el-table-column prop="abi" label="ABI" />
                <el-table-column prop="prefix" label="Prefix" />
                <el-table-column prop="source" label="Source">
                  <template #default="scope">
                    <a href="javascript:void(0)" @click="goToSource(scope.row.url)">{{ scope.row.source }}</a>
                  </template>
                </el-table-column>
              </el-table>
              <p>
                Once a compiler module is loaded (e.g. via 
                <code class="riscv-compilers-text">module load riscv64-linux/llvm-16.0</code>
                ), the compilers and associated tools can be called with the prefix above for GNU (e.g. 
                <code class="riscv-compilers-text">riscv64-unknown-linux-gnu-gcc</code>
                ) and without prefix (e.g 
                <code class="riscv-compilers-text">clang</code>
                ) for LLVM.
              </p>
              <p>
                For details of what tools are included in the toolchains, see 
                <router-link to="/community/toolchainsdebugging">Toolchains & Cross-debugging</router-link>
                . For more instructions on compiling with the V vector extension, see 
                <router-link to="/community/compilingvector">V vector extension</router-link>
                .
              </p>
              <h3 id="libraries">Libraries</h3>
              <p>RISC-V libraries are also available in the module environment.</p>
              <pre class="pre-style">
                <code>
                  <span class="gp">bash-4.2$ module avail</span>
                  <span></span>
                  <span class="gp">...</span>
                  <span></span>
                  <span class="gp">------------------- /usr/local/share/riscv-compiler/modulefiles --------------------</span>
                  <span></span>
                  <span class="gp">fftw/3.3.10_gcc12.2_double/fftw-double</span>
                  <span></span>
                  <span class="gp">fftw/3.3.10_gcc12.2_single/fftw-single</span>
                  <span></span>
                  <span class="gp">hdf5/1.14.0_gcc12.2</span>
                  <span></span>
                  <span class="gp">netcdf/4.x_gcc12.2</span>
                  <span></span>
                  <span class="gp">openblas/0.3.21_C910V_gcc10.2</span>
                  <span></span> 
                  <span class="gp">openblas/0.3.21_riscv64_generic_gcc12.2</span>
                  <span></span>
                  <span class="gp">openmpi/4.1.4_gcc12.2</span>
                  <span></span>
                  <span class="gp">petsc/3.18.4_debug</span>
                  <span></span>
                  <span class="gp">petsc/3.18.4_release</span></code>
              </pre>
              <p>
                To inspect the list of modules set in the user environment, run 
                <code class="riscv-compilers-text">module list</code>
                . More general details about the module environment can be found 
                <a href="https://linux.die.net/man/1/module">here</a>
                .
              </p>
              <p>
                Note: all libraries are compiled using 
                <code class="riscv-compilers-text">riscv64-linux/gnu-12.2</code>
                , except for 
                <code class="riscv-compilers-text">openblas/0.3.21_C910V_gcc10.2</code>
                which has been compiled using 
                <a href="https://datashare.ed.ac.uk/handle/10283/4835">XuanTie GNU Toolchain V2.6.0 20220715</a>
              </p>
              <h3 id="compiling-with-mpi">Compiling with MPI</h3>
              <p>
                To use the OpenMPI compiler wrappers (e.g. 
                <code class="riscv-compilers-text">mpicc</code>
                ) on 
                <em class="hightlight-text">riscv-login</em>
                , first load the 
                <code class="riscv-compilers-text">openmpi/4.1.4_gcc12.2</code>
                and 
                <code class="riscv-compilers-text">riscv64-linux/gnu-12.2</code>
                compiler module. Then the wrapper can be used along with the QEMU simulator included in 
                <code class="riscv-compilers-text">riscv64-linux/gnu-12.2</code>
                ,
              </p>
              <pre class="pre-style">
                <code>
                  <span class="gp">bash-4.2$ qemu-riscv64 /usr/local/share/riscv-software/openmpi4.1.4_gcc12.2/build/bin/mpicc [helloworld.c]</span>
                  <span></span>
                </code>
              </pre>
              <p>If you prefer to link the OpenMPI libraries manually, they can be found in</p>
              <pre class="pre-style">
                <code>
                  <span class="gp">MPdir        = /usr/local/share/riscv-software/openmpi4.1.4_gcc12.2/build</span>
                  <span></span>
                  <span class="gp">MPinc        = -I$(MPdir)/include</span>
                  <span class="gp">MPlib        = $(MPdir)/lib/libmpi.a $(MPdir)/lib/libompitrace.a $(MPdir)/lib/libopen-rte.a  $(MPdir)/lib/libopen-pal.a -ldl</span>
                </code>
              </pre>
            </el-main>
            <el-footer class="page-footer">
              <router-link to="/documentation/access" class="pagination pagination-pre">
                <h4>Previous</h4>
                <span>
                  <el-icon><Back /></el-icon>
                  Applying for access
                </span>
              </router-link>
              <router-link to="/documentation/hardware" class="pagination pagination-next">
                <h4>Next</h4>
                <span>
                  Testbed hardware
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
.hightlight {
  font-family: Arial, Helvetica, sans-serif;
  background-color:#fafafa;
  color: #586e75;
}
.page-footer {
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.pagination-pre {
  text-align: left;
}
.pagination-next {
  text-align: right;
}
.pagination {
  color: black;
  font-family: 'lora', serif;
  font-style: italic;
}
.pre-style{
  background-color: #fafafa;
  margin-bottom: 0;
  width: 108%
}
.gp {
  color: #839496;
  float: left;
  margin-left: 15px;
  /* font-weight: bold; */
  font-family: Arial, Helvetica, sans-serif;
}

blockquote {
  background-color: #ebebed;
  border-left-color: #34374c;
  border-left-width: 0.5em;
  border-left-style: solid;
  padding: 1em 3em;
  margin-left: 0;
  margin-right: 0;
  text-align: left;
  margin-top: 0;
}

#desktop-access, #risc-v-compilers-and-libraries {
  font-family: 'lora', serif;
  font-weight: bold;
  font-style: italic;
  text-align: left;
  font-size: 30px;
}

img {
  float: right;
}

a {
  color: black;
  text-decoration: underline;
}
.desktop-access-text {
  text-align: left;
}
.hightlight-text {
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
}

p {
  text-align: left;
}
.riscv-compilers-text {
  font-family:Arial, Helvetica, sans-serif;
  background-color:#fafafa;
  color: #586e75;
}

#libraries, #compiling-with-mpi {
  font-family: 'lora', serif;
  font-weight: bold;
  font-style: italic;
  text-align: left;
  font-size: 23px;
}
</style>