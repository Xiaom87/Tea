function getData() {
  let data = [];

  let basket = $(".basket");
  let items = $(basket).find(".cart-item");
  let total_price = $(basket).find("#total_price").text();

  $(items).each(function (idx, el) {
    let id = $(el).attr("data-id");
    let title = $(el)
      .find("#product_title_" + id)
      .text();
    let count = $(el)
      .find("#product_count_" + id)
      .text();
    let price = $(el)
      .find("#product_price_" + id)
      .text();

    let item = {};

    item.id = id;
    item.title = title;
    item.count = count;
    item.price = price;

    data.push(item);
  });
  data.total_price = total_price;
  return data;
}
$(".message-form-success").hide();
$(".message-form-error").hide();
$("#order_btn").click((e) => {
  e.preventDefault();
  $.ajax({
    url: "http://dimateoy.beget.tech/test.php",
    type: "post",
    data: {
      items: getData(),
      total_price: getData().total_price,
    },
    success: function (data) {
      if (data == 1) {
        $(".message-form-success").fadeIn();
      } else {
        $(".message-form-error").fadeIn();
      }
    },
    error: function (err) {
      console.log(err);
    },
  });
});
