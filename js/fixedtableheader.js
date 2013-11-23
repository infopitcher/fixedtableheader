/**
 * Fixed Table Header v1.0 
 * http://infopitcher.com
 *
 * Copyright 2013, Sakthi - http://infopitcher.com
 */

(function($) {
	   
$.fn.tableFixedHeader = function(options) {
		// Establish our default settings
		var settings = $.extend({
			height : 100,
			width : '100%'
		}, options);

		$(this).each(function(index) {
			$(this).find('tr:has(th)').wrapAll('<div class="table-header"><table><thead></thead></table></div>');
			$(this).find('tr:has(td)').wrapAll('<div class="table-content"><table><tbody></tbody></table></div>');
		});

		$(this).each(function (index) {
			var cnt = $(".fixed-table>tbody").contents();
			$(".fixed-table>tbody").replaceWith(cnt);
			var cnt1 = $(".fixed-table").contents();
			$(".fixed-table").replaceWith(cnt1);
		});
	   
		$('.table-header').each(function() {
			$(this).next().andSelf().wrapAll('<div class="table-wrap" />')
		});
	   
		function scrollbarWidth() {
			var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
			// Append our div, do our calculation and then remove it
			$('body').append(div);
			var w1 = $('div', div).innerWidth();
			div.css('overflow-y', 'scroll');
			var w2 = $('div', div).innerWidth();
			$(div).remove();
			return (w1 - w2);
		}                      
	   
		if ( settings.height ) {
			$('.table-content').css( 'max-height', settings.height );
		}

		if ( settings.width ) 
		$('.table-wrap').css( 'width', settings.width );
		
	   
		$(".table-wrap").each(function () {
			var total = $(this).find('.table-header thead tr th').length;
			for(var i = 0; i < total; i++){
				var newwidth = $(this).find(".table-content tbody tr td:eq(" + i + ")").width();
				if( i == total-1 ){
							$(this).find(".table-header thead tr th:eq(" + i + ")").css('width', newwidth + scrollbarWidth());
				} else {
							$(this).find(".table-header thead tr th:eq(" + i + ")").css('width',newwidth);
				}
			}
		});
}

}(jQuery));