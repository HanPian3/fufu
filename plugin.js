(function() {
    // 1. 使用官方标准指令来触发重新生成（这个指令100%会创建分支）
    function regenerateWithBranch() {
        // /regen 是酒馆内置的、最可靠的重新生成命令
        const command = '/regen';
        const textarea = document.querySelector('#send_textarea');
        if (textarea) {
            textarea.value = command;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            const sendBtn = document.querySelector('#send_but, #send_button');
            if (sendBtn) sendBtn.click();
            console.log('✅ 已通过官方指令重新生成');
        } else {
            console.error('❌ 找不到输入框');
        }
    }

    // 2. 添加右下角图片（这部分你不用改）
    function addGif() {
        if (document.getElementById('my-roll-gif')) return;
        
        const gif = document.createElement('img');
        gif.id = 'my-roll-gif';
        gif.src = 'https://cdn.jsdelivr.net/gh/HanPian3/fufu/images/dt2.gif';
        gif.onerror = () => console.error('CDN图片加载失败:', gif.src);
        
        gif.style.position = 'fixed';
        gif.style.bottom = '80px';
        gif.style.right = '300px';
        gif.style.width = '80px';
        gif.style.cursor = 'pointer';
        gif.style.zIndex = '999999';
        
        // 3. 关键: 把点击图片的动作绑定到上面的新函数
        gif.onclick = regenerateWithBranch;
        
        document.body.appendChild(gif);
        console.log('🎉 插件已加载完毕');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addGif);
    } else {
        addGif();
    }
})();
