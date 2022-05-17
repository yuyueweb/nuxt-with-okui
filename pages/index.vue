
<template>
  <ok-container style="height: 500px; border: 1px solid #eee">
    <ok-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <ok-menu :default-openeds="['1', '3']">
        <ok-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
          <ok-menu-item-group>
            <template slot="title">Group 1</template>
            <ok-menu-item index="1-1">Option 1</ok-menu-item>
            <ok-menu-item index="1-2">Option 2</ok-menu-item>
          </ok-menu-item-group>
          <ok-menu-item-group title="Group 2">
            <ok-menu-item index="1-3">Option 3</ok-menu-item>
          </ok-menu-item-group>
          <ok-submenu index="1-4">
            <template slot="title">Option4</template>
            <ok-menu-item index="1-4-1">Option 4-1</ok-menu-item>
          </ok-submenu>
        </ok-submenu>
        <ok-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
          <ok-menu-item-group>
            <template slot="title">Group 1</template>
            <ok-menu-item index="2-1">Option 1</ok-menu-item>
            <ok-menu-item index="2-2">Option 2</ok-menu-item>
          </ok-menu-item-group>
          <ok-menu-item-group title="Group 2">
            <ok-menu-item index="2-3">Option 3</ok-menu-item>
          </ok-menu-item-group>
          <ok-submenu index="2-4">
            <template slot="title">Option 4</template>
            <ok-menu-item index="2-4-1">Option 4-1</ok-menu-item>
          </ok-submenu>
        </ok-submenu>
        <ok-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
          <ok-menu-item-group>
            <template slot="title">Group 1</template>
            <ok-menu-item index="3-1">Option 1</ok-menu-item>
            <ok-menu-item index="3-2">Option 2</ok-menu-item>
          </ok-menu-item-group>
          <ok-menu-item-group title="Group 2">
            <ok-menu-item index="3-3">Option 3</ok-menu-item>
          </ok-menu-item-group>
          <ok-submenu index="3-4">
            <template slot="title">Option 4</template>
            <ok-menu-item index="3-4-1">Option 4-1</ok-menu-item>
          </ok-submenu>
        </ok-submenu>
      </ok-menu>
    </ok-aside>

    <ok-container>
      <ok-header style="text-align: right; font-size: 12px">
        <ok-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <ok-dropdown-menu slot="dropdown">
            <ok-dropdown-item>View</ok-dropdown-item>
            <ok-dropdown-item>Add</ok-dropdown-item>
            <ok-dropdown-item>Delete</ok-dropdown-item>
          </ok-dropdown-menu>
        </ok-dropdown>
        <span>Tom</span>
      </ok-header>

      <ok-main>
        <ok-table :data="tableData">
          <ok-table-column prop="date" label="Date" width="140">
          </ok-table-column>
          <ok-table-column prop="name" label="Name" width="120">
          </ok-table-column>
          <ok-table-column prop="address" label="Address">
          </ok-table-column>
        </ok-table>
      </ok-main>
    </ok-container>
  </ok-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>