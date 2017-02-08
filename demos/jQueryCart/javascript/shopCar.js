$(function () {
  //去除双击事件选中的影响
  $('.addOne,.cutOne').each(function (index, item) {
    item.onselectstart = function () {
      return false;
    }
  });
  //input的值改变时，触发计算价格的函数
  $('.proNum').change(function () {
    if ($(this).val() == '') {
      $(this).prop('value', 0);
    }
    countTotlePrice();
  });
  //+点击事件
  $('.addOne').click(function () {
    let oldNum = parseInt($(this).parent().find('input').val());
    oldNum++;
    $(this).parent().find('input').val(oldNum);
    $(this).parent().parent().find('.selectMe').prop('checked', true);
    countTotlePrice();
  });
  //-点击事件
  $('.cutOne').click(function () {
    let oldNum = parseInt($(this).parent().find('input').val());
    oldNum--;
    if (oldNum < 1) {
      oldNum = 1;
    }
    $(this).parent().find('input').val(oldNum);
    $(this).parent().parent().find('.selectMe').prop('checked', true);
    countTotlePrice();
  });
  //计算每一行的价格
  function countTotlePrice() {
    let totlePrice = 0,
        totleNum = 0,
        rowPrice = 0;
    $('.proList').each(function (index, item) {
      let proNum = $(item).find('.proNum').val(),
          proPrice = $(item).find('.proPrice').text();
      proPrice = parseFloat(proPrice);
      proNum = parseInt(proNum);
      if ($(item).find('.selectMe').prop('checked')) {
        rowPrice = proPrice * proNum;
        $(item).find('.rowPrice').text(rowPrice.toFixed(2));
        totlePrice += rowPrice;
        totleNum += proNum;
      }
    });
    $('.totlePrice').text(totlePrice.toFixed(2));
    $('.totleNum').text(totleNum);
  }

  //全选点击事件
  $('.selectAll').click(function () {
    $('.selectAll,.selectMe').prop('checked', $(this).prop('checked'));
    countTotlePrice();
  });
  //商品的checked的点击事件
  $('.selectMe').click(function () {
    if (!($(this).prop('checked'))) {
      $('.selectAll').prop('checked', false);
    }
    countTotlePrice();
  });
  countTotlePrice();
});
