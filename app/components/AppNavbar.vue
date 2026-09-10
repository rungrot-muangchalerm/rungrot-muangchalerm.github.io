<script setup>
const route = useRoute()
const currentPath = computed(() => route.path.replace(/\.html$/, '').replace(/\/index$/, '/') || '/')
const isActive = (path) => currentPath.value === path
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand fw-semibold d-flex" href="/">
          <i class="fa-solid fa-bowl-rice me-2 text-primary"></i>ครัวบ้านดี
          
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="เปิดเมนู">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive('/') }" :aria-current="isActive('/') ? 'page' : undefined" href="/">
                <i class="fa-solid fa-house me-1"></i>หน้าแรก
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive('/customer/menu') }" :aria-current="isActive('/customer/menu') ? 'page' : undefined" href="/customer/menu">
                <i class="fa-solid fa-utensils me-1"></i>เมนู
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive('/customer/cart') }" :aria-current="isActive('/customer/cart') ? 'page' : undefined" href="/customer/cart">
                <i class="fa-solid fa-cart-shopping me-1"></i>ตะกร้า
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive('/customer/order-status') }" :aria-current="isActive('/customer/order-status') ? 'page' : undefined" href="/customer/order-status">
                <i class="fa-solid fa-receipt me-1"></i>ติดตาม
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive('/customer/history') }" :aria-current="isActive('/customer/history') ? 'page' : undefined" href="/customer/history">
                <i class="fa-solid fa-clock-rotate-left me-1"></i>ประวัติ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#promotions">
                <i class="fa-solid fa-tags me-1"></i>โปรโมชัน
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contact">
                <i class="fa-solid fa-location-dot me-1"></i>ติดต่อ
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" :class="{ active: currentPath.startsWith('/pos/') }" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-table-list me-1"></i>POS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/pos/dashboard') }" :aria-current="isActive('/pos/dashboard') ? 'page' : undefined" href="/pos/dashboard">
                    <i class="fa-solid fa-chart-line me-2"></i>แดชบอร์ดพนักงาน
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/pos/tables') }" :aria-current="isActive('/pos/tables') ? 'page' : undefined" href="/pos/tables">
                    <i class="fa-solid fa-chair me-2"></i>สถานะโต๊ะ
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/pos/order') }" :aria-current="isActive('/pos/order') ? 'page' : undefined" href="/pos/order">
                    <i class="fa-solid fa-plus me-2"></i>เปิดออเดอร์
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/pos/order-items') }" :aria-current="isActive('/pos/order-items') ? 'page' : undefined" href="/pos/order-items">
                    <i class="fa-solid fa-list-check me-2"></i>เพิ่มรายการอาหาร
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/pos/order-detail') }" :aria-current="isActive('/pos/order-detail') ? 'page' : undefined" href="/pos/order-detail">
                    <i class="fa-solid fa-clipboard-list me-2"></i>รายละเอียดออเดอร์
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/pos/ready-to-serve') }" :aria-current="isActive('/pos/ready-to-serve') ? 'page' : undefined" href="/pos/ready-to-serve">
                    <i class="fa-solid fa-bell-concierge me-2"></i>รายการพร้อมเสิร์ฟ
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" :class="{ active: currentPath.startsWith('/kitchen/') }" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-kitchen-set me-1"></i>ครัว
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/kitchen/queue') }" :aria-current="isActive('/kitchen/queue') ? 'page' : undefined" href="/kitchen/queue">
                    <i class="fa-solid fa-hourglass-start me-2"></i>คิวครัว
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/kitchen/preparing') }" :aria-current="isActive('/kitchen/preparing') ? 'page' : undefined" href="/kitchen/preparing">
                    <i class="fa-solid fa-fire-burner me-2"></i>กำลังปรุง
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/kitchen/ready') }" :aria-current="isActive('/kitchen/ready') ? 'page' : undefined" href="/kitchen/ready">
                    <i class="fa-solid fa-bell me-2"></i>พร้อมเสิร์ฟ
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/kitchen/history') }" :aria-current="isActive('/kitchen/history') ? 'page' : undefined" href="/kitchen/history">
                    <i class="fa-solid fa-clock-rotate-left me-2"></i>ประวัติครัว
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" :class="{ active: currentPath.startsWith('/cashier/') }" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-cash-register me-1"></i>แคชเชียร์
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/cashier/search') }" :aria-current="isActive('/cashier/search') ? 'page' : undefined" href="/cashier/search">
                    <i class="fa-solid fa-magnifying-glass me-2"></i>ค้นหาออเดอร์
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/cashier/payment') }" :aria-current="isActive('/cashier/payment') ? 'page' : undefined" href="/cashier/payment">
                    <i class="fa-solid fa-credit-card me-2"></i>ชำระเงิน
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/cashier/bill-summary') }" :aria-current="isActive('/cashier/bill-summary') ? 'page' : undefined" href="/cashier/bill-summary">
                    <i class="fa-solid fa-file-invoice-dollar me-2"></i>สรุปบิล
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/cashier/receipt') }" :aria-current="isActive('/cashier/receipt') ? 'page' : undefined" href="/cashier/receipt">
                    <i class="fa-solid fa-receipt me-2"></i>ใบเสร็จ
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" :class="{ active: currentPath.startsWith('/admin/') }" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-user-shield me-1"></i>Admin
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/dashboard') }" :aria-current="isActive('/admin/dashboard') ? 'page' : undefined" href="/admin/dashboard">
                    <i class="fa-solid fa-chart-pie me-2"></i>แดชบอร์ด Admin
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/users') }" :aria-current="isActive('/admin/users') ? 'page' : undefined" href="/admin/users">
                    <i class="fa-solid fa-users-gear me-2"></i>ผู้ใช้และบทบาท
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/restaurant-settings') }" :aria-current="isActive('/admin/restaurant-settings') ? 'page' : undefined" href="/admin/restaurant-settings">
                    <i class="fa-solid fa-store me-2"></i>ข้อมูลร้าน
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/categories') }" :aria-current="isActive('/admin/categories') ? 'page' : undefined" href="/admin/categories">
                    <i class="fa-solid fa-layer-group me-2"></i>หมวดหมู่เมนู
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/menu') }" :aria-current="isActive('/admin/menu') ? 'page' : undefined" href="/admin/menu">
                    <i class="fa-solid fa-bowl-food me-2"></i>เมนูอาหาร
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/menu-options') }" :aria-current="isActive('/admin/menu-options') ? 'page' : undefined" href="/admin/menu-options">
                    <i class="fa-solid fa-sliders me-2"></i>ตัวเลือกเมนู
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/zones-tables') }" :aria-current="isActive('/admin/zones-tables') ? 'page' : undefined" href="/admin/zones-tables">
                    <i class="fa-solid fa-chair me-2"></i>โต๊ะและโซน
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/promotions') }" :aria-current="isActive('/admin/promotions') ? 'page' : undefined" href="/admin/promotions">
                    <i class="fa-solid fa-tags me-2"></i>โปรโมชั่น
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/orders') }" :aria-current="isActive('/admin/orders') ? 'page' : undefined" href="/admin/orders">
                    <i class="fa-solid fa-clipboard-list me-2"></i>ค้นหาออเดอร์ Admin
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/reports') }" :aria-current="isActive('/admin/reports') ? 'page' : undefined" href="/admin/reports">
                    <i class="fa-solid fa-chart-column me-2"></i>รายงาน
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" :class="{ active: isActive('/admin/audit-logs') }" :aria-current="isActive('/admin/audit-logs') ? 'page' : undefined" href="/admin/audit-logs">
                    <i class="fa-solid fa-shield-halved me-2"></i>ประวัติการใช้งาน
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="d-flex gap-2">
            <a class="btn btn-primary" href="/auth/login">
              <i class="fa-solid fa-right-to-bracket me-1"></i>Login
            </a>
            <a class="btn btn-outline-primary" href="/auth/register">
              <i class="fa-solid fa-user-plus me-1"></i>Register
            </a>
          </div>
        </div>
      </div>
    </nav>
</template>
