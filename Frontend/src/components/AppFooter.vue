<template>
    <div class="PhanChanTrang">
        <p>Đại Học Cần Thơ</p>
        <p>Reserved. <a href="###">Terms Of Use</a> | <a href="###">Privacy Policy</a></p>
        <p>
            Social Media 
            <img src="../../facebook.png" alt="facebook" class="logoSocialMedia">
            <img src="../../instagram.png" alt="instagram" class="logoSocialMedia">
            <img src="../../telegram.png" alt="telegram" class="logoSocialMedia">
            <img src="../../tik-tok.png" alt="tik-tok" class="logoSocialMedia">
            <img src="../../twitter.png" alt="twitter" class="logoSocialMedia">
        </p>
    </div>
</template>
<style>
.logoSocialMedia {
    margin-left: 10px; /* Adjust spacing between icons */
    width: 24px; /* Consistent size for social media icons */
    height: 24px;
    cursor: pointer;
  }
  
  .PhanChanTrang {
    background-color: rgb(48, 21, 204);
    color: aliceblue;
    width: 100vw;
    height: auto;
    text-align: center;
    padding: 1rem 0; /* Use rem unit for better responsiveness */
    border: 1px solid rgb(187, 187, 187);
    position: relative;
    z-index: 2;
  }
  a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit footer text color */
  }
  
  a:hover {
    color: #007bff; /* Add hover effect (blue) */
  }
  
</style>