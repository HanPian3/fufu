(function() {
    function addGif() {
        if (document.getElementById('my-roll-gif')) return;
        
        const gif = document.createElement('img');
        gif.id = 'my-roll-gif';
        // 🎯 直接使用 CDN 固定地址，和本地文件无关
        gif.src = 'https://cdn.jsdelivr.net/gh/HanPian3/fufu/images/dt2.gif';
        gif.onerror = () => console.error('CDN图片加载失败:', gif.src);
        
        gif.style.position = 'fixed';
        gif.style.bottom = '80px';
        gif.style.right = '300px';
        gif.style.width = '80px';
        gif.style.cursor = 'pointer';
        gif.style.zIndex = '999999';
        
        gif.onclick = () => {
            const btn = document.getElementById('option_regenerate');
            if (btn) btn.click();
        };
        
        document.body.appendChild(gif);
        console.log('右下角动图已添加，CDN路径:', gif.src);
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addGif);
    } else {
        addGif();
    }
})();