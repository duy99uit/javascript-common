console.log("hi");
const List = {
  60722: {
    title: "Review dưỡng thể Serum The Ordinary Buffet trẻ hóa làn da",
    url: "https://fado.vn/blog/the-ordinary-buffet.n60722/",
    short_description:
      "<p>Lão hóa là một trong những dấu hiệu phổ biến của tuổi tác. Phụ nữ ở ngoài tuổi 30 sẽ&hellip;</p>\n",
    image:
      "https://fado.vn/blog/wp-content/uploads/2021/09/Review-ve-serum-The-Ordinary-Buffet-365x180.jpg",
  },
  61280: {
    title: "Kinh nghiệm chăm sóc da mặt sau sinh an toàn hiệu quả",
    url: "https://fado.vn/blog/cham-soc-da-mat-sau-sinh.n61280/",
    short_description:
      "<p>Sau khi sinh là lúc da chị em chúng ta thay đổi nhiều nhất. Thực tế có rất nhiều phương&hellip;</p>\n",
    image:
      "https://fado.vn/blog/wp-content/uploads/2021/10/Cham-soc-da-mat-sau-sinh-3-365x180.jpg",
  },
  61351: {
    title: "8 Mẫu túi đeo chéo Gucci hàng hiệu chính hãng bạn nên sở hữu",
    url: "https://fado.vn/blog/tui-deo-cheo-gucci.n61351/",
    short_description:
      "<p>Hiện nay, các sản phẩm túi đeo chéo Gucci đang dần độc chiếm thị trường thời trang và chinh phục&hellip;</p>\n",
    image:
      "https://fado.vn/blog/wp-content/uploads/2021/10/Nhung-mau-tui-deo-cheo-Gucci-min-365x180.jpg",
  },
  61759: {
    title: "Review Top 4 bếp điện từ Elmich được tin dùng nhiều nhất 2021",
    url: "https://fado.vn/blog/bep-dien-tu-elmich.n61759/",
    short_description:
      "<p>Tuy vừa mới xuất hiện trên thị trường Việt Nam không lâu nhưng bếp điện từ Elmich đã nhanh chóng&hellip;</p>\n",
    image: "https://fado.vn/blog/wp-content/uploads/2021/10/elmich-365x180.jpg",
  },
  61862: {
    title: "6 Mẫu giày bóng chuyền chuyên nghiệp tốt nhất năm 2021",
    url: "https://fado.vn/blog/giay-bong-chuyen.n61862/",
    short_description:
      "<p>Mọi người ở mọi lứa tuổi đều thích bóng chuyền. Nó là một môn thể thao rất phổ biến và&hellip;</p>\n",
    image:
      "https://fado.vn/blog/wp-content/uploads/2021/10/mua-giay-bong-chuyen-o-dau-365x180.jpg",
  },
  61912: {
    title: "Vitamin B9 (Acid Folic) là gì? 7 Tác dụng tuyệt vời với sức khỏe",
    url: "https://fado.vn/blog/vitamin-b9-co-tac-dung-gi.n61912/",
    short_description:
      "<p>Khi nghĩ đến vitamin B9, người ta nghĩ ngay đến người phụ nữ mang thai và uống thực phẩm chức&hellip;</p>\n",
    image:
      "https://fado.vn/blog/wp-content/uploads/2021/10/vitamin-B9-la-gi-365x180.jpg",
  },
};

const a = Object.getOwnPropertyNames(List);
var b = [];
console.log(a);
a.map((item) => {
  var newItem = {
    id: item,
    title: List[item].title,
    description: List[item].short_description,
    url: List[item].url,
    image: List[item].image,
  };
  b.push(newItem);
});
console.log(b);
