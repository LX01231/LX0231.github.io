// 公共JS - 所有页面通用功能
window.addEventListener('DOMContentLoaded', function() {
    // 1. 返回顶部按钮功能
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 2. 图片点击放大预览功能【核心要求】
    const modal = document.querySelector('.image-modal');
    const modalImg = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close-modal');
    const zoomImgs = document.querySelectorAll('.zoom-img');

    zoomImgs.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('show');
            // 优先取高清图地址，无则取原图
            modalImg.src = this.dataset.src || this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden'; // 禁止滚动
        });
    });

    // 关闭放大图片
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // 恢复滚动
    }

    // 3. 移动端菜单展开与收起
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.nav-list');
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});