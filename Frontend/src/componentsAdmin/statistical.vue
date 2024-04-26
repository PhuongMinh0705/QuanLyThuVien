<script>
    import AdminService from '../services/admin.service';

    export default {
        
        data(){
            return{
                slNhanVien:0,
                slNguoiDung:0,
                slSach:0,
                slNhaXuatBan:0,
                slSachMuon:0,
                slTacGia:0,
                TongSoLuongSach:0,
            };
        },
        methods:{
            async CapNhatSoLuong(){
                this.slNhanVien = await AdminService.TotalNumberofEmployees();
                this.slNguoiDung = await AdminService.TotalNumberOfReaders();
                this.slSach = await AdminService.TotalNumberOfBooks();
                this.slNhaXuatBan = await AdminService.TotalNumberOfPublisher();
                this.slSachMuon = await AdminService.NumberOfBooksBorrowed();
                this.slTacGia = await AdminService.TotalNumberofAuthor();
                this.TongSoLuongSach = await AdminService.EntireNumberOfBooksInTheLibrary();
            }
        },
        mounted(){
            this.CapNhatSoLuong();
        }
    };
</script>

<template>
    <div class="KhungChuaThongKe">
        <div>
            <div class="row HangThongKe">
                <div class="col OThongKe1 ">
                    <p>Số lượng nhân viên: {{ slNhanVien }} </p> 
                </div>
                <div class="col OThongKe2">
                    <p>Số lượng người dùng: {{ slNguoiDung }} </p> 
                </div>
                <div class="col OThongKe3">
                    <p>Số lượng sách: {{ slSach }} </p> 
                </div>
                <div class="col OThongKe4">
                    <p>Số lượng nhà xuất bản: {{ slNhaXuatBan }} </p> 
                </div>
            </div>
            <div class="row HangThongKe">
                <div class="col OThongKe5">
                    <p>Số lượng sách đã mượn: {{ slSachMuon }} </p> 
                </div>
                <div class="col OThongKe6">
                    <p>Số lượng tác giả: {{ slTacGia }} </p> 
                </div>
               
            </div>
        </div>
    </div>
</template>

<style>


.OThongKe {
  border-radius: 5px;
  padding: 1.5vh 2vw; /* Reduced padding for compactness */
  margin-right: 2vw; /* Reduced margin for closer spacing */
  color: #333; /* Black text for better readability */
  font-size: 1em; /* Slightly smaller font size */
  font-weight: 500;
  display: flex; /* Use flexbox for alignment */
  align-items: center; /* Align text vertically within the box */
  background-color: #f5f5f5; /* Light gray background */
  border: 1px solid #ddd; /* Subtle border */
}

.OThongKe p {
  margin: 0; /* Remove default margin for better spacing */
}

.HangThongKe {
  margin-top: 5vh;
  display: flex;
  justify-content: space-between; /* Distribute items evenly */
  flex-wrap: wrap; /* Wrap items to multiple lines if needed */
}

.KhungChuaThongKe {
  display: block;
  width: 100%;
  height: 100%;
}
</style>