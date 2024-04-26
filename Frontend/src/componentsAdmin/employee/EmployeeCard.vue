<script>
import adminService from '../../services/admin.service';

export default {
    props: {
        employees: { type: Object, required: true },
    },
    data() {
        return {
            ID: "",
        };
    },
    methods: {
        initializeID() {
            if (this.employees && this.employees.idNhanVien) {
                this.ID = this.employees.idNhanVien.toString();
            } else {
                console.error('Employee data is incomplete or missing an ID.');
            }
        }
    },
    created() {
        this.initializeID(); // Initialize once when the component is created
    }
};
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="p-1">
                    <strong>Mã nhâm viên:</strong>
                    {{ ID }}
                </div>
                <div class="p-1">
                    <strong>Họ tên:</strong>
                    {{ employees.hoTen }}
                </div>
                <div class="p-1">
                    <strong>Ngày sinh:</strong>
                    {{ employees.ngaySinh }}
                </div>
                <div class="p-1">
                    <strong>Email:</strong>
                    {{ employees.Email }}
                </div>
            </div>
            <div class="col">
                <div class="p-1">
                    <strong>Giới tính:</strong>
                    {{ employees.gioiTinh }}
                </div>
                <div class="p-1">
                    <strong>Số điện thoại:</strong>
                    {{ employees.SDT }}
                </div>
                <div class="p-1">
                    <strong>Địa chỉ:</strong>
                    {{ employees.DiaChi }}
                </div>
            </div>
        </div>
    </div>
    <router-link :to="{ name: 'editemployee', params: { id: ID } }">
        <span class="mt-2 badge badge-warning">
            <i class="fas fa-edit"></i> Chỉnh sửa
        </span>
    </router-link>
</template>

<style>
    .ResizeImg{
        width: 20svw;
        height: 40vh;
    }
</style>