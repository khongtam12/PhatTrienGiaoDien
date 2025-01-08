var hoaDon = [275, 40, 430];

function tinhTienTip(hoaDon) {
    var tip = (hoaDon >= 50 && hoaDon <= 300) ? hoaDon * 0.15 : hoaDon * 0.2;
    console.log(`Hóa đơn là ${hoaDon}, tiền tip là ${tip}, tổng cộng là ${hoaDon + tip}`);
}

hoaDon.forEach(tinhTienTip);