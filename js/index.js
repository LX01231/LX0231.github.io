// 首页轮播图核心JS - 严格实现3张图片轮播
window.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.indicator-dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const total = carouselItems.length; // 固定3张

    // 轮播切换函数
    function goToIndex(index) {
        // 清除所有active样式
        carouselItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        // 给当前项添加样式
        carouselItems[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % total;
        goToIndex(currentIndex);
    }

    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + total) % total;
        goToIndex(currentIndex);
    }

    // 按钮点击事件
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // 圆点点击切换
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToIndex(index));
    });

    // 自动轮播 - 3秒切换一次
    let timer = setInterval(nextSlide, 3000);
    
    // 鼠标悬浮停止轮播，离开继续
    const banner = document.querySelector('.banner');
    banner.addEventListener('mouseenter', () => clearInterval(timer));
    banner.addEventListener('mouseleave', () => timer = setInterval(nextSlide, 3000));
});