<script>

    let Email = sessionStorage.getItem('email');
    let Role= sessionStorage.getItem('role');
    let ID = sessionStorage.getItem('id');
    let CheckLogin =0;
    //Kiểm tra đăng nhập 
    if(Email && Role && ID){
        console.log("Role:",Role,"ID: ",ID,"Email: ",Email);
        CheckLogin = 1;
    }

    //-----
    export default {
        computed(){
            
        },
        methods:{
            //Thực hiện đăng xuất
            ThucHienDangXuat(){
                sessionStorage.removeItem('email');
                sessionStorage.removeItem('id');
                sessionStorage.removeItem('role');
                sessionStorage.clear();
                console.log("Role:",Role,"ID: ",ID,"Email: ",Email);
                this.$router.push('/');
                location.reload();
            },
            ThucHienDangNhap(){
                sessionStorage.clear();
                console.log("Role:",Role,"ID: ",ID,"Email: ",Email);
                this.$router.push('/Login');
            },
            ThucHienDangKy(){
                sessionStorage.clear();
                console.log("Role:",Role,"ID: ",ID,"Email: ",Email);
                this.$router.push('/dangky');
            },
            XacDinhDangNhap(){
                if(CheckLogin > 0 && Role == 0){
                    this.$router.push('/adminhome');
                }else if(CheckLogin > 0 && Role != 0){
                    this.$router.push('/');
                }else{
                    this.$router.push('/');
                }
            }
        }
    }
</script>

<template>
        <div class="gocPhai">
            <button class="btn btn-outline-success" type="button" @click="ThucHienDangKy">Đăng ký</button>
            <button class="btn btn-outline-primary" type="button" @click="ThucHienDangNhap">Đăng nhập</button>
            <button class="btn btn-outline-danger" type="button" @click="ThucHienDangXuat">Đăng xuất</button>
        </div>
        <div class="PhanDau">
            <div class="header">
                <div class="TieuDe_header">
                    <h1>
                        <button @click="XacDinhDangNhap" class=" DinhDangMauNutHome">Thư Viện-Home</button>
                    </h1>
                </div>

            </div>
        </div>
</template>



<style>
:root {
    --primary-color: rgb(32, 32, 175);
    --secondary-color: rgb(20, 56, 218);
    --accent-color: aliceblue;
  }
  
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  
  .PhanDau {
    background-color: white;
    height: 12vh;
    display: flex; /* Use flexbox for horizontal alignment */
    justify-content: space-between; /* Space buttons evenly */
    align-items: center; /* Center buttons vertically */
  }
  
  .header {
    display: flex;
  }
  
  .TieuDe_header {
    margin-left: 5vh;
    font-size: 1.15em;
    font-weight: 700;
    color: var(--primary-color);
  }
  
  .gocPhai button {
    margin: 0 10px; /* Adjust spacing between buttons */
    padding: 8px 16px; /* Adjust button padding */
    border: none; /* Remove default button border */
    border-radius: 4px; /* Rounded corners */
    cursor: pointer;
    transition: background-color 0.2s ease-in-out; /* Smoother hover effect */
  }
  
  .gocPhai button:hover {
    background-color: rgba(var(--primary-color), 0.2); /* Slightly lighter on hover */
  }
  
  .DinhDangMauNutHome {
    color: black;
  }
  
  .DinhDangMauNutHome:hover {
    background-image: linear-gradient(to right, var(--secondary-color), var(--primary-color));
  }
  
</style>