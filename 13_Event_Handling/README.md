Event Handling di React

Event handling dalam React adalah cara aplikasi merespons interaksi pengguna, seperti klik tombol, input teks, atau gerakan mouse. Dalam React, kita menggunakan atribut yang dimulai dengan "on" untuk mendefinisikan event handler, seperti onClick, onChange, dan onSubmit.

Contoh penggunaan event handler untuk tombol:

javascript
Copy code
<button onClick={handleClick}>Click Me!</button>
Fungsi handleClick akan dieksekusi saat tombol ditekan. Kita dapat mengakses objek event untuk mendapatkan informasi lebih lanjut tentang peristiwa yang terjadi, seperti nilai input:

javascript
Copy code
const handleInputChange = (event) => {
  setValue(event.target.value);
};
Event handling sering terhubung dengan pengelolaan state. Saat pengguna berinteraksi, kita dapat memperbarui state dan secara otomatis memperbarui antarmuka pengguna. Ini menciptakan aplikasi yang responsif dan interaktif.

Dengan menguasai event handling, kita dapat membangun aplikasi web yang memberikan pengalaman pengguna yang baik.