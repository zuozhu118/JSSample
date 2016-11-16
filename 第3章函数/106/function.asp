<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<% 
function randStr(vDigit)
	numn="0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,辉,I,J,K,L,明,N,O,P,Q,日,宋,T,U,V,W,X,Y,Z"     '这里还可以继续添加
	numns=split(numn,",")
	for i=1 to vDigit   '注意:此处不可用do while循环
		Randomize
		num1=numns(int((35)*rnd))  '
		numimage=num1
		numi=numi&numimage
		num=num&num1
	next
	randStr=num
end function
%>