(function() {
    function regenerateLastMessage() {
        // 方法1：尝试官方 API（如果有）
        const ctx = window.SillyTavern?.getContext?.();
        if (ctx && typeof ctx.regenerateLastMessage === 'function') {
            ctx.regenerateLastMessage();
            console.log('✅ 通过 API 重新生成');
            return;
        }
        
        // 方法2：模拟点击官方重新生成按钮
        const btn = document.getElementById('option_regenerate');
        if (btn) {
            btn.click();
            console.log('✅ 通过按钮重新生成');
            // 强制刷新分支选择器
            setTimeout(() => {
                const branchBtn = document.querySelector('.swipe_selector, .branch_selector, [class*="swipe"]');
                if (branchBtn) branchBtn.click();
            }, 100);
        } else {
            console.error('❌ 找不到重新生成按钮');
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
        
        gif.onclick = regenerateLastMessage;
        
        document.body.appendChild(gif);
        console.log('右下角动图已添加');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addGif);
    } else {
        addGif();
    }
})();
