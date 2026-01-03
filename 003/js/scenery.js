// 风光页 标签切换功能
window.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            // 切换按钮样式
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // 切换内容区域
            tabContents.forEach(content => {
                content.classList.remove('active');
                if(content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
});