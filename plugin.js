(function() {
    function regenerateWithBranch() {
        const command = '/regen';
        const textarea = document.querySelector('#send_textarea');
        if (textarea) {
            textarea.value = command;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
            const sendBtn = document.querySelector('#send_but, #send_button');
            if (sendBtn) sendBtn.click();
            console.log('重新生成');
        } else {
            console.error('找不到输入框');
        }
    }

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
        
        gif.onclick = regenerateWithBranch;
        
        document.body.appendChild(gif);
        console.log('插件已加载完毕');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addGif);
    } else {
        addGif();
    }
})();
