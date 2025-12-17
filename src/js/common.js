new WOW().init();

$(function () {
// AJAX
// $("#avaTop").load(
//   "https://landing.mangot5.com/template/ava/event/nav/nav.html"
// );
// $("#avaFooter").load(
//   "https://landing.mangot5.com/template/ava/event/nav/footer.html"
// );
// $("#avaList").load(
//   "https://landing.mangot5.com/template/ava/event/nav/nav-event.html"
// );

	// let domain = "https://landing.mangot5.com";
	// if (document.domain == '127.0.0.1') { // for dev
	//     domain = "http://127.0.0.1:8888/landing";
	// }


	// $.ajax({
	//     url: `${domain}/template/hot/event/nav/footer.html`,
	//     type:'GET',
	//     success: function(data){
	//     $('#hot_footer').html(data);

	//     }
	// });	
	// 本機 → 用相對路徑
	// 線上 → 用正式網域
	const isLocal = location.hostname === '127.0.0.1' || location.hostname === 'localhost';
	const domain = isLocal ? '' : 'https://landing.mangot5.com';

	$.ajax({
		url: `${domain}/template/hot/event/nav/footer.html`,
		type: 'GET',
		success: function (data) {
		$('#hot_footer').html(data);
		},
		error: function (xhr, status, err) {
		console.error('AJAX ERROR:', status, err, xhr.status);
		}
	});

// 彈跳視窗 開關
	// $("#pup_notice").on("click", function () {
	// 	$("#notice").fadeIn()
	// })
	// $("#close1").on("click", function () {
	// 	$("#notice").fadeOut()
	// })
	// $("#close2").on("click", function () {
	// 	$("#notice").fadeOut()
	// })
	function openNotice() {
		$("#notice")
		.addClass("is-open")
		.stop(true, true)
		.fadeIn(200); // 不要動畫就改 .show()

		$("body").css("overflow", "hidden");
	}

	function closeNotice() {
		$("#notice")
		.removeClass("is-open")
		.stop(true, true)
		.fadeOut(200); // 不要動畫就改 .hide()

		$("body").css("overflow", "");
	}

	// 打開
	$("#pup_notice").on("click", function (e) {
		e.preventDefault();
		openNotice();
	});

	// 關閉
	$("#close1, #close2").on("click", function (e) {
		e.preventDefault();
		closeNotice();
	});

	// 點遮罩關閉（可選）
	$("#notice").on("click", function (e) {
		if (e.target.id === "notice") closeNotice();
	});

});


