<script>
import adminService from '../../services/admin.service';

export default {
  data() {
    return {
      danhsachsach: [],
    };
  },
  computed: {
    DanhSachSach() {
      return this.danhsachsach;
    },
  },
  props: {
    books: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ['update:activeIndex'],
  methods: {
    //Cập nhật chỉ số
    updateActiveIndex(index) {
      this.$emit('update:activeIndex', index);
    },

    //Lấy danh sách sách
    async LayDanhSachSach() {
      try {
        this.danhsachsach = await adminService.AllBook();
      } catch (err) {
        console.log(err);
      }
    },

    //Làm mới danh sách sách
    refreshLisstBook() {
      this.LayDanhSachSach();
    },
  },
  mounted() {
    this.refreshLisstBook();
  },
};

</script>

<template>
  <div class="BangLietKeSach overflow-auto">
    <table class="table table-light table-hover caption-top">
      <thead class="table-dark">
        <tr class="DinhDangTieuDe">
          <th scope="col">Mã sách</th>
          <th scope="col">Tên sách</th>
          </tr>
      </thead>
      <tbody>
        <tr
          class="PhanHang"
          v-for="(book, index) in books"
          :key="book.idSach"
          :class="{ active: index === activeIndex }"
          @click="updateActiveIndex(index)"
        >
          <th scope="row"> {{ book.idSach }} </th>
          <td>
            <div class="TenCot"> {{ book.Sach }} </div>
          </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.DinhDangTieuDe {
  color: aliceblue;
  font-family: Arial;
  font-size: 1.25em;
  font-weight: 550;
  text-align: center;
}

.DinhDangTieuDe th {
  border: 1px solid aliceblue;
}

.PhanHang th,
.PhanHang td {
  border: 1px solid gray;
}

.TenCot {
  text-align: center;
}
</style>