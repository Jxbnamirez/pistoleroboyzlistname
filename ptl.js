// ข้อมูลตัวอย่างตามในรูปที่คุณส่งมา
const members = [
    { name: "Nongprem Ddot", type: "Pistoleroboyz", fb: "https://www.facebook.com/nongpremddot", img: "7B3C307C-AC4A-40E4-92E3-47DE2E25DDA5.png" },
    { name: "Maxsy Saidara", type: "Saidara425", fb: "https://www.facebook.com/maxsy.deathl", img: "626869724_995778360282760_939413960702647768_n.jpg  " },
    { name: "Sunny Saidara", type: "Saidara425", fb: "https://www.facebook.com/sunny.bagey", img: "495152845_122161052972499706_3710110999588820411_n.jpg" },
    { name: "Bangguy Saidara", type: "Saidara425", fb: "https://www.facebook.com/bang.guy.504726", img: "506451037_122142308714409867_4062909546101569705_n.jpg" },
    { name: "Aishi Wellesley", type: "wellesley", fb: "#", img: "https://www.wellesleygg.xyz/assets/logowell.png" },
    { name: "Alon Wellesley", type: "wellesley", fb: "#", img: "https://www.wellesleygg.xyz/assets/logowell.png" },
];

function renderMembers(data) {
    const grid = document.getElementById('memberGrid');
    grid.innerHTML = data.map(m => `
        <div class="col">
            <div class="member-card">
                <img src="${m.img}" class="member-img">
                <div>
                    <p class="member-name text-truncate">${m.name}</p>
                    <a href="${m.fb}" class="fb-link">Facebook</a>
                </div>
            </div>
        </div>
    `).join('');
}

// ระบบ Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.filter-btn.active').classList.remove('active');
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        const filteredData = filter === 'all' ? members : members.filter(m => m.type === filter);
        renderMembers(filteredData);
    });
});

// เริ่มต้นหน้าเว็บ
renderMembers(members);