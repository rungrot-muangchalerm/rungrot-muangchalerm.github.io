<template>
  <footer class="bg-dark text-white mt-5">
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-12 col-lg-4">
            <h2 class="h5 mb-3">
              <i class="fa-solid fa-bowl-rice me-2 text-warning"></i>ครัวบ้านดี
            </h2>
            <p class="text-white-50 mb-3">ครัวบ้านดีเสิร์ฟอาหารไทยจานคุ้นเคยในบรรยากาศอบอุ่น เหมาะกับมื้อกลางวัน มื้อเย็น และวันที่อยากสั่งอาหารกลับไปกินที่บ้าน</p>
            <div class="d-flex gap-2">
              <a class="btn btn-outline-light btn-sm" href="#" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a class="btn btn-outline-light btn-sm" href="#" aria-label="Line">
                <i class="fa-brands fa-line"></i>
              </a>
              <a class="btn btn-outline-light btn-sm" href="#" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-2">
            <h3 class="h6 text-uppercase text-white-50 mb-3">ลูกค้า</h3>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a class="link-light link-underline-opacity-0" href="/customer/menu">เมนูอาหาร</a>
              </li>
              <li class="mb-2">
                <a class="link-light link-underline-opacity-0" href="/customer/cart">ตะกร้า</a>
              </li>
              <li class="mb-2">
                <a class="link-light link-underline-opacity-0" href="/customer/order-status">ติดตามออเดอร์</a>
              </li>
              <li>
                <a class="link-light link-underline-opacity-0" href="/customer/history">ประวัติคำสั่งซื้อ</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2">
            <h3 class="h6 text-uppercase text-white-50 mb-3">บริการ</h3>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a class="link-light link-underline-opacity-0" href="/customer/menu">สั่งที่โต๊ะ</a>
              </li>
              <li class="mb-2">
                <a class="link-light link-underline-opacity-0" href="/customer/cart">ดูตะกร้า</a>
              </li>
              <li class="mb-2">
                <a class="link-light link-underline-opacity-0" href="/customer/order-status">ติดตามออเดอร์</a>
              </li>
              <li>
                <a class="link-light link-underline-opacity-0" href="/#promotions">โปรโมชัน</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-4">
            <h3 class="h6 text-uppercase text-white-50 mb-3">ติดต่อและเวลาเปิด</h3>
            <ul class="list-unstyled text-white-50 mb-4">
              <li class="mb-2">
                <i class="fa-solid fa-location-dot me-2 text-warning"></i>99 ถนนสุขุมวิท กรุงเทพฯ
              </li>
              <li class="mb-2">
                <i class="fa-solid fa-phone me-2 text-warning"></i>02-555-0101
              </li>
              <li class="mb-2">
                <i class="fa-solid fa-envelope me-2 text-warning"></i>hello@kruabaan-dee.example
              </li>
              <li>
                <i class="fa-solid fa-clock me-2 text-warning"></i>เปิดทุกวัน 10:00 - 22:00 น.
              </li>
            </ul>
            <div class="d-flex flex-wrap gap-2">
              <a class="btn btn-warning btn-sm" href="/customer/menu">
                <i class="fa-solid fa-utensils me-1"></i>สั่งอาหาร
              </a>
              <a class="btn btn-outline-light btn-sm" href="/auth/login">
                <i class="fa-solid fa-right-to-bracket me-1"></i>เข้าสู่บัญชี
              </a>
            </div>
          </div>
        </div>
        <hr class="border-secondary my-4">
        <div class="d-flex flex-column flex-md-row justify-content-between gap-2 text-white-50 small">
          <div>© 2026 ครัวบ้านดี</div>
          <div>อาหารไทย · ทานที่ร้าน · กลับบ้าน · เดลิเวอรี</div>
        </div>
      </div>
    </footer>
</template>
