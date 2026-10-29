# Trang chọn lớp học → link tương ứng

Web tĩnh (HTML/CSS/JS), chạy miễn phí trên **GitHub Pages**.

- `index.html` – trang cho học sinh
- `admin.html` – trang quản trị: sửa mọi link, thêm/xóa Level, cấp học, mật khẩu...
- `data.js` – nơi lưu toàn bộ nội dung (trang quản trị sẽ tự ghi file này)

## Đưa lên GitHub (1 lần)
1. Vào https://github.com/new → đặt tên repo (vd `hoc-tap`) → **Public** → Create.
2. Bấm **uploading an existing file**, kéo thả TOÀN BỘ file trong thư mục này (kể cả `.nojekyll`) → Commit.
3. **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save.**
4. Sau ~1 phút, link công khai: `https://TÊN_TÀI_KHOẢN.github.io/TÊN_REPO/`
   Trang quản trị: `.../admin.html`

## Cho phép trang quản trị lưu thay đổi
1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens → Generate new token**.
2. Repository access: **Only select repositories** → chọn repo này.
3. Permissions → Repository permissions → **Contents: Read and write** → Generate, copy token.
4. Mở `admin.html`, dán token (owner/repo tự nhận), sửa link, bấm **Lưu lên GitHub**. Đợi 1–2 phút để web cập nhật.

Chỉ người có token mới lưu được; học sinh mở admin.html cũng không sửa được gì.
Nếu không muốn dùng token: bấm **Tải data.js**, rồi upload đè file `data.js` trong repo.

## Trắc nghiệm có lưu điểm (Supabase)
1. Tạo project miễn phí tại https://supabase.com → **SQL Editor** → dán toàn bộ `supabase.sql` → Run.
2. **Project Settings → API**: chép *Project URL* và *anon key* vào `config.js`.
3. **Authentication → Users → Add user**: tạo tài khoản giáo viên (email + mật khẩu). Vào **Authentication → Sign In / Providers** và **tắt "Allow new users to sign up"** để người lạ không tự tạo tài khoản.
4. Mở `teacher.html` → đăng nhập → tab **Lớp & học sinh** dán danh sách (Trường, Lớp, Họ tên); tab **Câu hỏi** nạp `sample-questions.json` làm thử.
5. Dán link `quiz.html?q=<mã bài>` vào ô link của bài ôn trong `admin.html`.
Học sinh: bấm bài → nhập mã lớp → chọn tên → làm bài → điểm tự lưu.
