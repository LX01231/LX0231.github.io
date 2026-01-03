// 美食页/特产页/非遗页 基础交互
window.addEventListener('DOMContentLoaded', function() {
    // 卡片悬浮轻微上浮效果 增强体验
    const cards = document.querySelectorAll('.food-card, .specialty-card, .intangible-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
});