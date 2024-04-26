<script>
import adminService from '../../services/admin.service';

export default {
    props: {
        authors: { type: Object, required: true },
    },
    data() {
        return {
            ID: "",
        };
    },
    methods: {
    setAuthorId() {
        if (this.authors && this.authors.IDtacgia) {
            this.ID = this.authors.IDtacgia.toString();
            console.log("Set ID:", this.ID);
        } else {
            console.error('Author ID is missing');
        }
    }
},

    created() {
        this.setAuthorId();
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="p-1">
                    <strong>ID:</strong> {{ ID }}
                </div>
                <div class="p-1">
                    <strong>Họ tên:</strong> {{ authors.hoTen || 'N/A' }}
                </div>
                <div class="p-1">
                    <strong>Giới tính:</strong> {{ authors.gioiTinh || 'N/A' }}
                </div>
                <div class="p-1">
                    <strong>Ngày sinh:</strong> {{ authors.ngaySinh || 'N/A' }}
                </div>
                <div class="p-1">
                    <strong>Địa chỉ:</strong> {{ authors.DiaChi || 'N/A' }}
                </div>
            </div>
        </div>
    </div>
    <router-link :to="{ name: 'editauthor', params: { id: ID } }">
    <span class="mt-2 badge badge-warning">
        <i class="fas fa-edit"></i> Hiệu chỉnh
    </span>
</router-link>

</template>

<style>
    .ResizeImg{
        width: 20svw;
        height: 40vh;
    }
</style>