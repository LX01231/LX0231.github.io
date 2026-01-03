// 留言页交互功能
window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('message-form');
    const username = document.getElementById('username');
    const msgContent = document.getElementById('msg-content');
    const msgList = document.getElementById('message-list');
    const toast = document.getElementById('toast');
    let messages = JSON.parse(localStorage.getItem('pingyuMessages')) || [];

    // 渲染留言列表
    renderMessages();
    function renderMessages() {
        if(messages.length === 0) {
            msgList.innerHTML = '<div class="empty-message">暂无留言，快来抢沙发吧~</div>';
            return;
        }
        let html = '';
        messages.forEach((item, index) => {
            html += `
                <div class="message-item">
                    <div class="msg-header">
                        <span class="message-username">${item.name}</span>
                        <span class="message-time">${item.time}</span>
                        <span class="message-delete" data-index="${index}">删除</span>
                    </div>
                    <div class="message-content">${item.content}</div>
                </div>
            `;
        });
        msgList.innerHTML = html;
        // 绑定删除事件
        bindDelete();
    }

    // 提交留言
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = username.value.trim();
        const content = msgContent.value.trim();
        if(!name || !content) return;
        // 组装留言数据
        const newMsg = {
            name: name,
            content: content,
            time: new Date().toLocaleString()
        };
        messages.unshift(newMsg);
        localStorage.setItem('pingyuMessages', JSON.stringify(messages));
        renderMessages();
        form.reset(); // 重置表单
        // 显示成功提示
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });

    // 删除留言
    function bindDelete() {
        const delBtns = document.querySelectorAll('.message-delete');
        delBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const index = this.dataset.index;
                messages.splice(index, 1);
                localStorage.setItem('pingyuMessages', JSON.stringify(messages));
                renderMessages();
            });
        });
    }
});