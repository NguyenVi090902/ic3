// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 1 - Bài 1, 2: Phần cứng máy tính
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Phần cứng máy tính",
  subtitle: "SPARK Level 1 · Bài 1, 2",
  backUrl: "index.html#/0/0/0", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🖥️",
  color: "green",
  cards: [
    { tag: "Phần cứng", img: "decks/img/hardware.png", front: "Phần cứng (Hardware) là gì?", back: "Là các **thiết bị** mà chúng ta có thể **cầm, nắm và nhìn thấy** được." },


    { tag: "Thiết bị ngoại vi", front: "Thiết bị ngoại vi là gì?", back: "Là các **thiết bị phần cứng** nằm **bên ngoài thùng máy (case)** hoặc thân chính của máy tính, được **kết nối với máy tính**." },

    { tag: "Thiết bị nhập", img: "decks/img/input-flow.png", front: "Thiết bị nhập (Input Device) là gì?", back: "Là thiết bị giúp em **gửi, đưa, truyền, nhập** thông tin **vào** máy tính." },
    { tag: "Thiết bị nhập", img: "decks/img/input-flow.png", imgBack: "decks/img/list-input.png", front: "Kể tên các thiết bị nhập.", back: "**Keyboard** (Bàn phím)\n**Mouse** (Chuột)\n**Microphone**\n**Scanner** (Máy quét)\n**Webcam**" },

    { tag: "Thiết bị xuất", img: "decks/img/output-flow.png", front: "Thiết bị xuất (Output Device) là gì?", back: "Là những thiết bị **đưa kết quả xử lí** của máy tính **đến con người**." },
    { tag: "Thiết bị xuất", img: "decks/img/output-flow.png", imgBack: "decks/img/list-output.png", front: "Kể tên các thiết bị xuất.", back: "**Speakers** (Loa)\n**Monitor** (Màn hình)\n**Printer** (Máy in)\n**Headphone** (Tai nghe)" },

    { tag: "Cổng kết nối", img: "decks/img/monitor.png", imgBack: "decks/img/ports-display.png", front: "Hai cổng nào dùng để kết nối với màn hình, máy chiếu và TV?", back: "Cổng **HDMI** và cổng **VGA**." },
    { tag: "Cổng kết nối", img: "decks/img/net-port.png", imgBack: "decks/img/net-ways.png", front: "Cổng kết nối mạng (Network ports) dùng để làm gì? Có những cách kết nối mạng nào?", back: "Dùng để **kết nối với mạng**.\n**Cáp kết nối có dây**\n**Kết nối Wifi**" },
    { tag: "Cổng kết nối", img: "decks/img/usb-plug.png", imgBack: "decks/img/usb-plug.png", front: "Cổng USB dùng để kết nối với những thiết bị nào?", back: "Máy in, máy quét, máy ảnh, ổ đĩa Flash, bàn phím, chuột, …" },

    { tag: "Loại máy tính", img: "decks/img/desktop.png", front: "Đặc điểm của máy tính để bàn?", back: "**Đặt cố định** ở bàn làm việc.\n**Hạn chế di chuyển** do luôn phải kết nối với nguồn điện." },
    { tag: "Loại máy tính", img: "decks/img/laptop.png", front: "Máy tính xách tay (Laptop) có đặc điểm gì?", back: "Màn hình, bàn phím, camera, loa, bàn di chuột, … **trên cùng một thiết bị**.\nNhỏ, nhẹ và **dễ di động** do có thể dùng **Pin** hoặc kết nối nguồn điện." },
    { tag: "Loại máy tính", img: "decks/img/aio.png", front: "Máy tính tất cả trong một (All-in-One) có đặc điểm gì?", back: "Giống máy tính để bàn, **tích hợp thùng máy vào màn hình**.\nÍt chiếm diện tích, tuy nhiên phải **kết nối nguồn điện** khi dùng." },
    { tag: "Loại máy tính", img: "decks/img/tablet.png", front: "Máy tính bảng (Tablet) có đặc điểm gì?", back: "Được thiết kế đủ nhỏ để **cầm trên tay**.\nNhỏ, nhẹ, **dễ di động** và có thể dùng **Pin**." },
    { tag: "Loại máy tính", img: "decks/img/phone.png", front: "Điện thoại thông minh (Smartphone) có đặc điểm gì?", back: "Thường có **màn hình cảm ứng**, thiết kế **nhỏ, nhẹ, dễ di động**, có thể dùng **Pin**." },
    { tag: "Loại máy tính", icon: "?", imgBack: "decks/img/aio.png", front: "Loại máy tính nào tích hợp thùng máy vào màn hình?", back: "Máy tính tất cả trong một (**All-in-One**)." },
    { tag: "Loại máy tính", icon: "?", imgBack: "decks/img/desktop.png", front: "Loại máy tính nào đặt cố định ở bàn làm việc và luôn phải kết nối nguồn điện?", back: "Máy tính để bàn (**Desktop Computer**)." },

    { tag: "Thiết bị nhập tích hợp", img: "decks/img/touchpad.png", front: "Bàn di chuột (Touchpad) là gì?", back: "Là một **thiết bị nhập cảm ứng**, được **tích hợp trên laptop**" },
    { tag: "Thiết bị nhập tích hợp", img: "decks/img/touchscreen.png", front: "Màn hình cảm ứng (Touchscreen) giúp em làm gì?", back: "Giúp tương tác với thiết bị máy tính bằng cách **chạm ngón tay** vào các vùng trên màn hình.\nVừa là **thiết bị xuất**, vừa là **thiết bị nhập**." },
    { tag: "Thiết bị nhập tích hợp", img: "decks/img/headset.png", front: "Bộ tai nghe (Headset) tích hợp những gì?", back: "Là thiết bị tích hợp **loa** và **micro**.\nVừa là **thiết bị xuất**, vừa là **thiết bị nhập**." },
    { tag: "Thiết bị nhập tích hợp", icon: "?", imgBack: "decks/img/both-io.png", front: "Kể tên 2 thiết bị vừa là thiết bị xuất, vừa là thiết bị nhập.", back: "**Màn hình cảm ứng** (Touchscreen)\n**Bộ tai nghe** (Headset)" }
  ]
};
