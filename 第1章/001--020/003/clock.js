	function clockon(){
		var now=new Date();
		var year=now.getYear();
		var month=now.getMonth();
		var date=now.getDate();
		var day=now.getDay();
		var hour=now.getHours();
		var minu=now.getMinutes();
		var sec=now.getSeconds();
		var week;
		month=month+1;
		if(month<10) month="0"+month;
		if(date<10) date="0"+date;
		if(hour<10) hour="0"+hour;
		if(minu<10) minu="0"+minu;
		if(sec<10) sec="0"+sec;
		switch (day)
		  { case 1:
		        week="����һ";
				break;
			case 2:
		        week="���ڶ�";
				break;
			case 3:
		        week="������";
				break;
			case 4:
		        week="������";
				break;
			case 5:
		        week="������";
				break;
			case 6:
		        week="������";
				break;
			default:
		        week="������";
				break;
		  }
		var time="";
		time=year+"��"+month+"��"+date+"�� "+week+" "+hour+":"+minu+":"+sec;
		if(document.all){
			bgclock.innerHTML="ϵͳ���棺["+time+"]"
		}
		var timer=setTimeout("clockon()",200);
	}  
