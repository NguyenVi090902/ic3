// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 1 - Bài 3: Phần mềm và các loại phần mềm
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Phần mềm và các loại phần mềm",
  subtitle: "SPARK Level 1 · Bài 3",
  backUrl: "index.html#/0/0/0", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "💿",
  color: "green",
  cards: [
    { tag: "Phần mềm", front: "Phần mềm máy tính (Software) là gì?", back: "Là những **chương trình** do **trí tuệ con người** tạo ra nhằm phục vụ cho mục đích sử dụng của con người." },
    // { tag: "Phần mềm", img: "decks/img/ppt.png", front: "Microsoft PowerPoint dùng để làm gì?", back: "**Tạo bài trình chiếu**" },
    // { tag: "Phần mềm", img: "decks/img/word.png", front: "Microsoft Word dùng để làm gì?", back: "**Xử lí văn bản**" },
    // { tag: "Phần mềm", img: "decks/img/chrome.png", front: "Google Chrome dùng để làm gì?", back: "**Tìm kiếm thông tin** trên Internet" },

    // { tag: "Phân biệt phần mềm", front: "Có thể phân biệt các loại phần mềm theo những tiêu chí nào?", back: "Theo **quyền hạn can thiệp vào mã nguồn**\nTheo **tính năng và môi trường sử dụng**" },
    { tag: "Phân biệt phần mềm", front: "Phần mềm mã nguồn mở (Open Source) là gì?", back: "Là phần mềm mà người dùng thường được **sử dụng miễn phí**, có thể **xem, sửa đổi và chia sẻ** mã nguồn." },
    { tag: "Phân biệt phần mềm", img: "decks/img/linux.png", front: "Ví dụ về phần mềm mã nguồn mở?", back: "**Linux**" },
    { tag: "Phân biệt phần mềm", front: "Phần mềm độc quyền (Proprietary) là gì?", back: "Là phần mềm được bán hoặc phân phối với **giấy phép**, người dùng **không thể xem hoặc chỉnh sửa** mã nguồn." },
    { tag: "Phân biệt phần mềm", img: "decks/img/office-windows.png", front: "Ví dụ về phần mềm độc quyền?", back: "**Microsoft Office**\n**Microsoft Windows**" },
    // { tag: "Phân biệt phần mềm", imgBack: "decks/img/linux.png", front: "Linux thuộc loại phần mềm nào?", back: "Phần mềm **mã nguồn mở** (Open Source)." },
    // { tag: "Phân biệt phần mềm", imgBack: "decks/img/office-windows.png", front: "Microsoft Windows và Microsoft Office thuộc loại phần mềm nào?", back: "Phần mềm **độc quyền** (Proprietary)." },

    { tag: "Loại ứng dụng", img: "decks/img/desktop-apps.png", front: "Chương trình ứng dụng (Desktop Application) là gì?", back: "Là các **phần mềm** giúp em thực hiện những **công việc cụ thể** như: soạn thảo văn bản, bảng tính, trình chiếu, …" },
    { tag: "Loại ứng dụng", front: "Chương trình ứng dụng (Desktop Application) phải được làm gì trước khi chạy?", back: "Phải được **cài đặt trên máy tính** trước khi chương trình ứng dụng có thể chạy." },
    { tag: "Loại ứng dụng", img: "decks/img/desktop-apps.png", front: "Kể tên một số chương trình ứng dụng (Desktop Application).", back: "**Microsoft Word**\n**Microsoft Excel**\n**Microsoft PowerPoint**\n**Paint**" },
    { tag: "Loại ứng dụng", img: "decks/img/web-apps.png", front: "Ứng dụng Web (Web Application) là gì?", back: "Là các **phần mềm** hoạt động trên **Internet**, dùng để phục vụ nhu cầu của em." },
    // { tag: "Loại ứng dụng", img: "decks/img/web-apps.png", front: "Kể tên một số ứng dụng Web của Google.", back: "**Gmail**\n**Contacts**\n**Drive**\n**Calendar**\n**Translate**\n**Photos**\n**News**\n**Meet**\n**Chat**" },
    // { tag: "Loại ứng dụng", front: "Loại ứng dụng nào phải được cài đặt trên máy tính trước khi chạy?", back: "Chương trình ứng dụng (**Desktop Application**)." },
    // { tag: "Loại ứng dụng", front: "Loại ứng dụng nào hoạt động trên Internet?", back: "Ứng dụng Web (**Web Application**)." },

    { tag: "Khái niệm", front: "Program (Chương trình) là gì?", back: "Bất kì tập hợp **các lệnh hoặc mã** được viết **để máy tính thực thi**." },
    { tag: "Khái niệm", front: "Application (Ứng dụng) là gì?", back: "Được thiết kế để thực hiện **nhiều chức năng khác nhau**." },
    { tag: "Khái niệm", front: "App là gì?", back: "**Phiên bản nhẹ** của ứng dụng phần mềm, được thiết kế để chạy trên **điện thoại thông minh** và **máy tính bảng**, nhưng có một số cũng chạy trên máy tính xách tay." }
  ]
};
