<template>
  <div class="table">
    <el-table :data="goodslist" stripe border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="goods_name" label="商品名称"></el-table-column>
      <el-table-column prop="goods_price" label="价格"></el-table-column>
      <el-table-column prop="add_time" label="创建时间" width="170px">
        <template v-slot="scope">
          {{ scope.row.add_time | dateFormat }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="130px">
        <template v-slot="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
          <el-button size="mini" type="warning" icon="el-icon-delete" @click="deleteById(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNum"
      :page-size="[10, 20, 50]"
      layout="total, size, prev,pager, next"
      :total="total"
      background
    ></el-pagination>
  </div>
</template>

<script>
import { getGoodsList, deleteById } from '@/api/order'

export default {
  name: "Table",
  data() {
    return {
      queryInfo: {
        query: '',
        pageNum: '1',
        pageSize: '10'
      },
      goodslist: [],
      total: 0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getGoodsList(this.queryInfo).then(response => {
        this.goodslist = response.goodslist
        this.total = response.total
      });
    },
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize;
      this.getList();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagePage = newPage;
      this.getList();
    },
    edit(row) {
      alert(JSON.stringify(row));
    },
    deleteById(id) {
      this.$confirm('确认删除吗？',"提示",{
        confirmButtonText: "确定",
        cancelButtonClass: "取消",
        type: "warning"
      }).then(() => {
        deleteById(id).then(response => {

        })
      })
    }
  }
}
</script>

<style scoped>

</style>