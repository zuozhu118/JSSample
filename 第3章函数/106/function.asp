<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<% 
function randStr(vDigit)
	numn="0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,��,I,J,K,L,��,N,O,P,Q,��,��,T,U,V,W,X,Y,Z"     '���ﻹ���Լ������
	numns=split(numn,",")
	for i=1 to vDigit   'ע��:�˴�������do whileѭ��
		Randomize
		num1=numns(int((35)*rnd))  '
		numimage=num1
		numi=numi&numimage
		num=num&num1
	next
	randStr=num
end function
%>