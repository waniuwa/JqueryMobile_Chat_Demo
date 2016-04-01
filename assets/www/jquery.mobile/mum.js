var fuc = function() {

				$(".delete").on("click", function() {
					var listitem = $(this).parent("li");

					confirmAndDelete(listitem);
				});
				$("#btnadd").on("click", function() {

					$("#editmem").popup("open");
				});

				$("#btnsave").on("click", function() {
					if ($("#itemcon").val() == "") {
						return;
					} else {
						var con = '<li class=" ui-first-child"><a class="membtn"><h3 class="memtit">' + $("#itemtit").val() + '</h3><p class="mencon">' + $("#itemcon").val() + '</p> <span class="ui-li-aside time">' + $("#itemtime").val() + '</span></a><a class="delete ui-btn ui-icon-delete ui-btn-right ui-mini" title="Delete" href="#"> </a></li>';
						$("#mumlst").append(con).listview("refresh");
						$("#itemtit").val("");
						$("#itemcon").val("");
						$("#itemtime").val("");
					}

				});

				function confirmAndDelete(listitem, transition) {
					listitem.children(".ui-btn").addClass("ui-btn-active");
					$("#confirm .topic").remove();
					listitem.find(".topic").clone().insertAfter("#question");
					$("#confirm").popup("open");
					$("#confirm #yes").on("click", function() {
						if (transition) {
							listitem.addClass(transition).on("webkitTransitionEnd transitionend otransitionend", function() {
								listitem.remove();
								$("#mumlst").listview("refresh").find(".border-bottom").removeClass("border-bottom");
							}).prev("li").children("a").addClass("border-bottom").end().end().children(".ui-btn").removeClass("ui-btn-active");
						} else {
							listitem.remove();
							$("#mumlst").listview("refresh");
						}
					});
					$("#confirm #cancel").on("click", function() {
						listitem.children(".ui-btn").removeClass("ui-btn-active");
						$("#confirm #yes").off();
					});
				};

			};