(function() {
    function regenerateMessage() {
    
        if (window.SillyTavern && window.SillyTavern.getContext) {
            const context = SillyTavern.getContext();
            if (context && typeof context.regenerateLastMessage === 'function') {
                context.regenerateLastMessage();
                console.log('分支功能正');
                return;
            }
        }
        
    
        const btn = document.getElementById('option_regenerate');
        if (btn) {
            btn.click();
            console.log('⚠️ 通过模拟点击重新生成');
        } else {
            console.error('找不到重新生成按钮');
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
        
        gif.onclick = regenerateMessage;
        
        document.body.appendChild(gif);
        console.log('右下角动图已添加，CDN路径:', gif.src);
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addGif);
    } else {
        addGif();
    }
})();
