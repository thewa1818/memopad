let bmi = ""
let w = ""
let h = ""
let d = ""
let $bmi_text = $("#bmi_text")


$("#btn").on("click", function () {
  w = $("#weight").val();
  h = $("#tall").val();
  bmi = Math.round(w / ((h / 100) * (h / 100)));
  d = $("#day").val();

  console.log(w);
  console.log(h);
  console.log(bmi);
  console.log(d);

  //色んなものが表示されてしまう
  if (d === "") {
    alert("日付を記入してね");
    return;
  } else if (w === "") {
    alert("体重を記入してね");
    return;
  } else if (h === "") {
    alert("身長を記入してね");
    return;
  }

  $(".bmi_total").fadeIn();

  $("#bmi_text").fadeIn();

  $("#bmi_kekka").text(bmi);

  $("#bmi_click").fadeIn();

  localStorage.setItem(d, bmi);
  console.log(localStorage.getItem(d), "BMI値");

  const level = [
    "痩せすぎだよ",
    "適正体重！",
    "ぽっちゃりさん",
    "もう食うなデブ！",
  ];

  // console.log(level);

  if (bmi <= 19) {
    console.log(level[0]);
    $bmi_text.text("痩せすぎだよ");
  } else if (bmi < 25 && bmi >= 19) {
    console.log(level[1]);
    $bmi_text.text("適正体重！");
  } else if (bmi < 35 && bmi >= 25) {
    console.log(level[2]);
    $bmi_text.text("ぽっちゃりさん");
  } else {
    console.log(level[3]);
    $bmi_text.text("もう食うなデブ！");
  }

  const html = `
<tr>
    <th>${d}の</th>
    <td>BMIは${bmi}です。</td>
</tr>`;

  $("#list").prepend(html);
  $("#list").show(html);
});

$("#bmi_click").on("click", function () {
  // $(".diet_pocha").hide();

  //最後までいくともう最初の結果が出てこない
  if (bmi <= 19) {
    $(".diet_yase").fadeIn();
  } else if (bmi < 25 && bmi >= 19) {
    $(".diet_tekisei").fadeIn();
  } else if (bmi < 35 && bmi >= 25) {
    $(".diet_pocha").fadeIn();
  } else {
    $(".diet_debu").fadeIn();
  }
});

$(".diet_close").on("click", function () {
  $(".diet_yase").fadeOut();
  $(".diet_tekisei").fadeOut();
  $(".diet_pocha").fadeOut();
  $(".diet_debu").fadeOut();
});

$("#btn2").on("click", function () {
  $("#weight,#tall,#day").val("");
  $(".bmi_total").hide();
  $("#bmi_text").hide();
  $("#bmi_click").hide();
});

$("#btn3").on("click", function () {
  localStorage.clear();
  $("#list").empty();
  $(".bmi_total").hide();
  $("#bmi_text").hide();
  $("#weight,#tall,#day").val("");
  $("#bmi_click").hide();
});
