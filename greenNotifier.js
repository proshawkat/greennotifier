
var greenNotifierConfig = {} ;
var greenNotifier = function () {
	this.config = {
		message : 'This is green notify' ,
		type : 'success' ,
		autoHide : true ,
		width: 'fit-content',
	    maxWidth: '70%',
		color: '#fff',
		fontWeight: '400',
		fontSize: '16',
		fontFamily: 'Open Sans',
		borderRadius: '0',
		borderWidth: '0',
		borderStyle: 'solid',
		borderColor: '#fff',
		hideDuration : 3000,
		fadeIn: '500',
		fadeOut: '500',
		placement : 'bottom-center'
	}

	this.customConfig = {
	}

	this.notify = function (message , type) {
		var type = this.customConfig.type != undefined ? this.customConfig.type : this.config.type;
		var autoHide = this.customConfig.autoHide != undefined ? this.customConfig.autoHide : this.config.autoHide ;
		var width = this.customConfig.width != undefined ? this.customConfig.width : this.config.width ;
		var maxWidth = this.customConfig.maxWidth != undefined ? this.customConfig.maxWidth : this.config.maxWidth ;
		var color = this.customConfig.color != undefined ? this.customConfig.color : this.config.color ;
		var fontWeight = this.customConfig.fontWeight != undefined ? this.customConfig.fontWeight : this.config.fontWeight ;
		var fontSize = this.customConfig.fontSize != undefined ? this.customConfig.fontSize : this.config.fontSize ;
		var fontFamily = this.customConfig.fontFamily != undefined ? this.customConfig.fontFamily : this.config.fontFamily ;
		var borderRadius = this.customConfig.borderRadius != undefined ? this.customConfig.borderRadius : this.config.borderRadius ;
		var borderWidth = this.customConfig.borderWidth != undefined ? this.customConfig.borderWidth : this.config.borderWidth ;
		var borderStyle = this.customConfig.borderStyle != undefined ? this.customConfig.borderStyle : this.config.borderStyle ;
		var borderColor = this.customConfig.borderColor != undefined ? this.customConfig.borderColor : this.config.borderColor ;
		var hideDuration = this.customConfig.hideDuration != undefined ? this.customConfig.hideDuration : this.config.hideDuration ;
		var placement = this.customConfig.placement != undefined ? this.customConfig.placement : this.config.placement ;
		

		var html = '';
		if ( message != '' && type != '') {
			this.config.message = message ;
			this.config.type = type ;
			html += '<div id ="greenNotifier_area" class="greenNotifier_area">';
				html += '<div class="greenNotifier_position_area greenNotifier_'+placement+'">';
					html += '<div class="greenNotifier_type_area greenNotifier_'+type+'" style="width: '+width+';max-width:'+maxWidth+';color:'+color+';font-size:'+fontSize+'px;font-weight:'+fontWeight+';font-family:'+fontFamily+';border-radius:'+borderRadius+'px;border-width:'+borderWidth+'px;border-style:'+borderStyle+';border-color:'+borderColor+'">';
						html += '<span class="greenNotifier_closer" id="greenNotifier_closer">&#10005;</span>';
						html += '<p class="greenNotifier_msg">'+message+'</p>';
					html += '</div>';
				html += '</div>';
			html += '</div>';
		}

		greenNotifierConfig[0] = this.config ;
		greenNotifierConfig[1] = this.customConfig ;
		$(document).ready(function () {
			if ($('#greenNotifier_area')) $('#greenNotifier_area').remove();
			$("body").append(html);
			var hideDuration = greenNotifierConfig[1].hideDuration != undefined ? greenNotifierConfig[1].hideDuration : greenNotifierConfig[0].hideDuration;
			var fadeIn = greenNotifierConfig[1].fadeIn != undefined ? greenNotifierConfig[1].fadeIn : greenNotifierConfig[0].fadeIn;
			var fadeOut = greenNotifierConfig[1].fadeOut != undefined ? greenNotifierConfig[1].fadeOut : greenNotifierConfig[0].fadeOut;
			$('#greenNotifier_area').hide().fadeIn(fadeIn);
			setTimeout(function(){ 
				$('#greenNotifier_area').fadeOut(fadeOut);
			}, hideDuration);

			$("#greenNotifier_closer").click(function(){
			    $("#greenNotifier_area").fadeOut(fadeOut);
			});

		});
	}
}



	

